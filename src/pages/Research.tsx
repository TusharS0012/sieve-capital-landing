import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const publications = [
  { date: "March 2026", title: "Satellite-Derived Commodity Flow Estimation via Multi-Modal Fusion", authors: "Chen, K., Okafor, A., Müller, S.", journal: "Journal of Quantitative Finance", tag: "Geospatial" },
  { date: "January 2026", title: "Low-Latency Sentiment Arbitrage in Fragmented FX Markets", authors: "Park, J., Singh, R., Fernandez, M.", journal: "Quantitative Finance Letters", tag: "Language" },
  { date: "November 2025", title: "Regime Detection via Spectral Analysis of Cross-Asset Correlation Matrices", authors: "Müller, S., Chen, K.", journal: "Risk Magazine", tag: "Risk" },
  { date: "September 2025", title: "Noise-Robust Signal Extraction from Social Media Event Streams", authors: "Okafor, A., Park, J., Ivanova, E.", journal: "Machine Learning in Finance", tag: "Language" },
  { date: "June 2025", title: "Optimal Execution Under Regime-Switching Volatility Models", authors: "Singh, R., Fernandez, M.", journal: "Mathematical Finance", tag: "Execution" },
  { date: "March 2025", title: "Port Congestion Prediction via Synthetic Aperture Radar Time Series", authors: "Chen, K., Okafor, A.", journal: "IEEE Transactions on Geoscience", tag: "Geospatial" },
];

const reports = [
  { title: "Q1 2026 Alpha Report", subtitle: "Signal performance across asset classes", date: "March 2026" },
  { title: "Volatility Regime Outlook", subtitle: "Cross-market correlation breakdown", date: "February 2026" },
  { title: "Alternative Data Census", subtitle: "Evaluation and ranking of 147 sources", date: "January 2026" },
  { title: "Annual Research Review", subtitle: "2025 methodology retrospective", date: "December 2025" },
];

const principles = [
  { title: "Quantitative rigour", desc: "Every signal hypothesis undergoes walk-forward validation across more than fifteen years of historical data with strict out-of-sample testing." },
  { title: "Reproducibility", desc: "All research pipelines are containerised and version-controlled. Results reproduce to the last decimal across environments." },
  { title: "Open methodology", desc: "We publish our core methodologies. Our edge comes from execution speed and data breadth, not obscurity." },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Research & publications"
        title="Advancing the science of signal extraction"
        intro="Our research team publishes peer-reviewed work at the intersection of machine learning, quantitative finance and geospatial intelligence."
      />

      <section className="py-16 md:py-20">
        <div className="container">
          <p className="kicker mb-8">Methodology</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {principles.map((item) => (
              <div key={item.title} className="bg-paper-raised p-7">
                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Published papers</p>
          <div className="border-t border-border">
            {publications.map((pub, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 border-b border-border group"
              >
                <span className="md:col-span-2 text-xs text-soft font-mono-data">{pub.date}</span>
                <div className="md:col-span-8">
                  <h3 className="text-ink text-[15px] font-medium leading-snug group-hover:text-bronze transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-soft text-xs mt-1.5">
                    {pub.authors} — <span className="italic font-display">{pub.journal}</span>
                  </p>
                </div>
                <span className="md:col-span-2 text-[10px] uppercase tracking-[0.14em] text-soft md:text-right">
                  {pub.tag}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="kicker mb-8">Alpha reports</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {reports.map((report, i) => (
              <div key={i} className="bg-paper-raised p-6 flex items-start justify-between gap-4 group">
                <div>
                  <h3 className="text-ink text-[15px] font-medium group-hover:text-bronze transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-soft text-xs mt-1.5">{report.subtitle}</p>
                </div>
                <span className="text-[11px] text-soft whitespace-nowrap">{report.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Research;
