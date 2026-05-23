'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { addToWaitlist, isEmailInWaitlist } from '@/lib/store';
import { SuccessCard } from './SuccessCard';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState<any>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      setState('error');
      setTimeout(() => setState('idle'), 3000);
      return;
    }

    if (isEmailInWaitlist(email)) {
      setError('Cette email est déjà inscrite');
      setState('error');
      setTimeout(() => setState('idle'), 3000);
      return;
    }

    setState('loading');
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const entry = addToWaitlist(email);
    setSuccessData(entry);
    setState('success');
    setEmail('');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {state === 'success' && successData ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <SuccessCard entry={successData} />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === 'error') setState('idle');
                }}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 pl-10 rounded-lg bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                disabled={state === 'loading'}
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            </div>

            <motion.button
              type="submit"
              disabled={state === 'loading'}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 transition-all"
              whileHover={state !== 'loading' ? { scale: 1.02 } : {}}
              whileTap={state !== 'loading' ? { scale: 0.98 } : {}}
            >
              {state === 'loading' ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>En cours...</span>
                </div>
              ) : (
                'Rejoindre la waitlist'
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Error message */}
      <AnimatePresence>
        {state === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 text-red-400 text-sm max-w-md mx-auto"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};