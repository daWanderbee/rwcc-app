'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen flex-col items-center justify-center bg-[#F2DABB] w-full pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* 2-Column Desktop Grid / Stacked Mobile */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16 relative z-10">
        
        {/* Left Column (7 cols on Desktop): Text, Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Headline with CHUK Brand Color Accents */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-[#942A45] tracking-tight leading-[1.08] mb-5 sm:mb-6 font-['Karbon']"
          >
            Welcome to{' '}
            <span className="text-[#ED544B] underline decoration-[#F3B343] decoration-wavy decoration-2 sm:decoration-4">
              the club.
            </span>
          </motion.h1>

          {/* Description — Single Clear Line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-[#942A45] leading-relaxed font-semibold max-w-2xl mb-8 sm:mb-10"
          >
            Recognising India&apos;s restaurants that serve on 100% compostable tableware.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-black shadow-xl bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] hover:scale-105 active:scale-95 transition-all text-base sm:text-lg px-9 py-6 rounded-full"
            >
              <a href="#join-cta" className="flex items-center justify-center gap-2">
                <span>Join the Club</span>
                <ArrowRight className="w-5 h-5 ml-0.5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-black border-2 border-[#0096B1] text-[#0096B1] bg-[#F2DABB] hover:bg-[#0096B1] hover:text-[#F2DABB] hover:scale-105 active:scale-95 transition-all text-base sm:text-lg px-9 py-6 rounded-full"
            >
              <a href="#leaderboard" className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-[#0096B1]" />
                <span>See the Leaderboard</span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column (5 cols on Desktop): Large 3D RWCC Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2"
        >
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/rwcc.png"
              alt="Restaurants Who Care Club Seal"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
