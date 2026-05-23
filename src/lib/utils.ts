export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const generateReferralCode = (email: string): string => {
  const timestamp = Date.now();
  const hash = email
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `NEXUS-${timestamp.toString(36).toUpperCase()}-${hash.toString(36).toUpperCase()}`;
};

export const getRandomArchetype = (): string => {
  const archetypes = ['Visionary', 'Builder', 'Insider', 'Pioneer', 'Innovator'];
  return archetypes[Math.floor(Math.random() * archetypes.length)];
};

export const getTimeOfDay = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  if (hour < 21) return 'evening';
  return 'night';
};

export const extractNameFromEmail = (email: string): string => {
  return email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
};

export const formatWaitlistCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};