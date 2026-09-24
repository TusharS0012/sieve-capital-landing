import { motion } from "framer-motion";

const features = [
  {
    label: "Signal sifting",
    title: "Language models that separate substance from noise",
    description:
      "The planned language layer will analyse NSE and BSE announcements, SEBI and RBI circulars, DRHP filings, earnings calls and regional-language business media to help separate material events from market noise.",
    stats: [
      { value: "Multi-source", label: "Planned document coverage" },
      { value: "5+", label: "Intended languages" },
    ],
  },
  {
    label: "Momentum execution",
    title: "From published news to a decision-ready signal",
    description:
      "The momentum engine is being designed to correlate multi-modal information with NSE and BSE market dynamics across cash equity, index and stock F&O, and currency derivatives. Execution connectivity is not yet active.",
    stats: [
      { value: "Low latency", label: "Engineering objective" },
      { value: "Multi-venue", label: "Intended architecture" },
    ],
  },
  {
    label: "Adaptive risk",
    title: "Exposure recalibrated continuously, not quarterly",
    description:
      "The proposed risk layer will test position sizing against India VIX regimes, expiry-day gamma, SEBI margin and position limits, and FII/DII flow reversals before any future deployment.",
    stats: [
      { value: "Scenario-led", label: "Planned risk testing" },
      { value: "Pre-trade", label: "Intended controls" },
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
