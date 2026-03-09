import { motion } from "framer-motion";
import { ShieldCheck, Lock, Smartphone } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const features = [
  { icon: ShieldCheck, title: "Real Workout Proof", desc: "Integrated with Strava's GPS and activity data — verifiable on-chain to prevent any fakes." },
  { icon: Lock, title: "Solana Smart Contracts", desc: "All stakes locked in escrow until automatic resolution, with no central control for true decentralization." },
  { icon: Smartphone, title: "Mobile-First Access", desc: "Native integration with Solana wallets like Phantom for quick signing and joining from anywhere." },
];

export default function SlideSecurity() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold neon-text">
        Trustless and Cheat-Proof Design.
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} variants={item} className="glass-card p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
