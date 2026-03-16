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
            {/* Satellite grid visualization */}
            <div className="mt-4 relative h-32 overflow-hidden rounded-md border border-border bg-[hsl(220,20%,4%)]">
              {/* Latitude/longitude grid lines */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 border-t border-[hsl(var(--cyber-green)/0.06)]"
                  style={{ top: `${(i + 1) * 12.5}%` }}
                />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 border-l border-[hsl(var(--cyber-green)/0.06)]"
                  style={{ left: `${(i + 1) * 10}%` }}
                />
              ))}

              {/* Coastline / landmass shapes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128" preserveAspectRatio="none">
                <path d="M80,30 Q95,25 110,35 L130,40 Q140,38 145,42 L160,50 Q155,58 140,55 L120,52 Q100,48 85,42 Z" fill="hsl(135 100% 50% / 0.04)" stroke="hsl(135 100% 50% / 0.12)" strokeWidth="0.5"/>
                <path d="M200,20 Q220,15 250,22 L270,30 Q280,38 275,48 L260,55 Q240,60 220,52 L205,40 Q195,30 200,20 Z" fill="hsl(135 100% 50% / 0.04)" stroke="hsl(135 100% 50% / 0.12)" strokeWidth="0.5"/>
                <path d="M300,60 Q320,55 340,62 L350,70 Q345,80 330,78 L310,75 Q295,70 300,60 Z" fill="hsl(135 100% 50% / 0.04)" stroke="hsl(135 100% 50% / 0.12)" strokeWidth="0.5"/>
                <path d="M50,70 Q70,65 90,72 L100,80 Q95,90 80,88 L60,82 Q45,78 50,70 Z" fill="hsl(135 100% 50% / 0.04)" stroke="hsl(135 100% 50% / 0.12)" strokeWidth="0.5"/>
              </svg>

              {/* SAR scan sweep line */}
              <div
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[hsl(var(--cyber-green)/0.3)] to-transparent"
                style={{ animation: "sarSweep 4s linear infinite" }}
              />

              {/* Port / target markers with labels */}
              {[
                { left: "18%", top: "28%", label: "SUEZ", status: "CONGESTED", delay: 0 },
                { left: "52%", top: "45%", label: "SINGAPORE", status: "NORMAL", delay: 0.8 },
                { left: "72%", top: "22%", label: "SHANGHAI", status: "ELEVATED", delay: 1.4 },
                { left: "35%", top: "65%", label: "MOMBASA", status: "NORMAL", delay: 2.0 },
                { left: "82%", top: "55%", label: "YOKOHAMA", status: "CONGESTED", delay: 0.5 },
              ].map((marker, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{ left: marker.left, top: marker.top }}
                >
                  {/* Radar ring */}
                  <div
                    className="absolute w-6 h-6 rounded-full border border-[hsl(var(--cyber-green)/0.15)]"
                    style={{
                      animation: `radarPing 3s ease-out ${marker.delay}s infinite`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Core dot */}
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: marker.status === "CONGESTED"
                        ? "hsl(0 80% 55%)"
                        : marker.status === "ELEVATED"
                        ? "hsl(45 100% 55%)"
                        : "hsl(var(--cyber-green))",
                      boxShadow: marker.status === "CONGESTED"
                        ? "0 0 6px hsl(0 80% 55% / 0.6)"
                        : marker.status === "ELEVATED"
                        ? "0 0 6px hsl(45 100% 55% / 0.5)"
                        : "0 0 6px hsl(var(--cyber-green) / 0.5)",
                      animation: `pulse-green 2.5s ease-in-out ${marker.delay}s infinite`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Label */}
                  <div
                    className="absolute top-2 left-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="font-mono-data text-[7px] text-cyber block leading-none">{marker.label}</span>
                    <span
                      className="font-mono-data text-[6px] block leading-none mt-px"
                      style={{
                        color: marker.status === "CONGESTED"
                          ? "hsl(0 80% 55%)"
                          : marker.status === "ELEVATED"
                          ? "hsl(45 100% 55%)"
                          : "hsl(var(--dim-white) / 0.4)",
                      }}
                    >
                      {marker.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Corner coordinates */}
              <span className="absolute top-1 left-1.5 font-mono-data text-[6px] text-dim">40°N</span>
              <span className="absolute bottom-1 left-1.5 font-mono-data text-[6px] text-dim">20°S</span>
              <span className="absolute top-1 right-1.5 font-mono-data text-[6px] text-dim">140°E</span>
              <span className="absolute bottom-1 right-1.5 font-mono-data text-[6px] text-dim">30°E</span>

              <p className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono-data text-[7px] text-dim opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                SAR PASS 0847Z • RES 3m
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
