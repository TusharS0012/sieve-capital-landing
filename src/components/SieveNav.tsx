import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Research", href: "/research" },
  { label: "Technology", href: "/technology" },
  { label: "API", href: "/api" },
  { label: "About", href: "/about" },
];

const SieveNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-lg text-signal hover:text-cyber transition-colors">
            Sieve
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-mono-data text-xs uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-cyber"
                    : "text-dim hover:text-signal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Button variant="cyber-outline" size="sm" className="text-xs">
          Access Terminal
        </Button>
      </div>
    </nav>
  );
};

export default SieveNav;
