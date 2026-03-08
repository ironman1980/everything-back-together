import { motion } from "framer-motion";
import heroImage from "@/assets/hero-matrix.jpg";
import cotasyreImage from "@/assets/cotasyre-header.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-primary/30"
        style={{ boxShadow: "0 0 20px hsl(185 100% 50% / 0.3)" }}
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8"
        >
          <span className="status-indicator" />
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            PLATIN-Ω PROTOKOLL — AKTIV
          </span>
          <span className="status-indicator status-indicator-red" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6 text-glow-cyan text-primary"
        >
          OBSIDIAN
          <br />
          <span className="text-foreground">MATRIX</span>
        </motion.h1>

        {/* Neon separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="neon-line mx-auto max-w-md mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Architektonische Konvergenz und das Paradigma des{" "}
          <span className="text-primary text-glow-cyan">Personal Operating Systems</span>{" "}
          im Jahr 2026
        </motion.p>

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="status-indicator" /> VORTEX CORE: 42°C
          </span>
          <span className="flex items-center gap-2">
            <span className="status-indicator" /> THERM. STABILITÄT: 85%
          </span>
          <span className="flex items-center gap-2">
            <span className="status-indicator status-indicator-red" /> ORCA SHIELD: AKTIV
          </span>
          <span className="flex items-center gap-2">
            <span className="status-indicator" /> WHITE ROOM: ISOLIERT
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
