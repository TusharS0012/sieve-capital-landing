import { motion } from "framer-motion";

const pillars = [
  {
    label: "Primary & filings intelligence",
    title: "Exchange disclosure engine",
    desc: "Planned parsing of NSE and BSE announcements, SEBI circulars, DRHP and RHP filings, shareholding patterns, bulk and block deal sheets, plus mainboard and SME IPO subscription data.",
    facts: [
      { k: "Coverage", v: "Filings + IPOs" },
      { k: "Status", v: "In development" },
    ],
  },
  {
    label: "Language processing",
    title: "India-tuned financial models",
    desc: "The proposed models will assess earnings calls, management commentary and business media in English, Hindi, Gujarati, Tamil and Marathi, alongside relevant global news.",
    facts: [
      { k: "Languages", v: "5 + English wires" },
      { k: "Status", v: "In development" },
    ],
  },
  {
    label: "Market microstructure",
    title: "NSE & BSE order book intelligence",
    desc: "The architecture is intended to study market depth, F&O open-interest build-up, option-chain skew and India VIX surfaces across cash, index and stock derivatives. No colocation is currently active.",
    facts: [
      { k: "Planned venues", v: "NSE + BSE" },
      { k: "Connectivity", v: "Not yet live" },
    ],
  },
  {
    label: "Risk engineering",
    title: "Continuous exposure control",
    desc: "The planned risk engine will use scenario analysis to test position sizing against India VIX regimes, expiry-day gamma, SEBI limits and circuit-filter events.",
    facts: [
      { k: "Approach", v: "Scenario based" },
      { k: "Status", v: "In development" },
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
            Four engineering pillars under development
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
