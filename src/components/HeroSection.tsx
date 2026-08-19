import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "99.2%", label: "Noise reduction" },
  { value: "14ms", label: "Insight latency" },
  { value: "1,900+", label: "NSE & BSE symbols tracked" },
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end"
        >
          <div className="lg:col-span-7">
            <p className="kicker mb-6">India Signal Intelligence Engine</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink mb-6">
              Collapsing the latency of truth.
            </h1>
            <p className="text-soft text-base md:text-lg leading-relaxed max-w-xl">
              Sieve Capital sieves Indian market data — NSE and BSE cash, F&amp;O, IPO and
              SME filings, RBI and SEBI disclosures — alongside global macro news, to
              generate high-conviction signals for Indian institutional portfolios.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Button asChild variant="cyber" size="lg">
                <Link to="/technology">Explore the engine</Link>
              </Button>
              <Button asChild variant="cyber-outline" size="lg">
                <Link to="/api">View documentation</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between py-5 border-b border-border">
                  <span className="text-soft text-xs uppercase tracking-[0.14em]">{s.label}</span>
                  <span className="font-display text-3xl text-ink font-mono-data">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
