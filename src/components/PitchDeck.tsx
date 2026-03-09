import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideIntro from "./slides/SlideIntro";
import SlideProblem from "./slides/SlideProblem";
import SlideHowItWorks from "./slides/SlideHowItWorks";
import SlideArchitecture from "./slides/SlideArchitecture";
import SlideSecurity from "./slides/SlideSecurity";
import SlideVision from "./slides/SlideVision";
import ProgressBar from "./ProgressBar";

const slides = [SlideIntro, SlideProblem, SlideHowItWorks, SlideArchitecture, SlideSecurity, SlideVision];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 800 : -800, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -800 : 800, opacity: 0 }),
};

export default function PitchDeck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    if (next < 0 || next >= slides.length) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const CurrentSlide = slides[index];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden select-none">
      {/* Background glow */}
      <div className="fixed inset-0 glow-radial pointer-events-none" />
      <div className="fixed inset-0 glow-radial-top pointer-events-none" />

      <ProgressBar current={index} total={slides.length} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-5xl"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="glass-card px-5 py-2.5 text-sm font-medium text-foreground disabled:opacity-30 hover:bg-secondary/50 transition-colors cursor-pointer disabled:cursor-default"
        >
          ← Prev
        </button>
        <span className="mono-font text-xs text-muted-foreground">
          {index + 1} / {slides.length}
        </span>
        <button
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1}
          className="glass-card px-5 py-2.5 text-sm font-medium text-foreground disabled:opacity-30 hover:bg-secondary/50 transition-colors cursor-pointer disabled:cursor-default"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
