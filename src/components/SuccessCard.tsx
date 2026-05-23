'use client';

import { motion } from 'framer-motion';
import { Check, Copy, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WaitlistEntry } from '@/types';
import { useCopyToClipboard } from '@/lib/hooks';

const PERSONALIZATION_MESSAGES = {
  Visionary: {
    morning: "Gaby, bienvenue parmi les visionnaires qui façonnent demain. 🚀",
    afternoon: "Les précurseurs comme vous redéfinissent le possible.",
    evening: "Votre place parmi les élites est confirmée.",
    night: "Même à cette heure, les visionnaires ne dorment pas.",
  },
  Builder: {
    morning: "Un builder de votre calibre était attendu. Bienvenue.",
    afternoon: "Continuez à construire. Nous avons tout prévu pour vous.",
    evening: "Votre éthique de travail nous inspire.",
    night: "Les builders travaillent sans relâche. Merci d'être l'un d'entre eux.",
  },
  Insider: {
    morning: "Vous êtes maintenant un Insider confirmé.",
    afternoon: "Un accès privilégié vous attend. Seuls les meilleurs l'obtiennent.",
    evening: "Votre statut vient d'être augmenté.",
    night: "Les Insiders dorment bien. Vous en êtes maintenant l'un.",
  },
  Pioneer: {
    morning: "Les pionniers façonnent l'avenir. Vous en êtes.",
    afternoon: "Votre engagement envers l'innovation est remarqué.",
    evening: "Les pionniers voient ce que les autres ne voient pas.",
    night: "Bienvenue parmi les rares élus qui tracent le chemin.",
  },
  Innovator: {
    morning: "Un innovateur arrive toujours au bon moment.",
    afternoon: "L'innovation sans compromis. C'est vous.",
    evening: "Votre place au sein de l'écosystème est sécurisée.",
    night: "Les innovateurs créent la nuit. Nous aussi.",
  },
};

export const SuccessCard = ({ entry }: { entry: WaitlistEntry }) => {
  const { copied, copy } = useCopyToClipboard();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
    if (hour < 12) timeOfDay = 'morning';
    else if (hour < 17) timeOfDay = 'afternoon';
    else if (hour < 21) timeOfDay = 'evening';
    else timeOfDay = 'night';

    setMessage(
      PERSONALIZATION_MESSAGES[entry.archetype][timeOfDay]
    );
  }, [entry.archetype]);

  const referralUrl = `https://nexus.ai?ref=${entry.referralCode}`;

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-cyan-400/20 p-8 overflow-hidden"
        animate={{
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.1)',
            '0 0 40px rgba(6, 182, 212, 0.2)',
            '0 0 20px rgba(6, 182, 212, 0.1)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative z-10">
          {/* Header with icon */}
          <motion.div
            className="flex items-center justify-center mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center">
              <Check className="w-6 h-6 text-slate-950" />
            </div>
          </motion.div>

          {/* Archetype badge */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300 text-xs font-medium">
              {entry.archetype} Status
            </span>
          </motion.div>

          {/* Personalized message */}
          <motion.p
            className="text-center text-slate-300 mb-6 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {message}
          </motion.p>

          {/* Position info */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-xs text-slate-500 mb-1">Votre position</div>
            <div className="text-3xl font-display font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              #{entry.position}
            </div>
          </motion.div>

          {/* Referral section */}
          <motion.div
            className="bg-slate-900/50 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs font-medium text-slate-400 mb-2">Lien de parrainage</div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={referralUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-xs text-cyan-300 font-mono focus:outline-none"
              />
              <motion.button
                onClick={() => copy(referralUrl)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 rounded transition-colors"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
              </motion.button>
            </div>
            {copied && (
              <motion.p
                className="text-xs text-cyan-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Copié!
              </motion.p>
            )}
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={() => copy(referralUrl)}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Share2 className="w-4 h-4" />
            Partager et gagner un accès prioritaire
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};