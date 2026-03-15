import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import { MapPin, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Dr. Kai Chen",
    role: "Co-Founder & CEO",
    bg: "Former Head of Systematic Strategies, Citadel Securities. PhD Applied Mathematics, MIT.",
    focus: "Signal Architecture",
  },
  {
    name: "Adaeze Okafor",
    role: "Co-Founder & CTO",
    bg: "Former Principal Engineer, Palantir. MSc Computer Science, Stanford.",
    focus: "Infrastructure & ML",
  },
  {
    name: "Dr. Stefan Müller",
    role: "Head of Research",
    bg: "Former Quantitative Researcher, Two Sigma. PhD Econophysics, ETH Zurich.",
    focus: "Risk & Regime Models",
  },
  {
    name: "Joon Park",
    role: "Head of NLP",
    bg: "Former Research Scientist, DeepMind. MSc NLP, University of Edinburgh.",
    focus: "Language Models",
  },
  {
    name: "Raj Singh",
    role: "Head of Execution",
    bg: "Former VP Electronic Trading, Goldman Sachs. MEng, IIT Bombay.",
    focus: "Execution Algorithms",
  },
  {
    name: "Maria Fernandez",
    role: "Head of Geospatial",
    bg: "Former Senior Analyst, NGA. MSc Remote Sensing, Imperial College London.",
    focus: "Satellite Intelligence",
  },
];

const timeline = [
  { year: "2022", event: "Founded in London by Dr. Kai Chen and Adaeze Okafor" },
  { year: "2023", event: "Seed round led by Sequoia Capital. First satellite data pipeline operational" },
  { year: "2023", event: "Team grows to 12. First institutional client onboarded" },
  { year: "2024", event: "Series A. Expanded to NYC and Singapore co-locations" },
  { year: "2024", event: "Launched Sieve API v1. 40+ exchange connectivity" },
  { year: "2025", event: "Series B. 400TB daily data processing milestone. SOC 2 Type II certified" },
  { year: "2026", event: "API v2 launch. Team of 48 across 4 offices. 12 global PoPs" },
];

const About = () => {
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
              About Sieve Capital
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-signal mb-4 max-w-2xl">
              Engineering Alpha from Noise
            </h1>
            <p className="text-dim text-base md:text-lg max-w-xl leading-relaxed">
              We are a team of quantitative researchers, systems engineers, and data scientists 
              building the next generation of signal intelligence infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-4">Mission</p>
              <h2 className="font-display text-2xl text-signal mb-4">
                Collapse the latency between global events and institutional insight.
              </h2>
              <p className="text-dim text-sm leading-relaxed mb-4">
                The world generates 2.5 quintillion bytes of data daily. Within that noise lies 
                alpha — ephemeral signals that decay in milliseconds. Traditional research processes 
                take hours or days to surface these signals.
              </p>
              <p className="text-dim text-sm leading-relaxed">
                Sieve Capital exists to compress that timeline. We combine satellite imagery, 
                natural language processing, and alternative data streams into a unified signal 
                intelligence engine that delivers actionable insight before the market can price it in.
              </p>
            </div>
            <div className="surface-glass rounded-lg p-6">
              <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
                By the Numbers
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "48", label: "Team Members" },
                  { value: "4", label: "Global Offices" },
                  { value: "17", label: "PhDs on Staff" },
                  { value: "147", label: "Data Sources" },
                  { value: "$42M", label: "Total Funding" },
                  { value: "40+", label: "Exchange Connections" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono-data text-cyber text-2xl">{stat.value}</p>
                    <p className="text-dim text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-8">
            Leadership
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="surface-glass rounded-lg p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded border border-cyber/20 flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cyber">
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-signal text-sm font-medium">{person.name}</h3>
                    <p className="text-cyber text-xs font-mono-data">{person.role}</p>
                  </div>
                </div>
                <p className="text-dim text-xs leading-relaxed mb-2">
                  <GraduationCap className="w-3 h-3 inline mr-1 text-dim" />
                  {person.bg}
                </p>
                <span className="font-mono-data text-[10px] text-dim border border-border rounded px-2 py-0.5">
                  {person.focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-8">
            Timeline
          </p>
          <div className="relative">
            <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 relative"
                >
                  <span className="font-mono-data text-xs text-cyber w-[48px] md:w-[68px] shrink-0 text-right">
                    {item.year}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyber/60 border border-cyber mt-1.5 shrink-0 relative z-10" />
                  <p className="text-dim text-sm leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Offices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { city: "London", address: "1 Finsbury Avenue, EC2M 2PF", label: "HQ" },
              { city: "New York", address: "55 Hudson Yards, 10001", label: "Trading" },
              { city: "Singapore", address: "1 Raffles Quay, 048583", label: "APAC" },
              { city: "Zurich", address: "Bahnhofstrasse 45, 8001", label: "Research" },
            ].map((office) => (
              <div key={office.city} className="surface-glass rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-cyber" />
                  <span className="text-signal text-sm font-medium">{office.city}</span>
                  <span className="font-mono-data text-[9px] text-dim border border-border rounded px-1.5 py-0.5 ml-auto">
                    {office.label}
                  </span>
                </div>
                <p className="text-dim text-xs">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default About;
