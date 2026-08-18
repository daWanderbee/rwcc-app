'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Users, KeyRound, Gift, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

export default function WhatIsClub() {
  const bentoFeatures = [
    {
      Icon: HelpCircle,
      name: 'What is the Club?',
      description:
        "CHUK's recognition programme for restaurants that serve on 100% compostable tableware.",
      href: 'https://chuk.in',
      cta: 'Discover the Movement',
      badge: 'Official Programme',
      accentColor: '#F3B343', // Sunny Gold
      className: 'col-span-1 md:col-span-2',
      background: (
        <div className="absolute right-3 bottom-2 sm:right-6 sm:bottom-4 w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 pointer-events-none transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/rwcc-framed-plaque.jpg"
            alt="RWCC Recognition Plaque Unit"
            fill
            className="object-contain drop-shadow-xl rounded-xl"
          />
        </div>
      ),
    },
    {
      Icon: Users,
      name: 'Who is in it?',
      description:
        'Restaurants, QSR chains and cloud kitchens across India — ranked publicly, every season.',
      href: '#leaderboard',
      cta: 'View Leaderboard',
      badge: 'India-Wide Network',
      accentColor: '#33A8C3', // Turquoise Sky
      className: 'col-span-1 md:col-span-1',
      background: (
        <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-3 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 pointer-events-none transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/entering-sticker.png"
            alt="Entering sticker glass decal"
            fill
            className="object-contain drop-shadow-md"
          />
        </div>
      ),
    },
    {
      Icon: KeyRound,
      name: 'How do you join?',
      description:
        "Buy your tableware from CHUK. That's the whole entry fee. Zero subscription costs.",
      href: '#join-cta',
      cta: 'Claim Your Spot',
      badge: 'Free Entry',
      accentColor: '#ED544B', // Sunset Coral
      className: 'col-span-1 md:col-span-1',
      background: (
        <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-3 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 pointer-events-none transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/tent-card.png"
            alt="Table tent card"
            fill
            className="object-contain drop-shadow-md"
          />
        </div>
      ),
    },
    {
      Icon: Gift,
      name: 'What do you get?',
      description:
        'Your verified impact numbers, a spot on the leaderboard, and a free 7-piece welcome kit for your front of house.',
      href: '#the-kit',
      cta: 'Explore All 7 Pieces',
      badge: '7-Piece Kit Included',
      accentColor: '#95CC2E', // Leaf Lime Green
      className: 'col-span-1 md:col-span-2',
      background: (
        <div className="absolute right-3 bottom-2 sm:right-6 sm:bottom-4 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 pointer-events-none transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/certifciate.png"
            alt="Framed wall certificate"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-[#942A45] text-[#F2DABB] font-['Karbon'] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-8 sm:-mt-12 lg:-mt-16 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-36 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-2xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-14 sm:mb-18 lg:mb-20 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F2DABB] tracking-tight mb-4"
          >
            What is the{' '}
            <span className="text-[#F3B343]">Club?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl text-[#F2DABB]/90 font-medium max-w-2xl leading-relaxed"
          >
            A community of forward-thinking restaurants making sustainable dining visible to every guest across India.
          </motion.p>
        </div>

        {/* Magic UI Bento Grid with Transparent Cutout PNGs */}
        <BentoGrid className="w-full mb-14 sm:mb-18 lg:mb-20">
          {bentoFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* CTA */}
        <ClubCTA />
      </div>
    </section>
  );
}

export function ClubCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <Button
        asChild
        size="lg"
        className="rounded-full bg-[#F3B343] text-[#942A45] font-black text-sm sm:text-base lg:text-lg shadow-xl hover:bg-[#E5A432] hover:scale-105 active:scale-[0.98] transition-all px-10 py-6"
      >
        <a href="#join-cta" className="flex items-center gap-2">
          <span>Buy from CHUK and Join the Club</span>
          <ArrowRight className="w-5 h-5 text-[#ED544B]" />
        </a>
      </Button>
      <p className="mt-3 text-xs sm:text-sm lg:text-base font-semibold text-[#F2DABB]/80">
        Free for every CHUK customer · hello@chuk.in · +91-78000-56200
      </p>
    </motion.div>
  );
}
