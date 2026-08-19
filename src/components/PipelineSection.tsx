import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Ingest",
    desc: "NSE and BSE tick data, F&O open interest, bulk and block deals, FII/DII flows, exchange filings, GST and port throughput proxies, plus global macro wires.",
  },
  {
    step: "02",
    title: "Process",
    desc: "Language models extract entities, classify events and score sentiment across 112 sources in English, Hindi, Gujarati, Tamil and Marathi business media.",
  },
  {
    step: "03",
    title: "Signal",
    desc: "Fusion correlates filings, flows, options positioning and global cues into high-confidence Nifty, Bank Nifty and single-stock signals.",
  },
  {
    step: "04",
    title: "Execute",
    desc: "Exchange-approved algo routing to NSE and BSE with real-time risk checks. 14 milliseconds from detection to order.",
  },
];

const PipelineSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-t border-b border-border">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="kicker mb-4">The process</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            From Indian market data to institutional alpha in fourteen milliseconds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-paper-raised p-7"
            >
              <p className="font-mono-data text-xs text-bronze mb-6">{step.step}</p>
              <h3 className="font-display text-xl text-ink mb-3">{step.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
