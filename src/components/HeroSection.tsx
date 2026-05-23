'use client';

import { motion } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{
          y: scrollY * 0.5,
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          y: scrollY * -0.3,
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Product name */}
        <motion.div
          variants={item}
          className="mb-6 flex justify-center"
        >
          <div className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-cyan-300">AI Workspace Redefined</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8"
        >
          <span className="block text-white mb-4">Votre second cerveau</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">pour Internet</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Une IA privée pensée pour les ambitieux. Assistée sans intrusion. Anticipée sans limites.
        </motion.p>

        {/* Form */}
        <motion.div variants={item} className="mb-16">
          <WaitlistForm />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400 mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>12,483 utilisateurs en attente</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <div>Accès prioritaire aux early adopters</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-cyan-400/50" />
      </motion.div>
    </div>
  );
};