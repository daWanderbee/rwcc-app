'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, Leaf, Package, ArrowDown } from 'lucide-react';
import { StickyScroll, StickyScrollContentItem } from '@/components/ui/sticky-scroll-reveal';
import { WavyDivider } from '@/components/ui/wavy-divider';

export default function HowImpactIsCalculated() {
  const stickyContent: StickyScrollContentItem[] = [
    {
      num: '01',
      title: 'Meals served plastic-free',
      description:
        'One plate, bowl, container, or tray = one meal — counted straight from your orders, no double-counting, no rounding up.',
      icon: Utensils,
      color: '#33A8C3',
      tag: 'Headline Metric',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl overflow-hidden rounded-2xl border-2 border-[#F2DABB]/20">
            <Image
              src="/images/explain_meal_tray.png"
              alt="CHUK 4-Compartment Meal Tray"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Carbon avoided',
      description:
        'Measured against the packaging you used before you switched. The number only moves when the switch is real.',
      icon: Leaf,
      color: '#95CC2E',
      tag: 'Net Emission Impact',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl overflow-hidden rounded-2xl border-2 border-[#F2DABB]/20">
            <Image
              src="/images/explain_square_bowl.png"
              alt="CHUK Square Bowl with Wooden Fork"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Volume of Chuk Products Used (Tonnes)',
      description:
        'Every tonne of Chuk compostable tableware you\'ve taken on, tallied straight from your orders. Stacked over deliveries and months — into a verifiable number that shows exactly how much plastic your kitchen has displaced.',
      icon: Package,
      color: '#F3B343',
      tag: 'Volume in Tonnes',
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-full h-64 sm:h-72 drop-shadow-2xl overflow-hidden rounded-2xl border-2 border-[#F2DABB]/20">
            <Image
              src="/images/explain_delivery_container.png"
              alt="CHUK Delivery Food Container with Lids"
              fill
              className="object-cover rounded-2xl"
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
      className="relative z-10 w-full bg-[#942A45] text-[#F2DABB] font-['Karbon'] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-2xl scroll-mt-20"
    >
      <WavyDivider fill="#942A45" variant={2} />
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F2DABB] tracking-tight mb-3"
          >
            How Your Impact Is Calculated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xl sm:text-2xl font-black text-[#F2DABB] mb-3"
          >
            Meals, carbon, and tableware used in tonnes — verified directly from your orders.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg font-medium text-[#F2DABB]/90 leading-relaxed"
          >
            Every season, we convert your verified Chuk order volume into three headline numbers — <strong className="text-[#33A8C3]">meals served plastic-free</strong>, <strong className="text-[#95CC2E]">carbon avoided</strong>, and <strong className="text-[#F3B343]">volume of Chuk products used in tonnes</strong>.
          </motion.p>
        </div>

        {/* Aceternity UI Sticky Scroll Reveal */}
        <StickyScroll content={stickyContent} />

        {/* Next Section Anchor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 sm:mt-18 text-center"
        >
          <a
            href="#your-spot"
            className="inline-flex items-center gap-2.5 font-black text-sm sm:text-base text-[#942A45] bg-[#F2DABB] hover:bg-[#FFF2E0] px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Claim Your Spot on the Board</span>
            <ArrowDown className="w-4 h-4 text-[#942A45]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
