import { motion } from "framer-motion";
import HudPanel from "./HudPanel";
import StatusReadout from "./StatusReadout";
import architectureBg from "@/assets/architecture-bg.jpg";

const ConvergenceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-15">
        <img src={architectureBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="neon-line-red w-12" />
            <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase">
              KAPITEL 02
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
            HARDWARE-BIOMETRISCHE
            <br />
            <span className="text-primary text-glow-cyan">KONVERGENZ</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Die untrennbare Verschmelzung von digitaler Logik und physischer Integrität
            als Fundament der Souveränität.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HudPanel title="Vortex Transmutation Core" delay={0.1}>
            <div className="space-y-4">
              <StatusReadout label="Kerntemperatur" value="42°C" unit="± 0.1°" />
              <StatusReadout label="Therm. Stabilität" value="85%" delay={0.1} />
              <StatusReadout label="Vortex-Flow" value="OPTIMAL" delay={0.2} />
              <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                Vortex-basierte Kühlarchitektur eliminiert Thermal Throttling vollständig.
                Kontinuierliche KI-Inferenz ohne Degradation.
              </p>
            </div>
          </HudPanel>

          <HudPanel title="Platin-Ω Protokoll" delay={0.2}>
            <div className="space-y-4">
              <StatusReadout label="Status" value="AKTIV" variant="red" />
              <StatusReadout label="Initiiert" value="02.03.2026" delay={0.1} />
              <StatusReadout label="White Room" value="ISOLIERT" delay={0.2} />
              <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                Zero-Trust Sandbox-Architektur. Jede Agenten-Aktion durchläuft
                algorithmisch zementierte Gesetzesprüfung.
              </p>
            </div>
          </HudPanel>

          <HudPanel title="ORCA Shield" delay={0.3} className="md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <StatusReadout label="VPN Cluster" value="SINGAPUR" variant="red" />
              <StatusReadout label="JS-Injection" value="BLOCKED" delay={0.1} />
              <StatusReadout label="CSP Policy" value="STRICT" delay={0.2} />
              <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                Kompromissloses Browser-Hardening. Content Security Policies
                eliminieren sämtliche Angriffsvektoren.
              </p>
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
};

export default ConvergenceSection;
