import { motion } from "framer-motion";
import { Satellite, Brain, Zap, Shield, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Satellite,
    step: "01",
    title: "Ingest",
    desc: "400TB of daily alternative data — satellite imagery, social feeds, news wires, dark pool prints, and macro indicators.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Process",
    desc: "Proprietary LLMs extract entities, classify events, and score sentiment across 147 sources in 22 languages.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Signal",
    desc: "Multi-modal fusion correlates geospatial, NLP, and market microstructure data to generate high-confidence signals.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Execute",
    desc: "Smart order routing with real-time Monte Carlo risk management. 14ms from signal detection to order execution.",
  },
];

const PipelineSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-signal max-w-lg">
            From Raw Noise to Institutional Alpha in 14 Milliseconds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              <div className="surface-glass rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded border border-cyber/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-cyber" />
                  </div>
                  <span className="font-mono-data text-xs text-dim">{step.step}</span>
                </div>
                <h3 className="font-display text-lg text-signal mb-2">{step.title}</h3>
                <p className="text-dim text-sm leading-relaxed flex-1">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-cyber/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Latency bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 surface-glass rounded-lg p-4 flex items-center justify-between"
        >
          <span className="font-mono-data text-xs text-dim">RAW_DATA_INGESTION</span>
          <div className="flex-1 mx-6 h-px relative">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyber to-cyber/20"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <span className="font-mono-data text-xs text-cyber">ORDER_EXECUTED — 14ms</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PipelineSection;
