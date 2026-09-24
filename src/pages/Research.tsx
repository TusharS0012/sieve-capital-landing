import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const publications = [
  { date: "Planned", title: "Satellite-Derived Throughput Estimation for Indian Ports and Refineries", authors: "XYZ", journal: "Research programme", tag: "Geospatial" },
  { date: "Planned", title: "Intraday Sentiment Analysis from Multilingual Indian News and Exchange Filings", authors: "XYZ", journal: "Research programme", tag: "Language" },
  { date: "Planned", title: "Regime Detection in Nifty and Bank Nifty via Cross-Sector Correlation Spectra", authors: "XYZ", journal: "Research programme", tag: "Risk" },
  { date: "Planned", title: "FII and DII Flow Attribution Under Index Rebalance Events", authors: "XYZ", journal: "Research programme", tag: "Flows" },
  { date: "Planned", title: "Execution Research in NSE F&O Under Margin and Expiry Constraints", authors: "XYZ", journal: "Research programme", tag: "Execution" },
  { date: "Planned", title: "Mainboard and SME IPO Listing-Day Risk from Subscription Momentum", authors: "XYZ", journal: "Research programme", tag: "Primary markets" },
];

const reports = [
  { title: "Indian Market Signal Study", subtitle: "Proposed research across NSE cash, F&O and commodities", date: "Planned" },
  { title: "India VIX Regime Outlook", subtitle: "Proposed volatility and sector-correlation study", date: "Planned" },
  { title: "Alternative Data Census — India", subtitle: "Planned evaluation of domestic and global sources", date: "Planned" },
  { title: "IPO & SME Primary Market Review", subtitle: "Proposed listing-cohort research", date: "Planned" },
];

const principles = [
  { title: "Quantitative rigour", desc: "Signal hypotheses will be evaluated with walk-forward and out-of-sample testing across Indian market history and relevant stress periods." },
  { title: "Reproducibility", desc: "Research pipelines are being designed for version control, traceable assumptions and reproducible results." },
  { title: "Transparent methodology", desc: "We intend to document core methodologies and clearly separate research hypotheses from validated outcomes." },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="Research & publications"
        title="Developing an Indian-market research programme"
        intro="We plan to study the intersection of machine learning, Indian market microstructure and alternative data. The topics below are a proposed research agenda, not published work or investment research."
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
          <p className="kicker mb-8">Proposed research papers</p>
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
          <p className="kicker mb-8">Planned research reports</p>
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
