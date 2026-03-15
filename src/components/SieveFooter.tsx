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
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
];

const SieveFooter = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-display text-xl text-signal hover:text-cyber transition-colors">
              Sieve Capital
            </Link>
            <p className="text-dim text-xs font-mono-data leading-relaxed max-w-xs mt-2">
              Quantitative signal intelligence. Collapsing the latency between global noise and
              institutional alpha.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <p className="font-mono-data text-xs text-cyber uppercase tracking-widest mb-4">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-dim text-sm hover:text-signal transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono-data text-[10px] text-dim">
            © 2026 SIEVE CAPITAL LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono-data text-[10px] text-dim">
            SYS_STATUS: OPERATIONAL | UPTIME: 99.97% | NODE: LDN-GRW-01
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SieveFooter;
