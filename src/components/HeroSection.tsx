'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen flex-col items-center justify-center bg-[#F2DABB] w-full pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Desktop Layout (lg:grid): Content & CTAs on Left, Logo on Right */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-10 xl:gap-16">
          
          {/* Left Column (7 cols): Text, Headline & Action Buttons */}
          <div className="col-span-7 flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl xl:text-7xl 2xl:text-8xl font-black text-[#942A45] tracking-tight leading-[1.08] mb-6 font-['Karbon']"
            >
              Welcome to{' '}
              <span className="text-[#942A45] underline decoration-[#F3B343] decoration-wavy decoration-4">
                the club.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl xl:text-2xl 2xl:text-3xl text-[#942A45] leading-relaxed font-bold max-w-2xl mb-10"
            >
              Recognising India&apos;s restaurants that serve on 100% compostable tableware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-5 w-auto"
            >
              <Button
                asChild
                size="lg"
                className="font-black shadow-xl bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] hover:scale-105 active:scale-95 transition-all text-lg px-9 py-6 rounded-full"
              >
                <a href="#join-cta" className="flex items-center gap-2">
                  <span>Join the Club</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-black border-2 border-[#942A45] text-[#942A45] bg-[#F2DABB] hover:bg-[#942A45] hover:text-[#F2DABB] hover:scale-105 active:scale-95 transition-all text-lg px-9 py-6 rounded-full"
              >
                <a href="#leaderboard" className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#942A45]" />
                  <span>See the Leaderboard</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Large RWCC Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full h-[460px] xl:h-[520px] 2xl:h-[560px] transition-transform hover:scale-105 duration-500">
              <Image
                src="/images/rwcc.png"
                alt="Restaurants Who Care Club by CHUK"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Layout: Centered Stack with Big Logo on Top */}
        <div className="flex lg:hidden flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[360px] sm:h-[420px] mb-6 flex items-center justify-center"
          >
            <Image
              src="/images/rwcc.png"
              alt="Restaurants Who Care Club by CHUK"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-[#942A45] leading-relaxed font-bold max-w-md mb-8 px-2"
          >
            Recognising India&apos;s restaurants that serve on 100% compostable tableware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-sm"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-black shadow-lg bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] text-base px-8 py-5 rounded-full"
            >
              <a href="#join-cta" className="flex items-center justify-center gap-2">
                <span>Join the Club</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-black border-2 border-[#942A45] text-[#942A45] bg-[#F2DABB] hover:bg-[#942A45] hover:text-[#F2DABB] text-base px-8 py-5 rounded-full"
            >
              <a href="#leaderboard" className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-[#942A45]" />
                <span>See the Leaderboard</span>
              </a>
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
