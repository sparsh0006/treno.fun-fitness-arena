import { motion } from "framer-motion";
import { Zap, Link as LinkIcon, Dumbbell } from "lucide-react";

export default function SlideIntro() {
  return (
    <div className="flex flex-col items-center text-center gap-10">
      {/* Glowing T Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative"
      >
        <div className="w-32 h-32 rounded-2xl glass-card flex items-center justify-center relative">
          {/* <span className="text-7xl font-bold neon-text">T</span> */}
          {/* <div className="w-16 h-16 rounded-3xl bg-[#00FF87]/10 border border-[#00FF87]/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,135,0.15)] group-hover:shadow-[0_0_20px_rgba(0,255,135,0.25)] transition-all"> */}
            <Dumbbell className="text-[#00FF87]" size={48} />
          {/* </div> */}
          <Zap className="absolute -top-3 -right-3 w-6 h-6 text-primary" />
          <LinkIcon className="absolute -bottom-3 -left-3 w-5 h-5 text-primary/70" />
        </div>
        <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "0 0 60px 10px hsla(145,100%,50%,0.15)" }} />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-5xl md:text-6xl font-bold neon-text leading-tight"
      >
        Bet on Your Fitness Goals with Solana.
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
      >
        Treno.fun — A decentralized app on Solana where workouts become trustless challenges with real SOL stakes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card px-6 py-3 mono-font text-xs text-muted-foreground"
      >
        Built for the Solana Monolith Hackathon — Bringing innovative SocialFi to the ecosystem.
      </motion.div>
    </div>
  );
}
