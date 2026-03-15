const footerLinks = [
  {
    title: "Research",
    links: ["Methodology", "Publications", "Alpha Reports"],
  },
  {
    title: "Technology",
    links: ["API Reference", "Architecture", "Infrastructure"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Compliance"],
  },
];

const SieveFooter = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-display text-xl text-signal mb-2">Sieve Capital</p>
            <p className="text-dim text-xs font-mono-data leading-relaxed max-w-xs">
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-dim text-sm hover:text-signal transition-colors duration-200"
                    >
                      {link}
                    </a>
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
