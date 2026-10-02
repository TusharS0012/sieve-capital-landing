import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const team = [
  {
    name: "XYZ",
    role: "Co-Founder & Chief Executive",
    bg: "Proposed role overseeing research direction, institutional relationships and operating priorities.",
    focus: "Signal architecture",
  },
  {
    name: "XYZ",
    role: "Co-Founder & Chief Technology Officer",
    bg: "Proposed role leading data architecture, engineering and platform security.",
    focus: "Infrastructure & ML",
  },
  {
    name: "XYZ",
    role: "Head of Research",
    bg: "Proposed role shaping Indian-market research methods and validation standards.",
    focus: "Risk & regime models",
  },
  {
    name: "XYZ",
    role: "Head of Language Models",
    bg: "Proposed role exploring multilingual filings and news analysis.",
    focus: "Filings & news NLP",
  },
  {
    name: "XYZ",
    role: "Head of Execution",
    bg: "Proposed role evaluating future execution workflows and pre-trade controls, subject to approvals.",
    focus: "Execution algorithms",
  },
  {
    name: "XYZ",
    role: "Head of Geospatial",
    bg: "Proposed role assessing alternative-data sources and their research suitability.",
    focus: "Satellite intelligence",
  },
];

const timeline = [
  { year: "Now", event: "Sieve Capital is in the planning and development stage in India" },
  { year: "Phase 01", event: "Build and validate the research framework using permitted historical and public data" },
  { year: "Phase 02", event: "Develop multilingual document intelligence and Indian-market risk models" },
  { year: "Phase 03", event: "Complete security, legal, regulatory and data-licensing readiness" },
  { year: "Phase 04", event: "Begin limited institutional pilots only after the required approvals are in place" },
];

const stats = [
  { value: "India", label: "Primary market focus" },
  { value: "NSE + BSE", label: "Planned exchange scope" },
  { value: "Cash + F&O", label: "Intended segments" },
  { value: "Pre-launch", label: "Current stage" },
];

const offices = [
  { city: "Mumbai", address: "Proposed base for market research and future operations", label: "Planned base" },
  { city: "GIFT City", address: "Being evaluated for a future regulated presence", label: "Future option" },
  { city: "Bengaluru", address: "Being evaluated for future engineering recruitment", label: "Future option" },
  { city: "Delhi NCR", address: "Being evaluated for future institutional coverage", label: "Future option" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="About Sieve Capital"
        title="Building toward Indian-market intelligence"
        intro="Sieve Capital is a pre-launch initiative developing its research approach, technology and operating model for Indian markets. It is not yet conducting investment or client business."
      />

      <section className="py-16 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Mission</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-5">
              Collapse the latency between global events and Indian institutional insight.
            </h2>
            <p className="text-soft text-sm leading-relaxed mb-4">
              Indian markets now clear record cash and derivatives volumes across NSE and BSE, while
              price-sensitive information arrives continuously through exchange filings, SEBI and RBI
              disclosures, results calls, IPO and SME documents, and global macro prints.
            </p>
            <p className="text-soft text-sm leading-relaxed">
              Sieve Capital intends to combine alternative data, multilingual language models and
              market-structure research to support future analysis of Nifty, Bank Nifty, individual
              equities and commodities. This capability remains under development.
            </p>
          </div>

          <div className="lg:col-span-5 panel p-7">
            <p className="kicker mb-6">By the numbers</p>
            <div className="grid grid-cols-2 gap-y-7 gap-x-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono-data text-2xl text-ink">{stat.value}</p>
                  <p className="text-soft text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40" id="leadership">
        <div className="container">
          <p className="kicker mb-8">Proposed leadership structure</p>
          <p className="text-soft text-sm mb-8 max-w-2xl">The roles below describe a possible future team structure. Names are placeholders; no individual credentials or appointments are represented here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {team.map((person, i) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-paper-raised p-6"
              >
                <p className="font-mono-data text-[11px] text-bronze mb-3">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </p>
                <h3 className="font-display text-lg text-ink">{person.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.14em] text-soft mt-1 mb-3">
                  {person.role}
                </p>
                <p className="text-soft text-xs leading-relaxed mb-4">{person.bg}</p>
                <span className="text-[10px] uppercase tracking-[0.14em] text-soft border border-border px-2 py-1">
                  {person.focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border" id="contact">
        <div className="container">
          <p className="kicker mb-8">Development roadmap</p>
          <div className="border-t border-border max-w-3xl">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 gap-4 py-5 border-b border-border"
              >
                <span className="col-span-3 md:col-span-2 font-mono-data text-xs text-bronze">
                  {item.year}
                </span>
                <p className="col-span-9 md:col-span-10 text-soft text-sm leading-relaxed">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Potential future locations</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {offices.map((office) => (
              <div key={office.city} className="bg-paper-raised p-6">
                <h3 className="font-display text-lg text-ink">{office.city}</h3>
                <p className="text-[10px] uppercase tracking-[0.14em] text-soft mt-1 mb-3">
                  {office.label}
                </p>
                <p className="text-soft text-xs leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="kicker mb-5">Contact</p>
            <h2 className="font-display text-2xl text-ink mb-4">Institutional enquiries</h2>
            <p className="text-soft text-sm leading-relaxed">
              For coverage, API access or research distribution, write to{" "}
              <a href="mailto:institutional@sieve.capital" className="text-bronze link-underline">
                institutional@sieve.capital
              </a>
               . Enquiries will be reviewed during the development stage.
            </p>
          </div>
          <div>
            <p className="kicker mb-5">Careers</p>
            <h2 className="font-display text-2xl text-ink mb-4">Work at Sieve</h2>
            <p className="text-soft text-sm leading-relaxed">
               Future roles may include quantitative research, engineering and data science. To
               express interest before hiring begins, send your profile to{" "}
              <a href="mailto:careers@sieve.capital" className="text-bronze link-underline">
                careers@sieve.capital
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default About;
