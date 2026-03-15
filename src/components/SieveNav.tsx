import { Button } from "@/components/ui/button";

const SieveNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          <span className="font-display text-lg text-signal">Sieve</span>
          <div className="hidden md:flex items-center gap-6">
            {["Research", "Technology", "API", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono-data text-xs text-dim hover:text-signal transition-colors duration-200 uppercase tracking-wider"
              >
                {item}
              </a>
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
