import { motion } from "framer-motion";
import { Activity, Zap, Satellite } from "lucide-react";

const features = [
  {
    icon: Satellite,
    label: "Signal Sifting",
    title: "LLM-Powered Noise Filtration",
    description:
      "Our proprietary language models process 400TB of daily unstructured data — social media sentiment, satellite imagery, shipping manifests, and earnings transcripts — reducing 99.2% of noise to isolate actionable alpha signals.",
    stats: [
      { value: "2.4B", label: "Documents / Day" },
      { value: "147", label: "Data Sources" },
    ],
  },
  {
    icon: Zap,
    label: "Momentum Execution",
    title: "News-to-Trade Pipeline",
    description:
      "From signal detection to order execution in 14ms. Our momentum engine captures high-amplitude market shifts by correlating multi-modal data streams with real-time order book dynamics across 40+ global exchanges.",
    stats: [
      { value: "14ms", label: "End-to-End Latency" },
      { value: "40+", label: "Global Exchanges" },
    ],
  },
  {
    icon: Activity,
    label: "Adaptive Risk",
    title: "Dynamic Exposure Management",
    description:
      "Continuous portfolio risk recalibration using Monte Carlo simulations across 10,000 scenarios per second. Position sizing adapts in real-time to regime changes, tail events, and cross-asset correlation shifts.",
    stats: [
      { value: "10K", label: "Scenarios / Second" },
      { value: "0.02%", label: "Max Drawdown Target" },
    ],
  },
];

const sectionVariants = {
  hidden: { clipPath: "inset(50% 50% 50% 50%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)" },
};

const FeatureSections = () => {
  return (
    <section className="py-24">
      <div className="container space-y-20">
        {features.map((feature, i) => (
          <motion.div
            key={feature.label}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-2 mb-4">
                <feature.icon className="w-4 h-4 text-cyber" />
                <span className="font-mono-data text-xs text-cyber uppercase tracking-widest">
                  {feature.label}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-signal mb-4">
                {feature.title}
              </h3>
              <p className="text-dim text-base leading-relaxed max-w-xl">
                {feature.description}
              </p>
            </div>

            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="surface-glass rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6">
                  {feature.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-mono-data text-cyber text-3xl">{stat.value}</p>
                      <p className="text-dim text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSections;
