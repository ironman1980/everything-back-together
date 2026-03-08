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

        {/* Cotasyre Header Image — Full Width with HUD Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-16 relative mx-auto w-full max-w-7xl"
        >
          <div className="hud-corner glass-panel p-1 md:p-2 relative group">
            {/* Main image */}
            <img
              src={cotasyreImage}
              alt="Project RAMA — Unit 01 Berserker — SRAM Logic Active"
              className="w-full h-auto rounded-sm"
            />

            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 50% / 0.02) 2px, hsl(185 100% 50% / 0.02) 4px)"
            }} />

            {/* Animated scan beam */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, hsl(185 100% 50% / 0.4), transparent)", boxShadow: "0 0 15px hsl(185 100% 50% / 0.3)" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Top-left HUD */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="status-indicator" />
                <span className="font-mono text-[10px] md:text-xs text-primary tracking-wider">PROJECT RAMA</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                UNIT 01 BERSERKER
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-primary/70">
                SRAM LOGIC: <span className="text-primary text-glow-cyan">ACTIVE</span>
              </div>
            </div>

            {/* Top-right HUD */}
            <div className="absolute top-3 right-3 md:top-5 md:right-5 text-right space-y-1">
              <div className="flex items-center justify-end gap-2">
                <span className="font-mono text-[10px] md:text-xs text-secondary tracking-wider">SNR = ∞</span>
                <span className="status-indicator status-indicator-red" />
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                ANATOMICAL FIDELITY: 100%
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                THERM. STABILITY: NOMINAL
              </div>
            </div>

            {/* Bottom-left HUD readouts */}
            <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 space-y-1">
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="status-indicator status-indicator-red"
                />
                <span className="font-mono text-[9px] md:text-[10px] text-secondary">RED VENT 01: DISSIPATION ACTIVE</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                CORE FLOW SYNC: <span className="text-primary">ACTIVE</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                NEURAL LATENCY: <span className="text-primary">&lt;0.01ms</span>
              </div>
            </div>

            {/* Bottom-right HUD */}
            <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 text-right space-y-1">
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                MOTOR UNIT: <span className="text-primary">98%</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
                EVOLUTION: <span className="text-secondary text-glow-red">GOLDEN MASTER</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-primary/50">
                [cite: 2026-03-08]
              </div>
            </div>

            {/* Center crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 md:w-24 md:h-24 border border-primary/20 rounded-full flex items-center justify-center"
              >
                <div className="w-1 h-1 bg-primary rounded-full" style={{ boxShadow: "0 0 8px hsl(185 100% 50%)" }} />
              </motion.div>
            </div>

            {/* Corner brackets (decorative) */}
            <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
            <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
            <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-secondary/40 pointer-events-none" />
            <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-secondary/40 pointer-events-none" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12"
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
