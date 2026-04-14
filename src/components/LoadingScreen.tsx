import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden"
        // High-energy snap zoom exit
        exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Aggressive Neon Yellow/Amber Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[450px] h-[450px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, rgba(0,0,0,0) 65%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
          {/* Main Title Animation - Stacked and Punchy */}
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-widest text-zinc-100 uppercase -mb-2">
              High On
            </h1>
            <h1 
              className="font-display text-6xl sm:text-8xl font-black tracking-tighter uppercase"
              style={{ 
                color: "#eab308", 
                textShadow: "0 10px 30px rgba(234, 179, 8, 0.4)" 
              }}
            >
              Burgers
            </h1>
          </motion.div>

          {/* Heavy Progress Container */}
          <div className="w-full flex flex-col items-center">
            {/* Bold Loading Bar */}
            <motion.div
              className="w-64 sm:w-80 h-2 sm:h-3 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #ca8a04, #eab308, #fef08a)",
                  boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>

            {/* Glowing Percentage Counter */}
            <motion.div 
              className="mt-4 text-[#fef08a] text-sm sm:text-base font-mono font-bold tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ textShadow: "0 0 10px rgba(234, 179, 8, 0.5)" }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-[10px] sm:text-xs tracking-[0.3em] text-zinc-500 font-bold uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Premium Quality • Satya Niketan
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;