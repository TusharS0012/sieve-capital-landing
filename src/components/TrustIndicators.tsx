import { motion } from "framer-motion";

const metrics = [
  { value: "$2.4B+", label: "Assets Under Signal Coverage" },
  { value: "147", label: "Alternative Data Sources" },
  { value: "40+", label: "Connected Exchanges" },
  { value: "12", label: "Global Points of Presence" },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 border-t border-b border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:max-w-xs">
            <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-2">
              Institutional Grade
            </p>
            <p className="text-dim text-sm leading-relaxed">
              Trusted by quantitative hedge funds, proprietary trading firms, and sovereign wealth research desks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <p className="font-mono-data text-cyber text-2xl md:text-3xl">{m.value}</p>
                <p className="text-dim text-[10px] uppercase tracking-wider mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
