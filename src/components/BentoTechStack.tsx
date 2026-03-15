import { motion } from "framer-motion";

const cellVariant = {
  hidden: { clipPath: "inset(50% 50% 50% 50%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)" },
};

const BentoTechStack = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-10">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-3">
            Architecture
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-signal">
            The Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Cell A: Geospatial — 2x2 */}
          <motion.div
            variants={cellVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 surface-glass rounded-lg p-6 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <p className="font-mono-data text-xs text-cyber uppercase tracking-widest mb-2">
                Geospatial Analysis
              </p>
              <h3 className="font-display text-xl text-signal mb-3">
                Satellite-Grade Intelligence
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Real-time processing of synthetic aperture radar (SAR), thermal, and optical satellite 
                imagery. Track port congestion, crude storage levels, and agricultural yields across 
                12,000+ global coordinates.
              </p>
            </div>
            {/* Map wireframe visualization */}
            <div className="mt-4 relative h-32 overflow-hidden rounded-md border border-border">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-px opacity-20">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="border border-border/50" />
                ))}
              </div>
              {/* Heat pulses */}
              {[
                { left: "20%", top: "30%" },
                { left: "55%", top: "50%" },
                { left: "75%", top: "25%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-cyber/40"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    animation: `pulse-green 2s ease-in-out ${i * 0.6}s infinite`,
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-cyber/80 scale-50" />
                </div>
              ))}
              <p className="absolute bottom-2 right-2 font-mono-data text-[9px] text-dim opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View Specs →
              </p>
            </div>
          </motion.div>

          {/* Cell B: Real-time API — 1x1 */}
          <motion.div
            variants={cellVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-2 surface-glass rounded-lg p-6 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <p className="font-mono-data text-xs text-cyber uppercase tracking-widest mb-2">
                Real-Time API
              </p>
              <p className="text-dim text-xs mb-3">WebSocket-first. Sub-millisecond delivery.</p>
            </div>
            <pre className="font-mono-data text-[10px] md:text-xs text-dim leading-relaxed">
              <code>
{`const stream = sieve.stream({
  signals: ["GEOSPATIAL", "NLP"],
  threshold: 0.85,
  format: "DELTA"
});

stream.on("signal", (s) => {
  execute(s.ticker, s.direction);
});`}
              </code>
            </pre>
            <p className="font-mono-data text-[9px] text-dim opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
              View Specs →
            </p>
          </motion.div>

          {/* Cell C: Sentiment Synthesis — 1x1 */}
          <motion.div
            variants={cellVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-2 surface-glass rounded-lg p-6 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <p className="font-mono-data text-xs text-cyber uppercase tracking-widest mb-2">
                Sentiment Synthesis
              </p>
              <p className="text-dim text-xs mb-3">Global Anxiety Index vs S&P 500 correlation.</p>
            </div>
            {/* Mini chart visualization */}
            <div className="flex-1 flex items-end gap-[2px] mt-2">
              {[40, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95, 80, 88, 72, 92, 85, 78, 88, 95].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-200"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i >= 16 ? "hsl(135 100% 50% / 0.6)" : "hsl(210 40% 98% / 0.1)",
                    }}
                  />
                )
              )}
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-mono-data text-[9px] text-dim">GAI: 72.4</span>
              <span className="font-mono-data text-[9px] text-cyber">SPX: +1.2%</span>
            </div>
            <p className="font-mono-data text-[9px] text-dim opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
              View Specs →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoTechStack;
