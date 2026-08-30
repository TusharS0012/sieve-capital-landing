import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { CheckCircle2, XCircle, Loader2, Search } from "lucide-react";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

type Certificate = {
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

const fmt = (d: string | null) =>
  d
    ? new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : "—";

const Verify = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(code ?? "");
  const [loading, setLoading] = useState(false);
  const [cert, setCert] = useState<Certificate | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!code) {
      setCert(null);
      setNotFound(false);
      return;
    }
    setQuery(code);
    let active = true;
    setLoading(true);
    supabase
      .from("certificates")
      .select(
        "certificate_code, holder_name, program, role_title, start_date, end_date, issued_on, mentor, status, notes",
      )
      .eq("certificate_code", code.trim().toUpperCase())
      .maybeSingle()
      .then(({ data }) => {
        if (!active) return;
        setCert(data as Certificate | null);
        setNotFound(!data);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [code]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toUpperCase();
    if (q) navigate(`/verify/${encodeURIComponent(q)}`);
  };

  const isValid = cert?.status === "valid";

  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Credential verification"
        title="Verify a Sieve Capital certificate"
        intro="Every internship and programme certificate issued by Sieve Capital carries a unique code and QR link. Scan the QR or enter the code below to confirm authenticity against our issuance registry."
      />

      <section className="py-14">
        <div className="container max-w-3xl">
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Certificate code — e.g. SC-INT-2026-0184"
              className="font-mono-data text-sm h-11"
              aria-label="Certificate code"
            />
            <Button type="submit" variant="cyber" className="h-11 px-6 text-xs">
              <Search className="w-4 h-4 mr-2" />
              Verify
            </Button>
          </form>

          <div className="mt-10">
            {loading && (
              <div className="flex items-center gap-3 text-soft text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                Checking issuance registry…
              </div>
            )}

            {!loading && notFound && (
              <div className="border border-border bg-paper-raised p-7">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-5 h-5 text-destructive" />
                  <h2 className="font-display text-2xl text-ink">No record found</h2>
                </div>
                <p className="text-soft text-sm leading-relaxed">
                  The code{" "}
                  <span className="font-mono-data text-ink">{code}</span> does not match any
                  certificate in our registry. Please re-check the code, or write to
                  compliance@sieve.capital if you believe this document was issued by us.
                </p>
              </div>
            )}

            {!loading && cert && (
              <div className="border border-border bg-paper-raised">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-border">
                  {isValid ? (
                    <CheckCircle2 className="w-5 h-5 text-bronze" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )}
                  <h2 className="font-display text-2xl text-ink">
                    {isValid ? "Certificate verified" : `Certificate ${cert.status}`}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                  <dl className="md:col-span-2 p-7 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                      ["Certificate code", cert.certificate_code],
                      ["Holder", cert.holder_name],
                      ["Programme", cert.program],
                      ["Role", cert.role_title ?? "—"],
                      ["Period", `${fmt(cert.start_date)} — ${fmt(cert.end_date)}`],
                      ["Issued on", fmt(cert.issued_on)],
                      ["Supervisor", cert.mentor ?? "—"],
                      ["Status", cert.status.toUpperCase()],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-soft mb-1.5">
                          {label}
                        </dt>
                        <dd className="text-ink text-sm font-mono-data">{value}</dd>
                      </div>
                    ))}
                    {cert.notes && (
                      <div className="sm:col-span-2">
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-soft mb-1.5">
                          Notes
                        </dt>
                        <dd className="text-soft text-sm leading-relaxed">{cert.notes}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="border-t md:border-t-0 md:border-l border-border p-7 flex flex-col items-center justify-center gap-4">
                    <div className="bg-white p-3">
                      <QRCodeCanvas
                        value={`${window.location.origin}/verify/${cert.certificate_code}`}
                        size={128}
                        level="M"
                      />
                    </div>
                    <p className="font-mono-data text-[10px] text-soft text-center leading-relaxed">
                      Verification link
                      <br />
                      /verify/{cert.certificate_code}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!loading && !cert && !notFound && (
              <p className="text-soft text-sm leading-relaxed">
                Enter a certificate code above, or scan the QR code printed on the certificate. Each
                QR resolves to a permanent verification link that anyone — an employer, university
                or counterparty — can open without an account.
              </p>
            )}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Verify;
