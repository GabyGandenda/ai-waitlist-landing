import { WaitlistEntry } from '@/types';

let waitlistData: Map<string, WaitlistEntry> = new Map();
let waitlistCounter = Math.floor(Math.random() * 50000) + 12000;

export const addToWaitlist = (email: string, referralCode?: string): WaitlistEntry => {
  const id = crypto.getRandomValues(new Uint8Array(8)).toString();
  const archetype = ['Visionary', 'Builder', 'Insider', 'Pioneer', 'Innovator'][
    Math.floor(Math.random() * 5)
  ] as any;
  const position = ++waitlistCounter;

  const entry: WaitlistEntry = {
    id,
    email,
    timestamp: Date.now(),
    archetype,
    referralCode: `REF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    referralCount: 0,
    position,
  };

  waitlistData.set(email, entry);
  return entry;
};

export const getWaitlistEntry = (email: string): WaitlistEntry | undefined => {
  return waitlistData.get(email);
};

export const getWaitlistCount = (): number => {
  return waitlistCounter;
};

export const isEmailInWaitlist = (email: string): boolean => {
  return waitlistData.has(email);
};

export const incrementReferralCount = (email: string): void => {
  const entry = waitlistData.get(email);
  if (entry) {
    entry.referralCount++;
  }
};

export const getReferralReward = (referralCount: number): string => {
  if (referralCount >= 5) return 'VIP Early Access';
  if (referralCount >= 3) return 'Priority Tier';
  if (referralCount >= 1) return 'First Wave Access';
  return 'Waiting...';
};