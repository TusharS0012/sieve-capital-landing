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
              Quantitative signal intelligence for institutional investors. Collapsing the
              latency between global information and considered decisions.
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

        <div className="mt-14 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-[11px] text-soft">
            © 2026 Sieve Capital Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <p className="text-[11px] text-soft md:text-right">
            SOC 2 Type II certified · For professional investors only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SieveFooter;
