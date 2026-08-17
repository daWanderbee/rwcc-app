'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#4A1525] text-[#F2DABB] font-['Karbon'] relative z-10 py-10 sm:py-14 px-4 sm:px-8 lg:px-12 border-t-2 border-[#F2DABB]/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Logo & Tagline */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/rwcc.png"
            alt="RWCC Logo Footer"
            width={52}
            height={52}
            className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
          />
          <div>
            <h4 className="font-black text-lg lg:text-xl text-[#F2DABB] tracking-tight">
              RESTAURANTS WHO CARE CLUB
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#F2DABB]/75">
              CHUK · Eat Safe · A Pakka Limited Offering
            </p>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-sm sm:text-base font-bold text-[#F2DABB]/85">
          <a href="#about" className="hover:text-[#F3B343] transition-colors">
            About
          </a>
          <a href="#leaderboard" className="hover:text-[#F3B343] transition-colors">
            Leaderboard
          </a>
          <a href="#your-spot" className="hover:text-[#F3B343] transition-colors">
            Your Spot
          </a>
          <a href="#how-it-works" className="hover:text-[#F3B343] transition-colors">
            How It Works
          </a>
          <a href="#the-kit" className="hover:text-[#F3B343] transition-colors">
            The Kit
          </a>
          <a href="#faq" className="hover:text-[#F3B343] transition-colors">
            FAQ
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs sm:text-sm font-bold text-[#F2DABB]/70">
          CHUK · Restaurants Who Care · 2026
        </div>
      </div>
    </footer>
  );
}
