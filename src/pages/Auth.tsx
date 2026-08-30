import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin/certificates", { replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/certificates` },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      toast.success("Account created — check your inbox if confirmation is required.");
      navigate("/admin/certificates");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return toast.error(error.message);
    navigate("/admin/certificates");
  };

  const google = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed");
      return;
    }
    if (result.redirected) return;
    navigate("/admin/certificates");
  };

  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Internal access"
        title="Sieve Capital administration"
        intro="Sign in to issue and manage internship certificates in the verification registry. Public certificate verification requires no account."
      />
      <section className="py-14">
        <div className="container max-w-md">
          <form onSubmit={submit} className="border border-border bg-paper-raised p-7 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.14em] text-soft">
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[10px] uppercase tracking-[0.14em] text-soft"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>
            <Button type="submit" variant="cyber" className="w-full h-11 text-xs" disabled={busy}>
              {mode === "signin" ? "Sign in" : "Create account"}
            </Button>
            <Button
              type="button"
              variant="cyber-outline"
              className="w-full h-11 text-xs"
              onClick={google}
            >
              Continue with Google
            </Button>
            <button
              type="button"
              className="text-[11px] text-soft hover:text-ink w-full text-center"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            >
              {mode === "signin"
                ? "No account yet? Create one"
                : "Already registered? Sign in"}
            </button>
          </form>
        </div>
      </section>
      <SieveFooter />
    </div>
  );
};

export default Auth;
