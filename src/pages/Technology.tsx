import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import { Cpu, Network, Shield, Database, Gauge, Globe } from "lucide-react";

const infraStats = [
  { value: "14ms", label: "End-to-End Latency", detail: "Signal detection → order execution" },
  { value: "400TB", label: "Daily Ingestion", detail: "Across 147 data sources" },
  { value: "99.97%", label: "System Uptime", detail: "Rolling 365-day average" },
  { value: "12", label: "Global PoPs", detail: "Co-located at major exchanges" },
];

const archLayers = [
  {
    icon: Globe,
    name: "Data Ingestion Layer",
    desc: "Multi-protocol connectors ingesting satellite feeds (SAR, thermal, optical), social media firehoses, news wires, regulatory filings, and order book data across 40+ exchanges.",
    tech: ["Apache Kafka", "Custom CDC", "WebSocket Mux", "SAR Decoder"],
  },
  {
    icon: Cpu,
    name: "Signal Processing Engine",
    desc: "GPU-accelerated NLP pipeline with proprietary transformer models fine-tuned on financial corpus. Real-time entity extraction, sentiment scoring, and event classification.",
    tech: ["CUDA Kernels", "Custom LLMs", "ONNX Runtime", "TensorRT"],
  },
  {
    icon: Network,
    name: "Correlation & Fusion",
    desc: "Multi-modal signal fusion combining geospatial, sentiment, and market microstructure data. Bayesian regime detection with spectral analysis of cross-asset correlations.",
    tech: ["Kalman Filters", "HMM", "Graph Neural Nets", "Spectral Analysis"],
  },
  {
    icon: Gauge,
    name: "Execution & Risk",
    desc: "Smart order routing with optimal execution algorithms. Real-time Monte Carlo risk engine simulating 10,000 scenarios per second for dynamic position sizing.",
    tech: ["FIX 4.4", "Custom SOR", "FPGA Bridge", "Monte Carlo"],
  },
  {
    icon: Database,
    name: "Data Infrastructure",
    desc: "Time-series optimized storage with columnar compression. Sub-millisecond query latency across petabyte-scale historical datasets for backtesting and research.",
    tech: ["TimescaleDB", "Apache Arrow", "Parquet", "Custom Indexing"],
  },
  {
    icon: Shield,
    name: "Security & Compliance",
    desc: "SOC 2 Type II certified infrastructure with end-to-end encryption, hardware security modules for key management, and comprehensive audit trails.",
    tech: ["HSM", "mTLS", "Zero Trust", "RBAC"],
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-4">
              Technology & Infrastructure
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-signal mb-4 max-w-2xl">
              Built for Institutional-Grade Performance
            </h1>
            <p className="text-dim text-base md:text-lg max-w-xl leading-relaxed">
              From data ingestion to order execution — every layer engineered for 
              sub-millisecond reliability at planetary scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infra Stats */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {infraStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-glass rounded-lg p-5 text-center"
              >
                <p className="font-mono-data text-cyber text-3xl mb-1">{stat.value}</p>
                <p className="text-signal text-sm font-medium">{stat.label}</p>
                <p className="text-dim text-xs mt-1">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-8">
            System Architecture
          </p>

          <div className="space-y-4">
            {archLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="surface-glass rounded-lg p-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:w-64 shrink-0">
                    <div className="w-8 h-8 rounded border border-cyber/30 flex items-center justify-center">
                      <layer.icon className="w-4 h-4 text-cyber" />
                    </div>
                    <div>
                      <span className="font-mono-data text-[10px] text-dim">LAYER {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-signal text-sm font-medium">{layer.name}</h3>
                    </div>
                  </div>
                  <p className="text-dim text-sm leading-relaxed flex-1">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2 md:w-48 shrink-0">
                    {layer.tech.map((t) => (
                      <span key={t} className="font-mono-data text-[10px] text-cyber/60 border border-border rounded px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pipeline visual */}
          <div className="mt-8 flex items-center justify-center gap-0">
            {archLayers.map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full border border-cyber/40 flex items-center justify-center">
                  <span className="font-mono-data text-[10px] text-cyber">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {i < archLayers.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-gradient-to-r from-cyber/40 to-cyber/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infra Map */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Global Infrastructure
          </p>
          <div className="surface-glass rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: "LDN-GRW", location: "London — Equinix LD4", status: "PRIMARY", latency: "0.8ms" },
                { region: "NYC-SEC", location: "New Jersey — NY5", status: "PRIMARY", latency: "1.2ms" },
                { region: "TKY-OTE", location: "Tokyo — Equinix TY3", status: "ACTIVE", latency: "3.4ms" },
                { region: "SGP-TAI", location: "Singapore — Equinix SG1", status: "ACTIVE", latency: "4.1ms" },
                { region: "FRA-DEX", location: "Frankfurt — Equinix FR2", status: "ACTIVE", latency: "1.8ms" },
                { region: "HKG-CTR", location: "Hong Kong — HKEX", status: "ACTIVE", latency: "5.2ms" },
                { region: "CHI-CME", location: "Chicago — CME Aurora", status: "PRIMARY", latency: "0.4ms" },
                { region: "SYD-ASX", location: "Sydney — Equinix SY1", status: "STANDBY", latency: "8.1ms" },
              ].map((node) => (
                <div key={node.region} className="border border-border rounded p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${node.status === "PRIMARY" ? "bg-cyber" : node.status === "ACTIVE" ? "bg-cyber/50" : "bg-muted-foreground/50"}`} />
                    <span className="font-mono-data text-xs text-signal">{node.region}</span>
                  </div>
                  <p className="text-dim text-[10px]">{node.location}</p>
                  <div className="flex justify-between mt-2">
                    <span className="font-mono-data text-[9px] text-dim">{node.status}</span>
                    <span className="font-mono-data text-[9px] text-cyber">{node.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Technology;
