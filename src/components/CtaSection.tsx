import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary-foreground/60 mb-5">
              Request access
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Ready to collapse the latency?
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed max-w-lg">
              Sieve is available to qualified institutional investors, proprietary trading
              firms and research desks. Request access to our API terminal and signal
              intelligence platform.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-primary-foreground/15 w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="institutional@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-none bg-transparent border-primary-foreground/25 text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-7 rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0"
                >
                  Request access
                </Button>
              </form>
            ) : (
              <div className="border border-primary-foreground/25 p-6">
                <p className="text-sm font-medium mb-1">Request received</p>
                <p className="text-primary-foreground/70 text-sm">
                  Our institutional team will review your request within 24 hours.
                </p>
              </div>
            )}
            <p className="text-[11px] text-primary-foreground/50 mt-5 tracking-wide">
              SOC 2 Type II certified · NDA required · Minimum AUM $50M
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
