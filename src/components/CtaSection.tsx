import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-4">
            Request Access
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-signal mb-4">
            Ready to Collapse the Latency?
          </h2>
          <p className="text-dim text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Sieve is currently available to qualified institutional investors, 
            proprietary trading firms, and research desks. Request access to our 
            API terminal and signal intelligence platform.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="institutional@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-border font-mono-data text-sm h-11 placeholder:text-muted-foreground"
                required
              />
              <Button type="submit" variant="cyber" className="h-11 px-6 shrink-0">
                Request Access
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="surface-glass rounded-lg p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
                <span className="font-mono-data text-xs text-cyber">ACCESS_REQUEST_RECEIVED</span>
              </div>
              <p className="text-dim text-sm">
                Our institutional team will review your request within 24 hours.
              </p>
            </motion.div>
          )}

          <p className="font-mono-data text-[10px] text-dim mt-6">
            SOC 2 TYPE II CERTIFIED · NDA REQUIRED · MINIMUM AUM $50M
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
