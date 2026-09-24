import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const infraStats = [
  { value: "Low latency", label: "Design objective", detail: "To be measured after testing" },
  { value: "Multi-source", label: "Planned ingestion", detail: "Domestic and global inputs" },
  { value: "Resilient", label: "Architecture goal", detail: "No production uptime history yet" },
  { value: "India-first", label: "Intended footprint", detail: "Subject to access and approvals" },
];

const archLayers = [
  { name: "Data ingestion layer", desc: "Planned connectors for authorised Indian market data, public exchange filings, SEBI and RBI disclosures, multilingual news and relevant global macro information.", tech: ["Streaming", "Exchange data", "News feeds", "Document parsing"] },
  { name: "Signal processing engine", desc: "A language pipeline is being designed for entity extraction, sentiment assessment and event classification across Indian financial documents and news.", tech: ["Indic NLP", "Transformers", "Entity extraction", "Classification"] },
  { name: "Correlation & fusion", desc: "Proposed research will combine alternative, sentiment and market-structure data with regime analysis across Nifty indices, India VIX and institutional flows.", tech: ["Regime models", "Graph models", "Time series", "Scenario analysis"] },
  { name: "Execution & risk", desc: "A future layer may support risk-aware workflows and approved connectivity. It is not connected to exchanges and does not currently place orders.", tech: ["Pre-trade checks", "Position limits", "Audit trails", "Risk controls"] },
  { name: "Data infrastructure", desc: "Time-series storage and research environments are being designed for historical analysis, reproducibility and controlled access.", tech: ["Time series", "Columnar storage", "Versioning", "Access control"] },
  { name: "Security & compliance", desc: "Security controls, India-resident storage options and audit processes are planned. No certification is currently claimed.", tech: ["Encryption", "Access control", "Audit logging", "Key management"] },
];

const nodes = [
  { region: "MUM", location: "Mumbai — proposed primary region", status: "Planned", latency: "TBD" },
  { region: "NSE", location: "Authorised connectivity under evaluation", status: "Proposed", latency: "TBD" },
  { region: "BSE", location: "Authorised connectivity under evaluation", status: "Proposed", latency: "TBD" },
  { region: "GIFT", location: "GIFT City — future option", status: "Proposed", latency: "TBD" },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Technology & infrastructure"
        title="Designing institutional-grade market infrastructure"
        intro="The architecture below describes what we intend to build. It is not yet a live production system and currently has no exchange execution connectivity."
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
          <p className="kicker mb-8">Proposed infrastructure footprint</p>
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
