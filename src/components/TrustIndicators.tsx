import { motion } from "framer-motion";

const metrics = [
  { value: "$2.4B+", label: "Assets under signal coverage" },
  { value: "147", label: "Alternative data sources" },
  { value: "40+", label: "Connected exchanges" },
  { value: "12", label: "Global points of presence" },
];

const TrustIndicators = () => {
  return (
    <section className="py-14 border-t border-b border-border bg-secondary/40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="kicker mb-3">Institutional grade</p>
            <p className="text-soft text-sm leading-relaxed max-w-sm">
              Trusted by quantitative hedge funds, proprietary trading firms and sovereign
              wealth research desks.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="font-display text-3xl text-ink font-mono-data">{m.value}</p>
                <p className="text-soft text-xs mt-2 leading-snug">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
