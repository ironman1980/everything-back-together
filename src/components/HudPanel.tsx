import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HudPanelProps {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

const HudPanel = ({ children, title, className = "", delay = 0 }: HudPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-panel hud-corner p-6 ${className}`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-4">
          <span className="status-indicator" />
          <h3 className="font-display text-sm tracking-[0.3em] uppercase text-primary">
            {title}
          </h3>
          <div className="neon-line flex-1" />
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default HudPanel;
