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
            width={500}
            height={600}
            priority
            className="object-contain w-auto h-[280px] sm:h-[380px] md:h-[440px] lg:h-[500px] drop-shadow-xl transition-transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* Headline with CHUK Brand Color Accents */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#942A45] tracking-tight leading-[1.1] mb-5 font-['Karbon']"
        >
          Welcome to{' '}
          <span className="text-[#ED544B] underline decoration-[#F3B343] decoration-wavy decoration-2">
            the club.
          </span>
        </motion.h1>

        {/* Description — Single Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-[#942A45] leading-relaxed font-semibold max-w-3xl mb-8 lg:mb-12"
        >
          Recognising India&apos;s restaurants that serve on 100% compostable tableware.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl"
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
      </div>
    </section>
  );
}
