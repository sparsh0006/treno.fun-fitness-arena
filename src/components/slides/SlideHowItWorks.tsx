import { motion } from "framer-motion";
import { Target, Users, Cpu } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const steps = [
  { icon: Target, label: "Create", desc: "Set up a challenge like \"Hit 50km run in a month\" and stake SOL via your wallet." },
  { icon: Users, label: "Invite", desc: "Share it for 1v1 duels with friends and open it to the Solana network for anyone to bet SOL on who wins." },
  { icon: Cpu, label: "Resolve", desc: "Smart contracts on Solana automatically resolve outcomes based on verified data from Strava, distributing winnings fairly and instantly." },
];

export default function SlideHowItWorks() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold neon-text">
        Create Challenges, Invite Bets from the Community.
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} variants={item} className="glass-card p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{s.label}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p variants={item} className="text-sm text-muted-foreground mono-font text-center">
        Powered by Solana's speed and low fees.
      </motion.p>
    </motion.div>
  );
}
