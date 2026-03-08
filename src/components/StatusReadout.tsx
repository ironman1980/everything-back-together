import { motion } from "framer-motion";

interface StatusReadoutProps {
  label: string;
  value: string;
  unit?: string;
  variant?: "cyan" | "red";
  delay?: number;
}

const StatusReadout = ({ label, value, unit, variant = "cyan", delay = 0 }: StatusReadoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-baseline gap-2"
    >
      <span className={`status-indicator ${variant === "red" ? "status-indicator-red" : ""}`} />
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <span className={`font-display text-lg font-bold ${variant === "cyan" ? "text-primary text-glow-cyan" : "text-secondary text-glow-red"}`}>
        {value}
      </span>
      {unit && (
        <span className="font-mono text-xs text-muted-foreground">{unit}</span>
      )}
    </motion.div>
  );
};

export default StatusReadout;
