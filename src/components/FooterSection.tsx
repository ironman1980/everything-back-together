import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-24 relative">
      <div className="neon-line mb-16" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
            <span className="text-foreground">DIE STRUKTUR IST</span>
            <br />
            <span className="text-primary text-glow-cyan">ZEMENTIERT</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Performant. Skalierbar. Souverän.
            <br />
            Die operative Konvergenz ist erreicht.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 font-mono text-xs text-muted-foreground">
            <span>ADMIN-SAMA</span>
            <span className="text-border">|</span>
            <span>HERNE, NRW</span>
            <span className="text-border">|</span>
            <span>2026</span>
            <span className="text-border">|</span>
            <span className="text-primary">OBSIDIAN MATRIX v2.0</span>
          </div>
        </motion.div>
      </div>

      <div className="neon-line-red mt-16" />
    </footer>
  );
};

export default FooterSection;
