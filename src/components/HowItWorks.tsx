'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Shield, Box } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    num: '01',
    title: 'We score your switch',
    icon: Calculator,
    color: '#33A8C3',
    imageBg: 'bg-[#D8EFF5]',
    imageBorder: 'border-[#33A8C3]/30',
    image: '/images/step1-scorecard.jpg',
    imageFit: 'object-cover',
    body: 'From your actual or projected Chuk order volume, we work out three numbers: the products you put into service, the trees planted equivalent of choosing bagasse over fossil-based packaging, and the CO₂ you kept out of the air.',
    tag: 'Automated Calculation',
    tagVariant: 'teal' as const,
  },
  {
    num: '02',
    title: 'We build your recognition block',
    icon: Shield,
    color: '#F3B343',
    imageBg: 'bg-[#FCE8AC]',
    imageBorder: 'border-[#F3B343]/40',
    image: '/images/RWCC-unit.png',
    imageFit: 'object-contain',
    body: 'Your numbers and your rank, printed and sized for the front of house. Refreshed each season, so your display climbs when you do.',
    tag: 'Seasonal Refresh',
    tagVariant: 'gold' as const,
  },
  {
    num: '03',
    title: 'We send your welcome kit',
    icon: Box,
    color: '#ED544B',
    imageBg: 'bg-[#FDD8D5]',
    imageBorder: 'border-[#ED544B]/30',
    image: '/images/step3-welcome-kit-flatlay.jpg',
    imageFit: 'object-cover',
    body: 'Seven pieces that put your impact on the table, at the door, on the wall and on your feed. Included free for every Chuk customer.',
    tag: '7 Welcome Kit Pieces',
    tagVariant: 'coral' as const,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge
            variant="default"
            className="text-xs sm:text-sm font-black uppercase tracking-widest mb-4 px-4 py-1.5 bg-[#942A45] text-[#F2DABB]"
          >
            How It Works
          </Badge>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#942A45] tracking-tight mb-3"
          >
            Simple to join.{' '}
            <span className="text-[#ED544B]">Impossible to ignore.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F3B343] mb-4"
          >
            From switch to spot in three steps.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl text-[#3A2A2F] font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Restaurants that switch to compostable shouldn&apos;t have to explain the impact themselves. The Club does that work for you: three numbers, calculated from your actual Chuk order volume, displayed wherever your customers look.
          </motion.p>
        </div>

        {/* 3-Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 lg:gap-14 w-full relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col border-t-3 pt-6 lg:pt-8 group"
                style={{ borderColor: step.color }}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5 lg:mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: step.color }}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full text-[#F2DABB] font-black text-sm sm:text-base lg:text-lg flex items-center justify-center shadow-md"
                    >
                      {step.num}
                    </span>
                    <Badge variant={step.tagVariant} className="text-[11px] lg:text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {step.tag}
                    </Badge>
                  </div>

                  <div
                    style={{ backgroundColor: `${step.color}25`, color: step.color }}
                    className="p-2.5 lg:p-3 rounded-xl border border-current shadow-xs"
                  >
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>

                {/* Visual Preview Box */}
                <div className={`relative w-full h-52 sm:h-60 lg:h-72 rounded-2xl overflow-hidden mb-6 ${step.imageBg} border-2 ${step.imageBorder} flex items-center justify-center p-2 transition-transform group-hover:scale-105 duration-300 shadow-md`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className={`${step.imageFit} rounded-xl`}
                  />
                </div>

                {/* Step Title */}
                <h3 className="text-xl lg:text-2xl font-black text-[#942A45] tracking-tight mb-3 leading-snug">
                  Step {step.num} — {step.title}
                </h3>

                {/* Step Body */}
                <p className="text-sm sm:text-base lg:text-lg text-[#3A2A2F] font-medium leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
