'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/hooks';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Le futur du travail c'est ici. Enfin une IA qui écoute vraiment.",
    author: "Alexandra Chen",
    role: "Product Designer",
  },
  {
    quote: "Cela change littéralement ma productivité. C'est magique.",
    author: "Marcus Rivera",
    role: "Entrepreneur",
  },
  {
    quote: "L'intimité des données + l'intelligence IA = le Graal.",
    author: "Dr. Sophie Lefevre",
    role: "Researcher",
  },
];

export const SocialProof = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
          Adopté par les meilleurs
        </h2>
        <p className="text-slate-400">Les leaders du web et de l'innovation nous font confiance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-xl bg-slate-900/50 border border-slate-800 p-6 hover:border-cyan-400/30 transition-colors"
          >
            <Quote className="w-5 h-5 text-cyan-400/40 mb-4" />
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="text-white font-medium text-sm">{testimonial.author}</p>
              <p className="text-slate-500 text-xs">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};