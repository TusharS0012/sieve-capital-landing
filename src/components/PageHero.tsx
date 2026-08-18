import { motion } from "framer-motion";

interface PageHeroProps {
  kicker: string;
  title: string;
  intro: string;
}

const PageHero = ({ kicker, title, intro }: PageHeroProps) => (
  <section className="pt-32 md:pt-40 pb-14 border-b border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <p className="kicker mb-5">{kicker}</p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] text-ink mb-5">{title}</h1>
        <p className="text-soft text-base md:text-lg leading-relaxed max-w-2xl">{intro}</p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
