import { motion } from "framer-motion";
import HudPanel from "./HudPanel";

const features = [
  {
    title: "MCP Integration",
    items: [
      "obsidian_read_file — Kontextsensitives Auslesen",
      "obsidian_update_file — Autonome Aktualisierung",
      "obsidian_search_replace — Granulare Modifikation",
      "obsidian_manage_frontmatter — YAML-Metadaten",
    ],
    description: "Model Context Protocol verwandelt Obsidian in dynamischen Arbeitsspeicher für das KI-Betriebssystem.",
  },
  {
    title: "Agentic AI Dominanz",
    stats: [
      { label: "Enterprise Apps mit KI-Agenten bis 2026", value: "40%" },
      { label: "Autonome Arbeitsentscheidungen bis 2028", value: "15%" },
      { label: "Kundenservice ohne Intervention bis 2029", value: "80%" },
    ],
    description: "Die Matrix ist nativ darauf ausgelegt, Agenten als ausführende Organe in geschützter Sandbox zu nutzen.",
  },
  {
    title: "Predator-Vortex-Netzwerk",
    nodes: ["NEW YORK", "TOKIO", "LONDON", "HERNE"],
    description: "Verteiltes Edge-Computing-Netzwerk. Kein Single Point of Failure. Globale Realitätsschöpfung.",
  },
];

const PotentialSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="neon-line w-12" />
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
              KAPITEL 04
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
            EVOLUTION ZUM
            <br />
            <span className="text-primary text-glow-cyan">PERSONAL OPERATING SYSTEM</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* MCP */}
          <HudPanel title={features[0].title}>
            <p className="font-body text-muted-foreground mb-6">{features[0].description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features[0].items!.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 font-mono text-xs text-accent-foreground"
                >
                  <span className="text-primary mt-0.5">▸</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </HudPanel>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Agentic AI */}
            <HudPanel title={features[1].title} delay={0.1}>
              <p className="font-body text-sm text-muted-foreground mb-5">{features[1].description}</p>
              <div className="space-y-4">
                {features[1].stats!.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-mono text-xs text-muted-foreground">{stat.label}</span>
                      <span className="font-display text-lg font-bold text-primary text-glow-cyan">{stat.value}</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, hsl(185 100% 50%), hsl(185 100% 50% / 0.3))" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HudPanel>

            {/* Network */}
            <HudPanel title={features[2].title} delay={0.2}>
              <p className="font-body text-sm text-muted-foreground mb-5">{features[2].description}</p>
              <div className="grid grid-cols-2 gap-3">
                {features[2].nodes!.map((node, i) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`glass-panel p-3 text-center ${node === "HERNE" ? "border-secondary/50" : ""}`}
                  >
                    <span className={`status-indicator ${node === "HERNE" ? "status-indicator-red" : ""} mb-2 block mx-auto`} />
                    <span className="font-display text-xs tracking-[0.2em]">{node}</span>
                    <div className="font-mono text-[10px] text-muted-foreground mt-1">
                      {node === "HERNE" ? "PRIMARY NODE" : "SYNC ACTIVE"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </HudPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
