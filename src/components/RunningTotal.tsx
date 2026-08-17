'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { NumberTicker } from '@/components/ui/number-ticker';
import { ClubCTA } from './WhatIsClub';

export default function RunningTotal() {
  const stats = [
    {
      value: 3.1,
      suffix: 'M',
      decimalPlaces: 1,
      title: 'Chuk Products in Service',
      label: 'Bagasse tableware holding meals across India, not single-use plastic.',
      color: '#F2DABB',
      accentColor: '#942A45',
      icon: ShieldCheck,
      badge: 'Tableware Impact',
    },
    {
      value: 22900,
      suffix: '',
      decimalPlaces: 0,
      title: 'Trees Planted Equivalent',
      label: 'Environmental equivalent of choosing rapid-renewable bagasse.',
      color: '#DFEFCB',
      accentColor: '#95CC2E',
      icon: Trees,
      badge: 'Tree Impact',
    },
    {
      value: 690,
      suffix: ' t',
      decimalPlaces: 0,
      title: 'CO₂ Emissions Avoided',
      label: 'Greenhouse gases kept out of the atmosphere vs fossil packaging.',
      color: '#33A8C3',
      accentColor: '#0096B1',
      icon: Leaf,
      badge: 'CO₂ Avoided',
    },
  ];

  return (
    <section
      id="running-total"
      className="relative z-10 w-full bg-[#ED544B] text-[#F2DABB] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section Label */}
        <Badge
          variant="sand"
          className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 px-4 py-1.5 shadow-md border-0 bg-[#F2DABB] text-[#942A45]"
        >
          Collective Impact Band
        </Badge>

        {/* Intro Line */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F2DABB] tracking-tight leading-tight max-w-5xl mb-14 sm:mb-20 lg:mb-28"
        >
          Add up every member on that board, and this is what the Club has done so far.
        </motion.h2>

        {/* Fluid, Open Editorial Metric Display */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mb-14 sm:mb-20 lg:mb-28 relative">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center px-4 sm:px-8 lg:px-12 xl:px-16 ${
                  index !== 2 ? 'md:border-r md:border-[#F2DABB]/25' : ''
                }`}
              >
                {/* Top Pill Icon */}
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    style={{ backgroundColor: `${stat.accentColor}30`, color: stat.color }}
                    className="p-2.5 sm:p-3 rounded-full border border-current shadow-xs"
                  >
                    <IconComponent className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider text-[#F2DABB]/90">
                    {stat.badge}
                  </span>
                </div>

                {/* Giant Metric Value */}
                <div className="mb-4">
                  <span
                    style={{ color: stat.color }}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight leading-none block"
                  >
                    <NumberTicker
                      value={stat.value}
                      suffix={stat.suffix}
                      decimalPlaces={stat.decimalPlaces}
                    />
                  </span>
                </div>

                {/* Metric Title */}
                <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-[#F2DABB] mb-3 leading-tight">
                  {stat.title}
                </h4>

                {/* Metric Label / Subtext */}
                <p className="text-xs sm:text-base lg:text-lg text-[#F2DABB]/85 font-medium leading-relaxed max-w-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Connector Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#F2DABB] font-black leading-relaxed max-w-4xl mb-14 text-center"
        >
          Every one of those numbers was scored by a member restaurant, order by order. Switch your tableware, and the next one is yours.
        </motion.p>

        <div id="join" className="scroll-mt-24">
          <ClubCTA />
        </div>
      </div>
    </section>
  );
}
