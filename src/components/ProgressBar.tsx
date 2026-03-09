import { motion } from "framer-motion";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-1 bg-secondary">
      <motion.div
        className="h-full"
        style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsla(145,100%,50%,0.6)" }}
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <div className="absolute top-3 right-4 mono-font text-xs text-muted-foreground">
        Slide {current + 1} of {total}
      </div>
    </div>
  );
}
