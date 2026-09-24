import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Ingest",
    desc: "The intended inputs include NSE and BSE market data, F&O open interest, bulk and block deals, FII/DII flows, exchange filings, economic proxies and global macro news.",
  },
  {
    step: "02",
    title: "Process",
    desc: "Planned language models will extract entities, classify events and assess sentiment across English, Hindi, Gujarati, Tamil and Marathi business media.",
  },
  {
    step: "03",
    title: "Signal",
    desc: "The research design will combine filings, flows, options positioning and global cues into testable Nifty, Bank Nifty and single-stock hypotheses.",
  },
  {
    step: "04",
    title: "Execute",
    desc: "A future execution layer may connect approved routing and pre-trade risk controls, subject to testing, permissions and applicable exchange rules.",
  },
];

const PipelineSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-t border-b border-border">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="kicker mb-4">The process</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            The proposed path from Indian market data to decision-ready intelligence
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
