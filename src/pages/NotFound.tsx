import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";

const links = [
  { label: "Research & publications", href: "/research" },
  { label: "Technology & infrastructure", href: "/technology" },
  { label: "API reference", href: "/api" },
  { label: "About the firm", href: "/about" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SieveNav />

      <main className="flex-1 pt-32 md:pt-40 pb-20">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="kicker mb-5">Error 404</p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.08] text-ink mb-5">
              This page could not be found
            </h1>
            <p className="text-soft text-base leading-relaxed max-w-xl mb-8">
              The address <span className="font-mono-data text-ink">{location.pathname}</span> does
              not exist on our site. It may have been moved, or the link may be out of date.
            </p>
            <Link to="/" className="text-bronze link-underline text-sm">
              Return to homepage
            </Link>
          </div>

          <div className="md:col-span-5 panel p-7">
            <p className="kicker mb-5">Popular sections</p>
            <ul className="border-t border-border">
              {links.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    to={link.href}
                    className="block py-3 text-sm text-soft hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <SieveFooter />
    </div>
  );
};

export default NotFound;
