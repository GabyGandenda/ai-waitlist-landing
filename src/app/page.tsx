import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { WaitlistCounter } from '@/components/WaitlistCounter';
import { SocialProof } from '@/components/SocialProof';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <WaitlistCounter />
      <FeaturesSection />
      <SocialProof />
      <CTASection />
      
      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm z-10">
        <p>© 2026 NEXUS. All rights reserved. The future is private.</p>
      </footer>
    </main>
  );
}