import { motion } from "framer-motion";

const pillars = [
  {
    label: "Geospatial analysis",
    title: "Satellite-grade intelligence",
    desc: "Real-time processing of synthetic aperture radar, thermal and optical satellite imagery. We track port congestion, crude storage levels and agricultural yields across more than 12,000 global coordinates.",
    facts: [
      { k: "Coordinates monitored", v: "12,000+" },
      { k: "Imagery refresh", v: "Hourly" },
    ],
  },
  {
    label: "Language processing",
    title: "Financial-domain models",
    desc: "Transformer models fine-tuned on a financial corpus perform entity extraction, sentiment scoring and event classification across 147 sources in 22 languages.",
    facts: [
      { k: "Languages", v: "22" },
      { k: "Documents daily", v: "2.4B" },
    ],
  },
  {
    label: "Market microstructure",
    title: "Order book intelligence",
    desc: "Co-located infrastructure at twelve points of presence reads order book dynamics, dark pool prints and volatility surfaces across more than forty venues.",
    facts: [
      { k: "Venues", v: "40+" },
      { k: "Points of presence", v: "12" },
    ],
  },
  {
    label: "Risk engineering",
    title: "Continuous exposure control",
    desc: "A Monte Carlo risk engine simulates 10,000 scenarios per second, adjusting position sizing to regime changes, tail events and correlation shifts.",
    facts: [
      { k: "Scenarios / second", v: "10,000" },
      { k: "System uptime", v: "99.97%" },
    ],
  },
];

const BentoTechStack = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="kicker mb-4">Architecture</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Four engineering pillars behind every signal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-paper-raised p-8 flex flex-col"
            >
              <p className="kicker mb-4">{p.label}</p>
              <h3 className="font-display text-2xl text-ink mb-3">{p.title}</h3>
              <p className="text-soft text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
                {p.facts.map((f) => (
                  <div key={f.k}>
                    <p className="font-display text-xl text-ink font-mono-data">{f.v}</p>
                    <p className="text-soft text-[11px] mt-0.5">{f.k}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoTechStack;
