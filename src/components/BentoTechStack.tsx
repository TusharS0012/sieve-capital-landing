import { motion } from "framer-motion";

const pillars = [
  {
    label: "Primary & filings intelligence",
    title: "Exchange disclosure engine",
    desc: "Continuous parsing of NSE and BSE corporate announcements, SEBI circulars, DRHP and RHP filings, shareholding patterns, bulk and block deal sheets, plus mainboard and SME IPO subscription data.",
    facts: [
      { k: "Filings parsed daily", v: "42,000" },
      { k: "Announcement lag", v: "Sub-second" },
    ],
  },
  {
    label: "Language processing",
    title: "India-tuned financial models",
    desc: "Transformer models fine-tuned on an Indian financial corpus score earnings calls, management commentary and business media in English, Hindi, Gujarati, Tamil and Marathi, alongside global newswires.",
    facts: [
      { k: "Languages", v: "5 + English wires" },
      { k: "Sources", v: "112" },
    ],
  },
  {
    label: "Market microstructure",
    title: "NSE & BSE order book intelligence",
    desc: "Colocated infrastructure at NSE (BKC) and BSE reads tick-by-tick depth, F&O open interest build-up, option chain skew and India VIX surfaces across cash, index and stock derivatives.",
    facts: [
      { k: "Venues", v: "NSE, BSE, MCX, NCDEX" },
      { k: "Colocation racks", v: "3 PoPs" },
    ],
  },
  {
    label: "Risk engineering",
    title: "Continuous exposure control",
    desc: "A Monte Carlo risk engine simulates 10,000 scenarios per second, adjusting position sizing to India VIX regimes, expiry-day gamma, SEBI margin and position limits, and circuit-filter events.",
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
