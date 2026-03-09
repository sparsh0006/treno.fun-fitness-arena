import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function SlideArchitecture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold neon-text">The Architecture</h2>

      {/* Placeholder for Excalidraw diagram */}
      <div className="glass-card p-4 flex flex-col items-center justify-center min-h-[420px] border-dashed border-2" style={{ borderColor: "hsla(145,100%,50%,0.25)" }}>
        <ImageIcon className="w-16 h-16 text-primary/40 mb-4" />
        <p className="text-muted-foreground text-lg">Your Excalidraw architecture diagram goes here</p>
        <p className="text-muted-foreground/60 text-sm mt-2 mono-font">Replace this placeholder with your exported image</p>
      </div>
    </motion.div>
  );
}
