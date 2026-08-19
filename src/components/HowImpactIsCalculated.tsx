'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, Trees, ShieldCheck, Sparkles } from 'lucide-react';
import { StickyScroll, StickyScrollContentItem } from '@/components/ui/sticky-scroll-reveal';

export default function HowImpactIsCalculated() {
  const stickyContent: StickyScrollContentItem[] = [
    {
      num: '01',
      title: 'Every material has a carbon cost.',
      description:
        'Each tableware material has a measured greenhouse gas cost per gram. Bagasse sits at the low end. Your impact is the difference between Chuk\'s carbon cost and the material you replaced.',
      icon: Scale,
      color: '#ED544B',
      tag: 'Material Carbon Cost',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl">
            <Image
              src="/images/user_impact_kit_closed.png"
              alt="Restaurants Who Care Club Box"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Your volume makes that difference real.',
      description:
        'One plate is a small saving. Multiplied across every meal, every outlet, every season — it becomes significant.',
      icon: TrendingUp,
      color: '#33A8C3',
      tag: 'Volume Multiplier',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl">
            <Image
              src="/images/user_impact_plaque.png"
              alt="RWCC Framed Impact Plaque"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Trees make it tangible.',
      description:
        'A mature tree absorbs a known amount of CO₂ each year. Your Trees Saved figure is your total CO₂ avoided, converted into that equivalent.',
      icon: Trees,
      color: '#95CC2E',
      tag: 'Tree Sequestration',
      content: (
        <div className="w-full h-full bg-[#F2DABB] text-[#3A2A2F] rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-[#95CC2E]">
          <div className="p-4 bg-[#95CC2E] text-[#3A2A2F] rounded-full mb-3 shadow-md">
            <Trees className="w-10 h-10" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-[#942A45] mb-1">
            Direct Mathematical Metric
          </span>
          <h4 className="text-2xl sm:text-3xl font-black text-[#942A45] mb-2">
            1 Tree ≈ 20 kg CO₂ / Year
          </h4>
          <p className="text-xs sm:text-sm text-[#3A2A2F]/85 font-bold max-w-xs leading-relaxed">
            Dividing total avoided emissions by annual mature tree absorption yields your verified Trees Saved score.
          </p>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Why verified order volume?',
      description:
        'Because a badge only means something if it\'s real. Your ranking comes from Chuk\'s own order records, not self-reported estimates.',
      icon: ShieldCheck,
      color: '#F3B343',
      tag: 'Kitchen Verified',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl">
            <Image
              src="/images/user_impact_kit_open_nobg.png"
              alt="RWCC Welcome Kit Flatlay"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="how-it-works-impact"
      className="relative z-10 w-full bg-[#942A45] text-[#F2DABB] font-['Karbon'] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-[#F2DABB]/20 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F2DABB] tracking-tight mb-4"
          >
            How Your Impact Is Calculated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl font-medium text-[#F2DABB]/90 leading-relaxed"
          >
            Every season, we convert your verified Chuk order volume into three numbers — <strong className="text-[#95CC2E]">trees</strong>, <strong className="text-[#33A8C3]">CO₂</strong>, and <strong className="text-[#F3B343]">units served</strong> — using published emissions data for each tableware material.
          </motion.p>
        </div>

        {/* Aceternity UI Sticky Scroll Reveal */}
        <StickyScroll content={stickyContent} />
      </div>
    </section>
  );
}
