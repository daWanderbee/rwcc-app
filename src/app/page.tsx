import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatIsClub from '@/components/WhatIsClub';
import ReelsSection from '@/components/ReelsSection';
import Leaderboard from '@/components/Leaderboard';
import HowImpactIsCalculated from '@/components/HowImpactIsCalculated';
import YourSpot from '@/components/YourSpot';
import RunningTotal from '@/components/RunningTotal';

import TheKit from '@/components/TheKit';
import FaqSection from '@/components/FaqSection';
import JoinCtaSection from '@/components/JoinCtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F2DABB] text-[#942A45] font-['Karbon'] selection:bg-[#942A45] selection:text-[#F2DABB]">
      <Navbar />
      <HeroSection />
      <WhatIsClub />
      <ReelsSection />
      <Leaderboard />
      <HowImpactIsCalculated />
      <YourSpot />
      <RunningTotal />

      <TheKit />
      <FaqSection />
      <JoinCtaSection />
      <Footer />
    </main>
  );
}
