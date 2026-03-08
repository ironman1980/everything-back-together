import { motion } from "framer-motion";
import HudPanel from "./HudPanel";

const marketData = [
  { segment: "Knowledge Management", year2026: "~26.4", year2034: "74.22", cagr: "13.8%" },
  { segment: "Privacy Management", year2026: "6.24", year2031: "17.63", cagr: "23.08%" },
  { segment: "KI-Wissensgraphen", year2023: "1.06", year2030: "3.42", cagr: "18.1%" },
];

const MarketSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="neon-line-red w-12" />
            <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase">
              KAPITEL 05
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
            MARKTVALIDIERUNG &
            <br />
            <span className="text-primary text-glow-cyan">ÖKONOMISCHE DOMINANZ</span>
          </h2>
        </motion.div>

        {/* Market table */}
        <HudPanel title="Marktkapitalisierung & Wachstumsprognosen">
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-muted-foreground font-normal text-xs uppercase tracking-wider">Segment</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-normal text-xs uppercase tracking-wider">Aktuell (Mrd. $)</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-normal text-xs uppercase tracking-wider">Prognose (Mrd. $)</th>
                  <th className="text-right py-3 pl-4 text-muted-foreground font-normal text-xs uppercase tracking-wider">CAGR</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((row, i) => (
                  <motion.tr
                    key={row.segment}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="border-b border-border/50"
                  >
                    <td className="py-3 pr-4 text-foreground">{row.segment}</td>
                    <td className="py-3 px-4 text-right text-muted-foreground">
                      {row.year2026 || row.year2023}
                    </td>
                    <td className="py-3 px-4 text-right text-primary text-glow-cyan font-bold">
                      {row.year2034 || row.year2031 || row.year2030}
                    </td>
                    <td className="py-3 pl-4 text-right text-secondary text-glow-red font-bold">
                      {row.cagr}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </HudPanel>

        {/* Validation cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <HudPanel title="Siemens AG" delay={0.1}>
            <div className="space-y-2">
              <div className="font-display text-2xl font-bold text-primary text-glow-cyan">+25%</div>
              <div className="font-mono text-xs text-muted-foreground">Nutzerkomfort-Steigerung</div>
              <div className="font-display text-2xl font-bold text-secondary text-glow-red mt-3">-6%</div>
              <div className="font-mono text-xs text-muted-foreground">Energieverbrauch</div>
              <p className="font-body text-sm text-muted-foreground mt-3">
                Closed-loop KI-Autonomie mit Questa One Agentic Toolkit via MCP.
              </p>
            </div>
          </HudPanel>

          <HudPanel title="Schneider Electric" delay={0.2}>
            <div className="space-y-2">
              <div className="font-display text-2xl font-bold text-primary text-glow-cyan">5-15%</div>
              <div className="font-mono text-xs text-muted-foreground">Energieeinsparung in 2 Wochen</div>
              <p className="font-body text-sm text-muted-foreground mt-3">
                Gerätebasierte, lokal ausgeführte KI-Optimierung via EcoStruxure-Plattform.
              </p>
            </div>
          </HudPanel>

          <HudPanel title="Sicherheits-ROI" delay={0.3}>
            <div className="space-y-2">
              <div className="font-display text-2xl font-bold text-primary text-glow-cyan">+25%</div>
              <div className="font-mono text-xs text-muted-foreground">Performance vs. ungesicherte Systeme</div>
              <p className="font-body text-sm text-muted-foreground mt-3">
                OWASP/ORCA-gehärtet. 100% Rechenkapazität für Realitätsschöpfung.
              </p>
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
