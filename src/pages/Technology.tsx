import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const infraStats = [
  { value: "14ms", label: "End-to-end latency", detail: "Signal detection to order placement at NSE colo" },
  { value: "400TB", label: "Daily ingestion", detail: "Across 147 domestic and global sources" },
  { value: "99.97%", label: "System uptime", detail: "Rolling 365-day average across market hours" },
  { value: "6", label: "India points of presence", detail: "Co-located at NSE, BSE and GIFT City venues" },
];

const archLayers = [
  { name: "Data ingestion layer", desc: "Multi-protocol connectors ingesting NSE and BSE tick and order book data, satellite feeds over Indian assets, vernacular news wires, exchange filings, SEBI and RBI disclosures, and global macro prints.", tech: ["Apache Kafka", "NSE NNF feed", "BSE BOLT", "SAR decoder"] },
  { name: "Signal processing engine", desc: "GPU-accelerated language pipeline with transformer models fine-tuned on Indian filings, results transcripts and multilingual news. Real-time entity extraction, sentiment scoring and event classification.", tech: ["CUDA kernels", "IndicNLP models", "ONNX Runtime", "TensorRT"] },
  { name: "Correlation & fusion", desc: "Multi-modal fusion of geospatial, sentiment and microstructure data with Bayesian regime detection across Nifty sector indices, India VIX and FII-DII flows.", tech: ["Kalman filters", "Hidden Markov models", "Graph neural networks", "Spectral analysis"] },
  { name: "Execution & risk", desc: "Smart order routing across NSE and BSE with expiry-aware F&O execution. Real-time Monte Carlo risk engine sizing positions under SEBI peak-margin and position-limit rules.", tech: ["FIX 4.4", "Custom SOR", "FPGA bridge", "Monte Carlo"] },
  { name: "Data infrastructure", desc: "Time-series optimised storage with columnar compression. Sub-millisecond query latency over petabyte-scale Indian market history for backtesting and research.", tech: ["TimescaleDB", "Apache Arrow", "Parquet", "Custom indexing"] },
  { name: "Security & compliance", desc: "SOC 2 Type II certified infrastructure with end-to-end encryption, hardware security modules, India-resident data storage and audit trails aligned to SEBI system audit expectations.", tech: ["HSM", "mTLS", "Zero trust", "Role-based access"] },
];

const nodes = [
  { region: "MUM-NSE", location: "Mumbai — NSE colo, BKC", status: "Primary", latency: "0.2ms" },
  { region: "MUM-BSE", location: "Mumbai — BSE colo, Dalal Street", status: "Primary", latency: "0.3ms" },
  { region: "MUM-DC1", location: "Navi Mumbai — Airoli DC", status: "Active", latency: "0.9ms" },
  { region: "GIFT-IFSC", location: "Gandhinagar — GIFT City IFSC", status: "Active", latency: "3.6ms" },
  { region: "BLR-ENG", location: "Bengaluru — research cluster", status: "Active", latency: "6.4ms" },
  { region: "DEL-NCR", location: "Noida — client gateway", status: "Standby", latency: "8.2ms" },
  { region: "SGP-GLB", location: "Singapore — global macro relay", status: "Active", latency: "38ms" },
  { region: "CHI-CME", location: "Chicago — CME reference feed", status: "Standby", latency: "212ms" },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Technology & infrastructure"
        title="Built for institutional-grade performance"
        intro="From data ingestion to order execution, every layer is engineered for sub-millisecond reliability across NSE and BSE sessions."
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
          <p className="kicker mb-8">Infrastructure footprint</p>
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
