'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { getWaitlistCount } from '@/lib/store';

export const WaitlistCounter = () => {
  const [ref, isVisible] = useScrollReveal();
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    setCount(getWaitlistCount());
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = Math.ceil(count / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(interval);
      } else {
        setDisplayCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, count]);

  // Simulate new entries
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/50 via-slate-850/30 to-slate-900/50 px-8 py-12 backdrop-blur-sm max-w-2xl w-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-3xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10 text-center">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">En temps réel</span>
          </motion.div>

          <motion.div
            className="text-5xl sm:text-6xl font-display font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            key={displayCount}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayCount.toLocaleString()}
          </motion.div>

          <p className="text-slate-400 text-lg">
            utilisateurs rejoignent la révolution
          </p>
        </div>
      </div>
    </motion.section>
  );
};