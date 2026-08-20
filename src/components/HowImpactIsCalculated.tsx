'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, Leaf, Package, Trophy, MapPin } from 'lucide-react';
import { StickyScroll, StickyScrollContentItem } from '@/components/ui/sticky-scroll-reveal';

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
        'Measured against the packaging you used before you switched. The number only moves when the switch is real. [VERIFY CLAIM: methodology needed before publish]',
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
      title: 'Volume of Chuk Products Used (CBM)',
      description:
        'Every cubic metre of Chuk product you\'ve taken on, tallied straight from your orders. Small crates per delivery, stacked over months — into a number that shows exactly how far you\'ve moved.',
      icon: Package,
      color: '#F3B343',
      tag: 'Volume in CBM',
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
            Meals, carbon, and volume used (CBM) — verified directly from your orders.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg font-medium text-[#F2DABB]/90 leading-relaxed"
          >
            Every season, we convert your verified Chuk order volume into three headline numbers — <strong className="text-[#33A8C3]">meals served plastic-free</strong>, <strong className="text-[#95CC2E]">carbon avoided</strong>, and <strong className="text-[#F3B343]">volume of Chuk products used (CBM)</strong>.
          </motion.p>
        </div>

        {/* Aceternity UI Sticky Scroll Reveal */}
        <StickyScroll content={stickyContent} />

        {/* Closing Callout Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-20 w-full max-w-4xl bg-[#7B2239]/80 border-2 border-[#F3B343]/40 rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-6 h-6 text-[#F2DABB]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#F2DABB]">
              Dual Recognition System
            </span>
            <MapPin className="w-6 h-6 text-[#942A45]" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-[#F2DABB] mb-3 leading-tight">
            Two leaderboards. One for the country. One for your city.
          </h3>

          <p className="text-sm sm:text-lg font-medium text-[#F2DABB]/90 leading-relaxed max-w-2xl">
            The national rank is wide open. The city rank is the one your regulars would actually notice — and the one a kitchen your size can genuinely lead.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
