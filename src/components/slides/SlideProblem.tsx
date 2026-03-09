import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function SlideProblem() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold neon-text">
        Staying fit is tough without real commitment.
      </motion.h2>

      <motion.div variants={item} className="glass-card p-8 space-y-4">
        <div className="flex items-start gap-4">
          <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
          <p className="text-lg text-foreground/90">
            People set workout targets but quit easily because there's no real commitment or shared risk. Traditional apps lack the drive to keep users consistent.
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="glass-card p-8 space-y-4 border-primary/30" style={{ borderColor: "hsla(145,100%,50%,0.2)" }}>
        <div className="flex items-center gap-3 mb-3">
          <ArrowRight className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold neon-text">The Treno Solution</h3>
        </div>
        <p className="text-lg text-foreground/90">
Duel friends in 1v1 challenges and invite the community to bet on the winner. Stake SOL to stay committed and let trustless smart contracts reward your sweat with the prize pool.        </p>
      </motion.div>
    </motion.div>
  );
}
