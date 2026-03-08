import { motion } from "framer-motion";
import HudPanel from "./HudPanel";

// Import all images and video
import specFullBlue from "@/assets/spec-full-blue.png";
import specDiagnostic from "@/assets/spec-diagnostic.png";
import specFrontal from "@/assets/spec-frontal.png";
import specDorsal from "@/assets/spec-dorsal.png";
import specPelvic from "@/assets/spec-pelvic.png";
import specSyntid from "@/assets/spec-syntid.png";
import specVideo from "@/assets/spec-video.mp4";
import specOrcaDual from "@/assets/spec-orca-dual.png";
import specHydraulic from "@/assets/spec-hydraulic.png";
import specPelvicDetail from "@/assets/spec-pelvic-detail.png";
import specSpinVideo from "@/assets/spec-spin-video.mp4";

const SchematicsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="neon-line w-12" />
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
              KAPITEL 03
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
            ANATOMISCHE
            <br />
            <span className="text-primary text-glow-cyan">SPEZIFIKATIONEN</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Visuelle Protokolle der Systemvalidierung. Null-Schicht-Diagnose und Hardware-Feedback der Unit 01.
          </p>
        </motion.div>

        {/* Video Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass-panel hud-corner p-2 md:p-4 relative group"
        >
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded border border-primary/30 backdrop-blur-sm">
            <span className="status-indicator status-indicator-red" />
            <span className="font-mono text-[10px] text-primary">LIVE UPLINK: KINETIC FEEDBACK</span>
          </div>
          <video 
            src={specVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* ORCA Dual View — Full Width */}
        <HudPanel title="ORCA Status — Dual Perspective" className="mb-6">
          <img src={specOrcaDual} alt="ORCA Dual View" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
        </HudPanel>

        {/* Spin Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 glass-panel hud-corner p-2 md:p-4 relative group"
        >
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded border border-primary/30 backdrop-blur-sm">
            <span className="status-indicator" />
            <span className="font-mono text-[10px] text-primary">360° KÖRPERSIMULATION</span>
          </div>
          <video 
            src={specSpinVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Grid for Schematics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HudPanel title="Diagnostic Mode" className="lg:col-span-2">
            <img src={specDiagnostic} alt="Diagnostic" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>
          
          <HudPanel title="Hydraulic Actuators — Dorsal">
            <img src={specHydraulic} alt="Hydraulic System" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>

          <HudPanel title="Pelvic Girdle Interface" className="lg:col-span-2">
            <img src={specPelvicDetail} alt="Pelvic Detail" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>

          <HudPanel title="Sacral Architecture">
            <img src={specDorsal} alt="Dorsal" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>


          <HudPanel title="System Status: Valid" className="lg:col-span-2">
            <img src={specSyntid} alt="Syntid" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>

          <HudPanel title="Frontal Specification" className="lg:col-span-2">
             <img src={specFrontal} alt="Frontal Spec" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>

          <HudPanel title="Rear Design View" className="lg:col-span-1">
            <img src={specFullBlue} alt="Full Blue" className="w-full h-auto rounded-sm border border-primary/10 opacity-90 hover:opacity-100 transition-opacity" />
          </HudPanel>
        </div>
      </div>
    </section>
  );
};

export default SchematicsSection;