import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const infraStats = [
  { value: "14ms", label: "End-to-end latency", detail: "Signal detection to order execution" },
  { value: "400TB", label: "Daily ingestion", detail: "Across 147 data sources" },
  { value: "99.97%", label: "System uptime", detail: "Rolling 365-day average" },
  { value: "12", label: "Global points of presence", detail: "Co-located at major exchanges" },
];

const archLayers = [
  { name: "Data ingestion layer", desc: "Multi-protocol connectors ingesting satellite feeds (radar, thermal, optical), social media firehoses, news wires, regulatory filings and order book data across more than forty exchanges.", tech: ["Apache Kafka", "Custom CDC", "WebSocket multiplexing", "SAR decoder"] },
  { name: "Signal processing engine", desc: "GPU-accelerated language pipeline with proprietary transformer models fine-tuned on a financial corpus. Real-time entity extraction, sentiment scoring and event classification.", tech: ["CUDA kernels", "Custom models", "ONNX Runtime", "TensorRT"] },
  { name: "Correlation & fusion", desc: "Multi-modal fusion combining geospatial, sentiment and market microstructure data. Bayesian regime detection with spectral analysis of cross-asset correlations.", tech: ["Kalman filters", "Hidden Markov models", "Graph neural networks", "Spectral analysis"] },
  { name: "Execution & risk", desc: "Smart order routing with optimal execution algorithms. Real-time Monte Carlo risk engine simulating 10,000 scenarios per second for dynamic position sizing.", tech: ["FIX 4.4", "Custom SOR", "FPGA bridge", "Monte Carlo"] },
  { name: "Data infrastructure", desc: "Time-series optimised storage with columnar compression. Sub-millisecond query latency across petabyte-scale historical datasets for backtesting and research.", tech: ["TimescaleDB", "Apache Arrow", "Parquet", "Custom indexing"] },
  { name: "Security & compliance", desc: "SOC 2 Type II certified infrastructure with end-to-end encryption, hardware security modules for key management and comprehensive audit trails.", tech: ["HSM", "mTLS", "Zero trust", "Role-based access"] },
];

const nodes = [
  { region: "LDN-GRW", location: "London — Equinix LD4", status: "Primary", latency: "0.8ms" },
  { region: "NYC-SEC", location: "New Jersey — NY5", status: "Primary", latency: "1.2ms" },
  { region: "TKY-OTE", location: "Tokyo — Equinix TY3", status: "Active", latency: "3.4ms" },
  { region: "SGP-TAI", location: "Singapore — Equinix SG1", status: "Active", latency: "4.1ms" },
  { region: "FRA-DEX", location: "Frankfurt — Equinix FR2", status: "Active", latency: "1.8ms" },
  { region: "HKG-CTR", location: "Hong Kong — HKEX", status: "Active", latency: "5.2ms" },
  { region: "CHI-CME", location: "Chicago — CME Aurora", status: "Primary", latency: "0.4ms" },
  { region: "SYD-ASX", location: "Sydney — Equinix SY1", status: "Standby", latency: "8.1ms" },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Technology & infrastructure"
        title="Built for institutional-grade performance"
        intro="From data ingestion to order execution, every layer is engineered for sub-millisecond reliability at global scale."
      />

      <section className="py-14 bg-secondary/40 border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {infraStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-ink font-mono-data mb-2">{stat.value}</p>
              <p className="text-ink text-sm font-medium">{stat.label}</p>
              <p className="text-soft text-xs mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <p className="kicker mb-8">System architecture</p>
          <div className="border-t border-border">
            {archLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border"
              >
                <div className="md:col-span-3">
                  <span className="font-mono-data text-[11px] text-bronze">
                    Layer {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink mt-1">{layer.name}</h3>
                </div>
                <p className="md:col-span-6 text-soft text-sm leading-relaxed">{layer.desc}</p>
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {layer.tech.map((t) => (
                    <span key={t} className="text-[11px] text-soft border border-border px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Global infrastructure</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {nodes.map((node) => (
              <div key={node.region} className="bg-paper-raised p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${node.status === "Primary" ? "bg-bronze" : node.status === "Active" ? "bg-primary/60" : "bg-muted-foreground/40"}`} />
                  <span className="font-mono-data text-xs text-ink">{node.region}</span>
                </div>
                <p className="text-soft text-[11px] leading-snug">{node.location}</p>
                <div className="flex justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-soft">{node.status}</span>
                  <span className="font-mono-data text-[10px] text-ink">{node.latency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Technology;
