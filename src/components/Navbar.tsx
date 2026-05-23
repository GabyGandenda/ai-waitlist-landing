'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          className="text-2xl font-display font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          NEXUS
        </motion.div>
        <div className="text-sm text-slate-400">The future is private</div>
      </div>
    </motion.nav>
  );
};