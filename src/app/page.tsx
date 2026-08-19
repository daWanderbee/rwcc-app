import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatIsClub from '@/components/WhatIsClub';
import ReelsSection from '@/components/ReelsSection';
import HowImpactIsCalculated from '@/components/HowImpactIsCalculated';
import Leaderboard from '@/components/Leaderboard';
import YourSpot from '@/components/YourSpot';
import RunningTotal from '@/components/RunningTotal';

import TheKit from '@/components/TheKit';
import FaqSection from '@/components/FaqSection';
import JoinCtaSection from '@/components/JoinCtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] selection:bg-[#942A45] selection:text-[#F2DABB]">
      <Navbar />
      <HeroSection />
      <WhatIsClub />
      <ReelsSection />
      <HowImpactIsCalculated />
      <Leaderboard />
      <YourSpot />
      <RunningTotal />

      <TheKit />
      <FaqSection />
      <JoinCtaSection />
      <Footer />
    </main>
  );
}
