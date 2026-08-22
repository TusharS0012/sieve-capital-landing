import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";

const team = [
  {
    name: "XYZ",
    role: "Co-Founder & Chief Executive",
    bg: "Former Head of Systematic Strategies, institutional equities desk, Mumbai. PhD Applied Mathematics, IIT Bombay.",
    focus: "Signal architecture",
  },
  {
    name: "XYZ",
    role: "Co-Founder & Chief Technology Officer",
    bg: "Former Principal Engineer on low-latency market data systems. MSc Computer Science, IISc Bengaluru.",
    focus: "Infrastructure & ML",
  },
  {
    name: "XYZ",
    role: "Head of Research",
    bg: "Former quantitative researcher covering Nifty and Bank Nifty derivatives. PhD Financial Econometrics, IGIDR Mumbai.",
    focus: "Risk & regime models",
  },
  {
    name: "XYZ",
    role: "Head of Language Models",
    bg: "Former research scientist in multilingual NLP. MSc Computational Linguistics, IIIT Hyderabad.",
    focus: "Filings & news NLP",
  },
  {
    name: "XYZ",
    role: "Head of Execution",
    bg: "Former VP Electronic Trading, NSE cash and F&O algo desk. MEng, IIT Kanpur.",
    focus: "Execution algorithms",
  },
  {
    name: "XYZ",
    role: "Head of Geospatial",
    bg: "Former senior analyst on port, plant and crop monitoring programmes. MSc Remote Sensing, IIT Roorkee.",
    focus: "Satellite intelligence",
  },
];

const timeline = [
  { year: "2022", event: "Founded in Mumbai by XYZ" },
  { year: "2023", event: "Seed round from India-focused deep-tech funds. First satellite pipeline over Indian ports operational" },
  { year: "2023", event: "Team grows to 12. First domestic institutional client onboarded" },
  { year: "2024", event: "Series A. NSE and BSE co-location established at Mumbai data centres" },
  { year: "2024", event: "Launched Sieve API v1 with NSE cash, F&O and IPO coverage" },
  { year: "2025", event: "Series B. 400TB daily processing milestone. SOC 2 Type II certified" },
  { year: "2026", event: "API v2 launch. Team of 48 across four Indian offices. GIFT City desk live" },
];

const stats = [
  { value: "48", label: "Team members" },
  { value: "4", label: "India offices" },
  { value: "17", label: "PhDs on staff" },
  { value: "147", label: "Data sources" },
  { value: "₹350 Cr", label: "Total funding" },
  { value: "2", label: "Exchanges co-located" },
];

const offices = [
  { city: "Mumbai", address: "One BKC, Bandra Kurla Complex, 400051", label: "Headquarters" },
  { city: "GIFT City", address: "Signature Tower, Gandhinagar, 382355", label: "IFSC desk" },
  { city: "Bengaluru", address: "Embassy Golflinks, 560071", label: "Engineering" },
  { city: "Delhi NCR", address: "DLF Cyber City, Gurugram, 122002", label: "Client coverage" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="About Sieve Capital"
        title="Engineering alpha from noise in Indian markets"
        intro="We are a Mumbai-headquartered team of quantitative researchers, systems engineers and data scientists building signal intelligence infrastructure for NSE and BSE participants."
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
              Sieve Capital compresses the research timeline. We fuse satellite imagery over Indian
              ports, plants and farmland with multilingual language models and market microstructure
              data to deliver signals on Nifty, Bank Nifty, single stocks and commodities before the
              move is fully priced.
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

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Leadership</p>
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

      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="kicker mb-8">Timeline</p>
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
          <p className="kicker mb-8">Offices</p>
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
              . Our team responds within one business day, Monday to Friday, IST.
            </p>
          </div>
          <div>
            <p className="kicker mb-5">Careers</p>
            <h2 className="font-display text-2xl text-ink mb-4">Work at Sieve</h2>
            <p className="text-soft text-sm leading-relaxed">
              We hire quantitative researchers, low-latency engineers and data scientists across
              Mumbai, Bengaluru and GIFT City. Send your profile to{" "}
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
