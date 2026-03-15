import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import { FileText, BarChart3, TrendingUp, BookOpen } from "lucide-react";

const publications = [
  {
    date: "2026.03",
    title: "Satellite-Derived Commodity Flow Estimation via Multi-Modal Fusion",
    authors: "Chen, K., Okafor, A., Müller, S.",
    journal: "Journal of Quantitative Finance",
    tag: "Geospatial",
  },
  {
    date: "2026.01",
    title: "Low-Latency Sentiment Arbitrage in Fragmented FX Markets",
    authors: "Park, J., Singh, R., Fernandez, M.",
    journal: "Quantitative Finance Letters",
    tag: "NLP",
  },
  {
    date: "2025.11",
    title: "Regime Detection via Spectral Analysis of Cross-Asset Correlation Matrices",
    authors: "Müller, S., Chen, K.",
    journal: "Risk Magazine",
    tag: "Risk",
  },
  {
    date: "2025.09",
    title: "Noise-Robust Signal Extraction from Social Media Event Streams",
    authors: "Okafor, A., Park, J., Ivanova, E.",
    journal: "Machine Learning in Finance",
    tag: "NLP",
  },
  {
    date: "2025.06",
    title: "Optimal Execution Under Regime-Switching Volatility Models",
    authors: "Singh, R., Fernandez, M.",
    journal: "Mathematical Finance",
    tag: "Execution",
  },
  {
    date: "2025.03",
    title: "Port Congestion Prediction via Synthetic Aperture Radar Time Series",
    authors: "Chen, K., Okafor, A.",
    journal: "IEEE Transactions on Geoscience",
    tag: "Geospatial",
  },
];

const reports = [
  { title: "Q1 2026 Alpha Report", subtitle: "Signal performance across asset classes", date: "Mar 2026" },
  { title: "Volatility Regime Outlook", subtitle: "Cross-market correlation breakdown", date: "Feb 2026" },
  { title: "Alternative Data Census", subtitle: "147 source evaluation & ranking", date: "Jan 2026" },
  { title: "Annual Research Review", subtitle: "2025 methodology retrospective", date: "Dec 2025" },
];

const Research = () => {
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
              Research & Publications
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-signal mb-4 max-w-2xl">
              Advancing the Science of Signal Extraction
            </h1>
            <p className="text-dim text-base md:text-lg max-w-xl leading-relaxed">
              Our research team publishes peer-reviewed work at the intersection of machine learning, 
              quantitative finance, and geospatial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: BarChart3, title: "Quantitative Rigor", desc: "Every signal hypothesis undergoes walk-forward validation across 15+ years of historical data with strict out-of-sample testing." },
              { icon: TrendingUp, title: "Reproducibility", desc: "All research pipelines are containerized and version-controlled. Results are reproducible to the last decimal across environments." },
              { icon: BookOpen, title: "Open Methodology", desc: "We publish our core methodologies. Proprietary edge comes from execution speed and data breadth — not obscurity." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="surface-glass rounded-lg p-6"
              >
                <item.icon className="w-5 h-5 text-cyber mb-4" />
                <h3 className="font-display text-lg text-signal mb-2">{item.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Published Papers
          </p>
          <div className="space-y-0">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group border-b border-border py-5 flex flex-col md:flex-row md:items-center gap-3 cursor-pointer hover:bg-secondary/30 transition-colors px-4 -mx-4 rounded"
              >
                <span className="font-mono-data text-xs text-dim w-20 shrink-0">{pub.date}</span>
                <div className="flex-1">
                  <h4 className="text-signal text-sm font-medium group-hover:text-cyber transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-dim text-xs mt-1">{pub.authors} — <span className="italic">{pub.journal}</span></p>
                </div>
                <span className="font-mono-data text-[10px] text-cyber/60 border border-cyber/20 rounded px-2 py-0.5 uppercase tracking-wider shrink-0">
                  {pub.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alpha Reports */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Alpha Reports
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="surface-glass rounded-lg p-5 flex items-start gap-4 group cursor-pointer hover:border-cyber/20 transition-colors"
              >
                <FileText className="w-5 h-5 text-cyber shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-signal text-sm font-medium group-hover:text-cyber transition-colors">
                    {report.title}
                  </h4>
                  <p className="text-dim text-xs mt-1">{report.subtitle}</p>
                </div>
                <span className="font-mono-data text-[10px] text-dim shrink-0">{report.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Research;
