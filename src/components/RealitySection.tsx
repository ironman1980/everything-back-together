import { motion } from "framer-motion";

const RealitySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(185 100% 50% / 0.1) 0px, transparent 1px, transparent 20px)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="neon-line w-12" />
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
              KAPITEL 05
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
            EPISTEMOLOGISCHE
            <br />
            <span className="text-secondary text-glow-red">INTEGRITÄT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl tracking-wide text-foreground">
              Reality Poisoning — Die Krise
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Synthetische Datenströme erzeugen toxische Rückkopplungsschleifen.
              Model Exhaust korrumpiert neue LLM-Generationen. Die Grenze zwischen
              Fakt und maschineller Inferenz löst sich auf.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cloud-basierte Wissensdatenbanken verstopfen mit plausibel klingendem
              Unsinn. Der wahrgenommene Wert ungefilterter Information tendiert gegen Null.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel hud-corner p-8 text-center"
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6"
            >
              <div className="font-display text-6xl font-black text-primary text-glow-cyan">
                ∞
              </div>
              <div className="font-mono text-xs text-primary tracking-[0.3em] mt-2">SNR = ∞</div>
            </motion.div>

            <div className="neon-line mb-6" />

            <h3 className="font-display text-lg tracking-wide text-foreground mb-3">
              "DAS EIS UMSCHLIESST DEN NAMEN"
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Informationen, einmal verifiziert im Voodoo-Core, sind zementiert —
              eingefroren in Unveränderlichkeit, geschützt vor schleichender Korruption
              externer KI-Halluzinationen.
            </p>

            <div className="mt-6 flex justify-center gap-4 font-mono text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="status-indicator" /> LOCAL-FIRST
              </span>
              <span className="flex items-center gap-1">
                <span className="status-indicator status-indicator-red" /> PRIVACY-FIRST
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
