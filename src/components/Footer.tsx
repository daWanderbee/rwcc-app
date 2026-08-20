'use client';

import React from 'react';
import Image from 'next/image';
import { WavyDivider } from '@/components/ui/wavy-divider';

export default function Footer() {
  return (
    <footer className="w-full bg-[#4A1525] text-[#F2DABB] font-['Karbon'] relative z-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16">
      <WavyDivider fill="#4A1525" variant={3} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 text-center md:text-left">
        {/* Left: Logo & Tagline */}
        <div className="flex items-center gap-4 lg:gap-5">
          <Image
            src="/images/rwcc.png"
            alt="RWCC Logo Footer"
            width={56}
            height={56}
            className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain"
          />
          <div>
            <h4 className="font-black text-lg lg:text-xl xl:text-2xl text-[#F2DABB] tracking-tight">
              RESTAURANTS WHO CARE CLUB
            </h4>
            <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#F2DABB]/75">
              By CHUK
            </p>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 text-sm sm:text-base lg:text-lg font-bold text-[#F2DABB]/85">
          <a href="#about" className="hover:text-[#F2DABB] transition-colors">
            About
          </a>
          <a href="#leaderboard" className="hover:text-[#F2DABB] transition-colors">
            Leaderboard
          </a>
          <a href="#your-spot" className="hover:text-[#F2DABB] transition-colors">
            Your Spot
          </a>
          <a href="#how-it-works" className="hover:text-[#F2DABB] transition-colors">
            How It Works
          </a>
          <a href="#the-kit" className="hover:text-[#F2DABB] transition-colors">
            The Kit
          </a>
          <a href="#faq" className="hover:text-[#F2DABB] transition-colors">
            FAQ
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs sm:text-sm lg:text-base font-bold text-[#F2DABB]/70">
          CHUK · Restaurants Who Care · 2026
        </div>
      </div>
    </footer>
  );
}
