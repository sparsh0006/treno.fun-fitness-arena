import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function SlideVision() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10 text-center">
      <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold neon-text">
        Building a Sustainable Fitness Ecosystem on Solana.
      </motion.h2>

      <motion.p variants={item} className="text-lg text-foreground/90 max-w-3xl mx-auto">
        Treno turns fitness into a decentralized community arena, fostering long-term habits through Solana's efficient blockchain. Our model includes a 2% protocol fee on pots to fund ongoing development, ecosystem grants, and community rewards — ensuring growth and alignment with Solana's innovative spirit.
      </motion.p>

      <motion.div variants={item}>
        <a
          href="https://treno.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-primary-foreground transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            boxShadow: "0 0 30px hsla(145,100%,50%,0.3)",
          }}
        >
          <Rocket className="w-5 h-5" />
          Launch your first challenge at Treno.fun
        </a>
      </motion.div>

      <motion.p variants={item} className="text-xs text-muted-foreground mono-font">
        Committed to the Solana Monolith Hackathon — Scaling SocialFi with real utility.
      </motion.p>
    </motion.div>
  );
}
