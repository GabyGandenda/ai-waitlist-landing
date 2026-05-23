export interface WaitlistEntry {
  id: string;
  email: string;
  timestamp: number;
  archetype: 'Visionary' | 'Builder' | 'Insider' | 'Pioneer' | 'Innovator';
  referralCode: string;
  referralCount: number;
  position: number;
}

export interface PersonalizationData {
  name: string;
  archetype: WaitlistEntry['archetype'];
  position: number;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  message: string;
}