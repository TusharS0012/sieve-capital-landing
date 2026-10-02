import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary-foreground/60 mb-5">
              Pre-launch enquiries
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              A conversation for what comes next.
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed max-w-lg">
              Sieve is being built for SEBI-registered AIFs, PMS managers, mutual funds, proprietary
              desks and family offices in India. We are still developing the platform and are not
              offering services yet. For future access enquiries, get in touch with our team.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-primary-foreground/15 w-full">
            <Button asChild className="h-12 px-7 rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="mailto:founder@sievecapital.in?subject=Pre-launch%20enquiry">Email an enquiry</a>
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-4">founder@sievecapital.in</p>
            <p className="text-[11px] text-primary-foreground/50 mt-5 tracking-wide">
              Pre-launch interest only · No services are currently being offered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
