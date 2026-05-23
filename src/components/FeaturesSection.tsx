'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Shield } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks';

const features = [
  {
    icon: Brain,
    title: 'Mémoire IA persistante',
    description: 'Votre IA apprend de chaque interaction, créant une intelligence uniquement vôtre.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Workflows autonomes',
    description: 'Automatisez vos tâches complexes. Votre assistant n\'arrête jamais de travailler.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Intelligence contextuelle',
    description: 'Chaque réponse est adaptée à votre contexte unique. Aucune donnée partagée.',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-8 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <feature.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Border animation */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 group-hover:blur-sm`}
        initial={false}
      />
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4 text-white">
          Conçu pour les ambitieux
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto">
          Une IA qui comprend, anticipe et agit. Sans limites, sans compromis.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};