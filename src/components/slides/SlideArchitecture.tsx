import { motion } from "framer-motion";

export default function SlideArchitecture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold neon-text">The Architecture</h2>

      <div className="glass-card p-2 overflow-hidden border-primary/20 bg-black/40">
        <img 
          src="/architecture-diagram.png" 
          alt="Treno Architecture Diagram" 
          className="w-full h-auto rounded-lg shadow-2xl transition-transform hover:scale-[1.01]"
        />
      </div>
      
      <p className="text-muted-foreground text-sm mono-font italic">
        A seamless loop between Strava data, Solana smart contracts, and high-stakes duels.
      </p>
    </motion.div>
  );
}