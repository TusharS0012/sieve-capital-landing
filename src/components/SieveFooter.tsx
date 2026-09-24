import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Research",
    links: [
      { label: "Methodology", href: "/research" },
      { label: "Publications", href: "/research" },
      { label: "Alpha Reports", href: "/research" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "API Reference", href: "/api" },
      { label: "Architecture", href: "/technology" },
      { label: "Infrastructure", href: "/technology" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
];

const SieveFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-2xl text-ink">
              Sieve Capital
            </Link>
            <p className="text-soft text-sm leading-relaxed max-w-sm mt-3">
              Building quantitative intelligence for Indian institutional markets, with planned
              NSE, BSE, F&O, equity and IPO coverage informed by global market news.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <p className="kicker mb-4">{group.title}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-soft text-sm hover:text-ink transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="kicker mb-3">Regulatory</p>
            <p className="text-[11px] text-soft leading-relaxed">
              Pre-launch project. Sieve Capital is not yet offering investment, research,
              execution or portfolio-management services. Required registrations and permissions
              will be obtained before any regulated activity begins.
            </p>
          </div>
          <div>
            <p className="kicker mb-3">Investor grievances</p>
            <p className="text-[11px] text-soft leading-relaxed">
              As no regulated services are currently offered, there are no active investor-service
              grievances. General pre-launch enquiries may be sent to{" "}
              <a href="mailto:compliance@sieve.capital" className="hover:text-ink transition-colors">
                compliance@sieve.capital
              </a>.
            </p>
          </div>
          <div>
            <p className="kicker mb-3">Risk disclosure</p>
            <p className="text-[11px] text-soft leading-relaxed">
              All market information and interface examples on this website are illustrative. They
              are not live signals, actual performance, investment research or investment advice.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-[11px] text-soft">
            © 2026 Sieve Capital. All rights reserved. Pre-launch initiative based in India.
          </p>
          <p className="text-[11px] text-soft md:text-right">
            Market hours 09:15–15:30 IST · Data timestamps in Asia/Kolkata
          </p>
        </div>

      </div>
    </footer>
  );
};

export default SieveFooter;
