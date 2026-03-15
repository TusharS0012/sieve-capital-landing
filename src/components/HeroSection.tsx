import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DataSieveCanvas from "./DataSieveCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas background */}
      <div className="absolute inset-0">
        <DataSieveCanvas />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 py-24">
        {/* Left: Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
              Signal Intelligence Engine
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-signal leading-[1.05] mb-6">
              Collapsing the Latency of Truth.
            </h1>
            <p className="text-dim text-base md:text-lg max-w-lg leading-relaxed mb-8">
              Sivix is a signal intelligence engine that sieves global news, satellite feeds, 
              and alternative data to generate high-alpha trading signals in real-time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cyber" size="lg">
                Explore the Engine
              </Button>
              <Button variant="cyber-outline" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { value: "99.2%", label: "Noise Reduction" },
              { value: "14ms", label: "Insight Latency" },
              { value: "400TB", label: "Daily Data Ingested" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono-data text-cyber text-2xl md:text-3xl">{stat.value}</p>
                <p className="text-dim text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Canvas fills the background, so this is spacer */}
        <div className="hidden lg:block lg:col-span-6" />
      </div>
    </section>
  );
};

export default HeroSection;
