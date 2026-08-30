import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { toast } from "sonner";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

type Certificate = {
  id: string;
  certificate_code: string;
  holder_name: string;
  program: string;
  role_title: string | null;
  start_date: string | null;
  end_date: string | null;
  issued_on: string;
  mentor: string | null;
  status: string;
  notes: string | null;
};

const generateCode = () =>
  `SC-INT-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const getEmptyForm = () => ({
  certificate_code: generateCode(),
  holder_name: "",
  program: "Quantitative Research Internship",
  role_title: "Intern",
  start_date: "",
  end_date: "",
  mentor: "",
  notes: "",
});

const QrCell = ({ code }: { code: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const url = `${window.location.origin}/verify/${code}`;

  const download = () => {
    const canvas = ref.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${code}-qr.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex items-center gap-3">
      <div ref={ref} className="bg-white p-1.5">
        <QRCodeCanvas value={url} size={56} level="M" />
      </div>
      <div className="flex flex-col gap-1">
        <button
          onClick={download}
          className="text-[11px] text-bronze hover:underline text-left"
        >
          Download QR
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
            toast.success("Verification link copied");
          }}
          className="text-[11px] text-soft hover:text-ink text-left"
        >
          Copy link
        </button>
      </div>
    </div>
  );
};

const AdminCertificates = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<Certificate[]>([]);
  const [formMode, setFormMode] = useState<"single" | "bulk">("single");
  const [form, setForm] = useState(getEmptyForm());
  const [bulkCsv, setBulkCsv] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows((data ?? []) as Certificate[]);
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      if (!data.session) {
        navigate("/auth", { replace: true });
        return;
      }

      const { data: hasAdminRole, error: roleError } = await supabase.rpc(
        "has_role",
        {
          _user_id: data.session.user.id,
          _role: "admin",
        },
      );

      if (!active) return;

      if (roleError) {
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.session.user.id);

        setIsAdmin(!!roles?.some((r) => r.role === "admin"));
      } else {
        setIsAdmin(!!hasAdminRole);
      }

      await load();
      setChecking(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate, load]);

  const issueSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.certificate_code.trim()) {
      return toast.error("Certificate code is required");
    }
    setBusy(true);
    const { data: session } = await supabase.auth.getSession();
    const { error } = await supabase.from("certificates").insert({
      certificate_code: form.certificate_code.trim(),
      holder_name: form.holder_name,
      program: form.program,
      status: "valid",
      role_title: form.role_title || null,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      mentor: form.mentor || null,
      notes: form.notes || null,
      created_by: session.session?.user.id ?? null,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Certificate issued");
    setForm(getEmptyForm());
    load();
  };

  const issueBulk = async (e: React.FormEvent) => {
    e.preventDefault();
    const lines = bulkCsv
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      return toast.error("Please paste CSV data first");
    }

    // Skip header line if present
    const hasHeader =
      lines[0].toLowerCase().includes("certificate_code") ||
      lines[0].toLowerCase().includes("holder_name");
    const dataLines = hasHeader ? lines.slice(1) : lines;

    if (dataLines.length === 0) {
      return toast.error("No valid data rows found in CSV");
    }

    setBusy(true);
    const { data: session } = await supabase.auth.getSession();
    const currentUserId = session.session?.user.id ?? null;

    const batch = dataLines.map((line) => {
      const parts = line
        .split(",")
        .map((p) => p.trim().replace(/^["']|["']$/g, ""));
      return {
        certificate_code: parts[0] || generateCode(),
        holder_name: parts[1] || "Unknown",
        program: parts[2] || "Quantitative Research Internship",
        role_title: parts[3] || null,
        start_date: parts[4] || null,
        end_date: parts[5] || null,
        mentor: parts[6] || null,
        notes: parts[7] || null,
        status: "valid",
        created_by: currentUserId,
      };
    });

    const { error } = await supabase.from("certificates").insert(batch);
    setBusy(false);

    if (error) return toast.error(error.message);
    toast.success(`Successfully issued ${batch.length} certificates`);
    setBulkCsv("");
    load();
  };

  const revoke = async (row: Certificate) => {
    const next = row.status === "valid" ? "revoked" : "valid";
    const { error } = await supabase
      .from("certificates")
      .update({ status: next })
      .eq("id", row.id);
    if (error) return toast.error(error.message);
    toast.success(`Certificate marked ${next}`);
    load();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-background">
        <SieveNav />
        <div className="container pt-40 text-soft text-sm">
          Loading registry…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Registry administration"
        title="Issue and manage certificates"
        intro="Generate custom or auto-generated code and QR verification link for each internship certificate. The QR can be printed directly on the document; anyone scanning it sees the authenticated record."
      />

      <section className="py-8 border-b border-border">
        <div className="container flex flex-wrap items-center gap-3">
          <Link to="/verify" className="text-[13px] text-bronze link-underline">
            Open public verification page
          </Link>
          <button
            onClick={signOut}
            className="text-[13px] text-soft hover:text-ink ml-auto"
          >
            Sign out
          </button>
        </div>
      </section>

      {!isAdmin && (
        <section className="py-10 border-b border-border">
          <div className="container">
            <div className="border border-border bg-paper-raised p-7 max-w-2xl">
              <h2 className="font-display text-xl text-ink mb-2">
                Administrator access required
              </h2>
              <p className="text-soft text-sm leading-relaxed">
                Your account is signed in but does not hold the administrator
                role, so issuing and revoking certificates is disabled. An
                existing administrator must grant the role before you can write
                to the registry.
              </p>
            </div>
          </div>
        </section>
      )}

      {isAdmin && (
        <section className="py-14 border-b border-border">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <p className="kicker">Issue certificates</p>
              <div className="flex gap-2 border border-border p-1 bg-paper-raised">
                <button
                  type="button"
                  onClick={() => setFormMode("single")}
                  className={`px-3 py-1 text-xs transition-colors ${
                    formMode === "single"
                      ? "bg-bronze text-white font-medium"
                      : "text-soft hover:text-ink"
                  }`}
                >
                  Single Record
                </button>
                <button
                  type="button"
                  onClick={() => setFormMode("bulk")}
                  className={`px-3 py-1 text-xs transition-colors ${
                    formMode === "bulk"
                      ? "bg-bronze text-white font-medium"
                      : "text-soft hover:text-ink"
                  }`}
                >
                  Bulk Import (CSV)
                </button>
              </div>
            </div>

            {formMode === "single" ? (
              <form
                onSubmit={issueSingle}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
              >
                <div className="space-y-2 md:col-span-3">
                  <div className="flex justify-between items-center">
                    <Label
                      htmlFor="certificate_code"
                      className="text-[10px] uppercase tracking-[0.14em] text-soft"
                    >
                      Certificate Code *
                    </Label>
                    <button
                      type="button"
                      onClick={() =>
                        setForm({ ...form, certificate_code: generateCode() })
                      }
                      className="text-[11px] text-bronze hover:underline"
                    >
                      Regenerate Random Code
                    </button>
                  </div>
                  <Input
                    id="certificate_code"
                    type="text"
                    required
                    value={form.certificate_code}
                    onChange={(e) =>
                      setForm({ ...form, certificate_code: e.target.value })
                    }
                    className="h-11 font-mono-data text-sm"
                  />
                </div>

                {[
                  ["holder_name", "Intern name", "text", true],
                  ["program", "Programme", "text", true],
                  ["role_title", "Role", "text", false],
                  ["start_date", "Start date", "date", false],
                  ["end_date", "End date", "date", false],
                  ["mentor", "Supervisor", "text", false],
                ].map(([key, label, type, required]) => (
                  <div key={key as string} className="space-y-2">
                    <Label
                      htmlFor={key as string}
                      className="text-[10px] uppercase tracking-[0.14em] text-soft"
                    >
                      {label as string}
                    </Label>
                    <Input
                      id={key as string}
                      type={type as string}
                      required={required as boolean}
                      value={form[key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [key as string]: e.target.value })
                      }
                      className="h-11"
                    />
                  </div>
                ))}

                <div className="md:col-span-3 space-y-2">
                  <Label
                    htmlFor="notes"
                    className="text-[10px] uppercase tracking-[0.14em] text-soft"
                  >
                    Notes (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    rows={3}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="cyber"
                    className="h-11 px-6 text-xs"
                    disabled={busy}
                  >
                    Issue certificate
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={issueBulk} className="space-y-4 max-w-4xl">
                <div className="space-y-2">
                  <Label
                    htmlFor="bulkCsv"
                    className="text-[10px] uppercase tracking-[0.14em] text-soft"
                  >
                    Paste CSV Content (Format: certificate_code, holder_name,
                    program, role_title, start_date, end_date, mentor, notes)
                  </Label>
                  <Textarea
                    id="bulkCsv"
                    value={bulkCsv}
                    onChange={(e) => setBulkCsv(e.target.value)}
                    placeholder={`certificate_code,holder_name,program,role_title,start_date,end_date,mentor,notes\nSC-2026-001,Aarav Sharma,Quantitative Trading,Quant Analyst,2025-10-01,2026-01-01,Rohan Mehta,Completed module\nSC-2026-002,Priya Patel,Backend Systems,Software Engineer,2025-11-01,2026-01-31,Siddharth Rao,Passed assessment`}
                    rows={8}
                    className="font-mono text-xs leading-relaxed"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="cyber"
                    className="h-11 px-6 text-xs"
                    disabled={busy}
                  >
                    Import Multiple Certificates
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      <section className="py-14">
        <div className="container">
          <p className="kicker mb-8">Registry — {rows.length} records</p>
          <div className="border-t border-border">
            {rows.length === 0 && (
              <p className="text-soft text-sm py-6">
                No certificates issued yet.
              </p>
            )}
            {rows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-border items-center"
              >
                <div className="md:col-span-3">
                  <code className="font-mono-data text-[12px] text-ink">
                    {row.certificate_code}
                  </code>
                  <p className="text-[11px] text-soft mt-1">{row.program}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-ink text-sm">{row.holder_name}</p>
                  <p className="text-[11px] text-soft">
                    {row.role_title ?? "—"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <span
                    className={`font-mono-data text-[10px] tracking-[0.12em] border border-border px-2 py-0.5 ${
                      row.status === "valid"
                        ? "text-bronze"
                        : "text-destructive"
                    }`}
                  >
                    {row.status.toUpperCase()}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <QrCell code={row.certificate_code} />
                </div>
                <div className="md:col-span-1">
                  {isAdmin && (
                    <button
                      onClick={() => revoke(row)}
                      className="text-[11px] text-soft hover:text-ink"
                    >
                      {row.status === "valid" ? "Revoke" : "Restore"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default AdminCertificates;
