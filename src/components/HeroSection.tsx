'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen flex-col items-center justify-center bg-[#F2DABB] w-full pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Centered Hero with Large RWCC Logo */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Large RWCC Logo Unit (Significantly bigger on Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[440px] sm:h-[520px] md:h-[580px] lg:h-[640px] xl:h-[700px] mb-6 sm:mb-8 transition-transform hover:scale-105 duration-500 flex items-center justify-center"
        >
          <Image
            src="/images/rwcc.png"
            alt="Restaurants Who Care Club by CHUK"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-2xl lg:text-3xl text-[#942A45] leading-relaxed font-bold max-w-2xl mb-8 sm:mb-10 px-2"
        >
          Recognising India&apos;s restaurants that serve on 100% compostable tableware.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
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
    </section>
  );
}
