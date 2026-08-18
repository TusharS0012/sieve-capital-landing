import { motion } from "framer-motion";

const features = [
  {
    label: "Signal sifting",
    title: "Language models that separate substance from noise",
    description:
      "Proprietary language models process 400TB of daily unstructured data — social sentiment, satellite imagery, shipping manifests and earnings transcripts — reducing 99.2% of noise to isolate actionable signals.",
    stats: [
      { value: "2.4B", label: "Documents per day" },
      { value: "147", label: "Data sources" },
    ],
  },
  {
    label: "Momentum execution",
    title: "From published news to executed trade in milliseconds",
    description:
      "Signal detection to order execution in 14 milliseconds. Our momentum engine captures high-amplitude market shifts by correlating multi-modal data streams with live order book dynamics across 40+ global exchanges.",
    stats: [
      { value: "14ms", label: "End-to-end latency" },
      { value: "40+", label: "Global exchanges" },
    ],
  },
  {
    label: "Adaptive risk",
    title: "Exposure recalibrated continuously, not quarterly",
    description:
      "Portfolio risk is recalculated using Monte Carlo simulation across 10,000 scenarios per second. Position sizing adapts in real time to regime changes, tail events and cross-asset correlation shifts.",
    stats: [
      { value: "10K", label: "Scenarios per second" },
      { value: "0.02%", label: "Max drawdown target" },
    ],
  },
];

const FeatureSections = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="kicker mb-4">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Three disciplines, one continuous process
          </h2>
        </div>

        <div className="border-t border-border">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border"
            >
              <div className="lg:col-span-3">
                <p className="kicker">{feature.label}</p>
                <p className="text-soft text-xs mt-2 font-mono-data">0{i + 1}</p>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-display text-2xl text-ink mb-4 leading-snug">{feature.title}</h3>
                <p className="text-soft text-sm md:text-base leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:flex-col gap-8">
                {feature.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl text-ink font-mono-data">{stat.value}</p>
                    <p className="text-soft text-xs mt-1">{stat.label}</p>
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

export default FeatureSections;
