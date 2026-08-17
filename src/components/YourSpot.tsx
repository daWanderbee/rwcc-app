'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trees, Leaf, CheckCircle2, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NumberTicker } from '@/components/ui/number-ticker';

export default function YourSpot() {
  const [customName, setCustomName] = useState('Green Leaf Kitchen');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section
      id="your-spot"
      className="relative z-10 w-full bg-[#942A45] text-[#F2DABB] font-['Karbon'] py-12 sm:py-20 lg:py-28 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <Badge
            variant="sand"
            className="gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm text-[#942A45] bg-[#F2DABB]"
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#942A45]" />
            <span>Your Spot · Member Recognition Block</span>
          </Badge>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-5xl md:text-6xl font-black text-[#F2DABB] tracking-tight mb-3 sm:mb-4"
          >
            Your rank, printed for the front of house.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-xl lg:text-2xl text-[#F2DABB]/90 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Every member gets a recognition block: your three impact numbers and your season rank, built for the reception desk, the billing counter, or the pass. Diners read it while they wait. Other restaurants ask where you got it.
          </motion.p>
        </div>

        {/* Widescreen 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center w-full">
          {/* Left Column (5 cols): Real Physical Plaque Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-full h-56 sm:h-80 lg:h-96 mb-3 sm:mb-4 transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/RWCC-unit.png"
                alt="Physical RWCC Recognition Plaque"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#F3B343] block mb-1">
              Physical Plaque Unit
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#F2DABB]/80 max-w-xs">
              Laser-etched acrylic and weighted wood base, customized with your name and season rank.
            </p>
          </div>

          {/* Right Column (7 cols): Interactive Live Plaque Specimen */}
          <div className="lg:col-span-7 w-full bg-[#F2DABB] text-[#3A2A2F] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl">
            {/* Plaque Header */}
            <div className="flex items-center justify-between gap-2 pb-4 sm:pb-5 border-b border-[#942A45]/20 mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <Image
                  src="/images/rwcc.png"
                  alt="RWCC Seal"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-[#942A45] truncate block">
                    RESTAURANTS WHO CARE CLUB
                  </span>
                  <span className="text-[11px] sm:text-sm font-bold text-[#3A2A2F] truncate block">
                    Spring 2026 Official Plaque
                  </span>
                </div>
              </div>

              {/* Rank Badge #1 */}
              <Badge variant="gold" className="px-2.5 sm:px-4 py-1 text-xs sm:text-base font-black shadow-xs bg-[#F3B343] text-[#942A45] shrink-0">
                Rank #1
              </Badge>
            </div>

            {/* Member Restaurant Name with Inline Edit */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] sm:text-sm font-black uppercase tracking-wider text-[#942A45]">
                  Member Outlet
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="h-7 text-[11px] sm:text-sm font-bold text-[#ED544B] hover:text-[#D9453C] gap-1 px-2.5 rounded-full"
                >
                  <RefreshCw className="w-3 h-3" />
                  {isEditing ? 'Done' : 'Customize'}
                </Button>
              </div>

              {isEditing ? (
                <Input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="text-lg sm:text-3xl font-black text-[#942A45] bg-[#F2DABB] border-2 border-[#942A45] rounded-xl h-11 sm:h-14"
                  placeholder="Enter restaurant name"
                  autoFocus
                />
              ) : (
                <h3 className="text-xl sm:text-4xl font-black text-[#942A45] tracking-tight truncate">
                  {customName || 'Green Leaf Kitchen'}
                </h3>
              )}
            </div>

            {/* Three Impact Numbers Display */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-8">
              {/* Stat 1: Trees */}
              <div className="border-t-2 sm:border-t-3 border-[#95CC2E] pt-3 sm:pt-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-xs font-bold text-[#3A2A2F]/80 truncate">
                    Trees Equiv.
                  </span>
                  <Trees className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#95CC2E] shrink-0" />
                </div>
                <span className="text-lg sm:text-3xl lg:text-4xl font-black text-[#95CC2E]">
                  <NumberTicker value={3792} />
                </span>
              </div>

              {/* Stat 2: CO2 */}
              <div className="border-t-2 sm:border-t-3 border-[#33A8C3] pt-3 sm:pt-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-xs font-bold text-[#3A2A2F]/80 truncate">
                    CO₂ Avoided
                  </span>
                  <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#33A8C3] shrink-0" />
                </div>
                <span className="text-lg sm:text-3xl lg:text-4xl font-black text-[#33A8C3]">
                  <NumberTicker value={114} suffix=" t" />
                </span>
              </div>

              {/* Stat 3: Chuk Products */}
              <div className="border-t-2 sm:border-t-3 border-[#ED544B] pt-3 sm:pt-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-xs font-bold text-[#3A2A2F]/80 truncate">
                    Chuk / Year
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED544B] shrink-0" />
                </div>
                <span className="text-lg sm:text-3xl lg:text-4xl font-black text-[#ED544B]">
                  <NumberTicker value={512} suffix="K" />
                </span>
              </div>
            </div>

            {/* Plaque Footer Line */}
            <div className="pt-3 sm:pt-4 border-t border-[#942A45]/15 flex items-center justify-between text-[11px] sm:text-sm font-semibold text-[#3A2A2F]/80">
              <span className="truncate pr-2">CHUK · Restaurants Who Care · 2026</span>
              <Badge variant="default" className="text-[9px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 bg-[#942A45] text-[#F2DABB] shrink-0">
                Front of House
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
