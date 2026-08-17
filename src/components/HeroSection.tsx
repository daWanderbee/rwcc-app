'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen flex-col items-center justify-center bg-[#F2DABB] w-full pt-24 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Centered Hero Content with Desktop Max-Width */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Logo Unit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 sm:mb-8 lg:mb-10"
        >
          <Image
            src="/images/rwcc.png"
            alt="Restaurants Who Care Club by Chuk Logo"
            width={380}
            height={480}
            priority
            className="object-contain w-auto h-[200px] sm:h-[300px] md:h-[360px] lg:h-[400px] drop-shadow-xl transition-transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* Headline with CHUK Brand Color Accents */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#942A45] tracking-tight leading-[1.1] mb-5 font-['Karbon']"
        >
          Welcome to the{' '}
          <span className="text-[#ED544B] underline decoration-[#F3B343] decoration-wavy decoration-2">
            club.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-[#3A2A2F] leading-relaxed font-semibold max-w-3xl mb-8 lg:mb-12"
        >
          The{' '}
          <span className="text-[#942A45] font-black">Restaurants Who Care Club</span>{' '}
          recognises India&apos;s leading restaurants that serve on{' '}
          <span className="text-[#059669] font-bold">100% compostable tableware</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 w-full max-w-xl"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto font-black shadow-lg bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] hover:scale-105 active:scale-95 transition-all text-base sm:text-lg px-9 py-6"
          >
            <a href="#join-cta">
              <span>Join the Club</span>
              <ArrowRight className="w-5 h-5 ml-1.5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-black border-2 border-[#0096B1] text-[#0096B1] bg-[#F2DABB] hover:bg-[#0096B1] hover:text-[#F2DABB] hover:scale-105 active:scale-95 transition-all text-base sm:text-lg px-9 py-6"
          >
            <a href="#leaderboard">See the Leaderboard</a>
          </Button>
        </motion.div>

        {/* Kicker Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#F3B343]/20 border border-[#F3B343]/40"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#95CC2E]" />
          <p className="text-xs sm:text-sm lg:text-base font-bold text-[#942A45] tracking-wide">
            Who says you can&apos;t do good and be good at it?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
