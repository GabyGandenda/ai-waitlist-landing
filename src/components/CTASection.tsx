'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/hooks';
import { ArrowRight } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export const CTASection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-white mb-6"
        >
          Prêt à rejoindre les pionniers?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-400 mb-12"
        >
          Rejoignez des milliers de visionnaires qui transforment leur rapport à l'IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </motion.section>
  );
};