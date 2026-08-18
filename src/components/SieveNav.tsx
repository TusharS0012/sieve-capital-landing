import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Research", href: "/research" },
  { label: "Technology", href: "/technology" },
  { label: "API", href: "/api" },
  { label: "About", href: "/about" },
];

const SieveNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-ink">Sieve</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-soft">Capital</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[13px] tracking-wide link-underline ${
                location.pathname === item.href ? "text-bronze" : "text-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="cyber" size="sm" className="hidden sm:inline-flex text-xs h-9 px-4">
            Client Login
          </Button>
          <button
            className="md:hidden p-2 text-ink"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-soft hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SieveNav;
