'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Trophy, ChevronDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Restaurant {
  rank: number;
  name: string;
  initials: string;
  city: string;
  outlets: number;
  trees: number;
  co2: number;
  co2Text: string;
  volume: number;
  volumeText: string;
  avatarBg: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  tierColor: string;
}

const initialData: Restaurant[] = [
  { rank: 1, name: 'Green Leaf Kitchen', initials: 'GL', city: 'Bengaluru', outlets: 8, trees: 3792, co2: 114, co2Text: '114 t', volume: 512, volumeText: '512K', avatarBg: '#F3B343', tier: 'Gold', tierColor: '#F3B343' },
  { rank: 2, name: 'The Daily Bowl', initials: 'DB', city: 'Mumbai', outlets: 12, trees: 3467, co2: 104, co2Text: '104 t', volume: 468, volumeText: '468K', avatarBg: '#33A8C3', tier: 'Silver', tierColor: '#33A8C3' },
  { rank: 3, name: 'Saffron Table', initials: 'ST', city: 'Delhi', outlets: 6, trees: 2970, co2: 92, co2Text: '92 t', volume: 401, volumeText: '401K', avatarBg: '#ED544B', tier: 'Bronze', tierColor: '#ED544B' },
  { rank: 4, name: 'Coastal Co.', initials: 'CC', city: 'Chennai', outlets: 5, trees: 2637, co2: 79, co2Text: '79 t', volume: 356, volumeText: '356K', avatarBg: '#942A45', tier: 'Platinum', tierColor: '#942A45' },
  { rank: 5, name: 'Urban Tadka', initials: 'UT', city: 'Pune', outlets: 9, trees: 2311, co2: 71, co2Text: '71 t', volume: 312, volumeText: '312K', avatarBg: '#95CC2E', tier: 'Bronze', tierColor: '#95CC2E' },
  { rank: 6, name: 'Ferment', initials: 'FM', city: 'Hyderabad', outlets: 4, trees: 2030, co2: 58, co2Text: '58 t', volume: 274, volumeText: '274K', avatarBg: '#B5793B', tier: 'Bronze', tierColor: '#B5793B' },
  { rank: 7, name: 'Nourish Bowls', initials: 'NB', city: 'Kolkata', outlets: 7, trees: 1785, co2: 54, co2Text: '54 t', volume: 241, volumeText: '241K', avatarBg: '#942A45', tier: 'Platinum', tierColor: '#942A45' },
  { rank: 8, name: 'Baithak', initials: 'BK', city: 'Jaipur', outlets: 3, trees: 1519, co2: 47, co2Text: '47 t', volume: 205, volumeText: '205K', avatarBg: '#F3B343', tier: 'Gold', tierColor: '#F3B343' },
  { rank: 9, name: 'The Green Fork', initials: 'GF', city: 'Goa', outlets: 4, trees: 1319, co2: 40, co2Text: '40 t', volume: 178, volumeText: '178K', avatarBg: '#95CC2E', tier: 'Bronze', tierColor: '#95CC2E' },
  { rank: 10, name: 'Subko Kitchen', initials: 'SK', city: 'Ahmedabad', outlets: 3, trees: 1104, co2: 33, co2Text: '33 t', volume: 149, volumeText: '149K', avatarBg: '#33A8C3', tier: 'Silver', tierColor: '#33A8C3' },
];

export default function Leaderboard() {
  const [sortKey, setSortKey] = useState<'trees' | 'carbon' | 'volume'>('trees');
  const [showAll, setShowAll] = useState(false);

  const sortedData = [...initialData].sort((a, b) => {
    if (sortKey === 'trees') return b.trees - a.trees;
    if (sortKey === 'carbon') return b.co2 - a.co2;
    if (sortKey === 'volume') return b.volume - a.volume;
    return 0;
  }).map((item, index) => ({ ...item, displayRank: index + 1 }));

  const displayedData = showAll ? sortedData : sortedData.slice(0, 5);

  const top1 = sortedData[0];
  const top2 = sortedData[1];
  const top3 = sortedData[2];

  const getMetricDisplay = (row: Restaurant) => {
    if (sortKey === 'trees') return `${row.trees.toLocaleString()} trees`;
    if (sortKey === 'carbon') return `${row.co2Text} CO₂`;
    if (sortKey === 'volume') return `${row.volumeText} Chuk`;
    return `${row.trees.toLocaleString()} trees`;
  };

  return (
    <section
      id="leaderboard"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#942A45] tracking-tight mb-2 sm:mb-3"
          >
            The Leaderboard
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl font-bold text-[#ED544B]"
          >
            Who&apos;s saving the most?
          </motion.p>
        </div>

        {/* Tab Segmented Control */}
        <Tabs
          value={sortKey}
          onValueChange={(val) => setSortKey(val as any)}
          className="mb-12 sm:mb-16 w-full max-w-md flex justify-center px-1"
        >
          <TabsList className="w-full bg-[#E5C7A3] border border-[#942A45]/20 p-1 h-11 sm:h-12">
            <TabsTrigger value="trees" className="flex-1 text-xs sm:text-sm font-bold data-[state=active]:bg-[#95CC2E] data-[state=active]:text-[#3A2A2F]">
              Trees
            </TabsTrigger>
            <TabsTrigger value="carbon" className="flex-1 text-xs sm:text-sm font-bold data-[state=active]:bg-[#33A8C3] data-[state=active]:text-[#F2DABB]">
              Carbon
            </TabsTrigger>
            <TabsTrigger value="volume" className="flex-1 text-xs sm:text-sm font-bold data-[state=active]:bg-[#ED544B] data-[state=active]:text-[#F2DABB]">
              Volume
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Top 3 Podium (Expansive Desktop Layout) */}
        <div className="flex items-end justify-center gap-3 sm:gap-10 lg:gap-16 w-full mb-12 sm:mb-18 px-1 max-w-3xl">
          {/* #2 Rank */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[120px] sm:max-w-[180px]">
            <div className="relative mb-2 sm:mb-3">
              <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#33A8C3] text-[#F2DABB] font-black text-lg sm:text-2xl lg:text-3xl flex items-center justify-center shadow-lg border-2 border-[#F2DABB] transition-transform hover:scale-105">
                {top2.initials}
              </div>
              <Badge
                variant="teal"
                className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full p-0 flex items-center justify-center font-black text-xs sm:text-sm bg-[#33A8C3] text-[#F2DABB] border-2 border-[#F2DABB]"
              >
                2
              </Badge>
            </div>
            <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] truncate w-full">
              {top2.name}
            </h4>
            <p className="text-[10px] sm:text-xs font-semibold text-[#3A2A2F]/70 truncate w-full">
              {top2.city} · {top2.outlets} outlets
            </p>
            <span className="mt-1 text-xs sm:text-base font-black text-[#0096B1] block">
              {getMetricDisplay(top2)}
            </span>
          </div>

          {/* #1 Rank (Centerpiece) */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[140px] sm:max-w-[210px] -translate-y-4 sm:-translate-y-6">
            <div className="relative mb-2 sm:mb-3">
              <Crown className="w-6 h-6 sm:w-9 sm:h-9 text-[#F3B343] mx-auto mb-1.5 drop-shadow-md" />
              <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-[#942A45] text-[#F3B343] font-black text-2xl sm:text-4xl lg:text-5xl flex items-center justify-center shadow-2xl border-4 border-[#F3B343] transition-transform hover:scale-105">
                {top1.initials}
              </div>
              <Badge
                variant="gold"
                className="absolute -bottom-2 inset-x-0 mx-auto w-7 h-7 sm:w-9 sm:h-9 rounded-full p-0 flex items-center justify-center font-black text-xs sm:text-base bg-[#F3B343] text-[#942A45] border-2 border-[#942A45]"
              >
                1
              </Badge>
            </div>
            <h4 className="font-black text-sm sm:text-lg lg:text-2xl text-[#942A45] truncate w-full">
              {top1.name}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#3A2A2F]/70 truncate w-full">
              {top1.city} · {top1.outlets} outlets
            </p>
            <span className="mt-1.5 text-xs sm:text-lg font-black text-[#942A45] block bg-[#F3B343]/30 px-3 sm:px-4 py-1 rounded-full">
              {getMetricDisplay(top1)}
            </span>
          </div>

          {/* #3 Rank */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[120px] sm:max-w-[180px]">
            <div className="relative mb-2 sm:mb-3">
              <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#ED544B] text-[#F2DABB] font-black text-lg sm:text-2xl lg:text-3xl flex items-center justify-center shadow-lg border-2 border-[#F2DABB] transition-transform hover:scale-105">
                {top3.initials}
              </div>
              <Badge
                variant="coral"
                className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full p-0 flex items-center justify-center font-black text-xs sm:text-sm bg-[#ED544B] text-[#F2DABB] border-2 border-[#F2DABB]"
              >
                3
              </Badge>
            </div>
            <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] truncate w-full">
              {top3.name}
            </h4>
            <p className="text-[10px] sm:text-xs font-semibold text-[#3A2A2F]/70 truncate w-full">
              {top3.city} · {top3.outlets} outlets
            </p>
            <span className="mt-1 text-xs sm:text-base font-black text-[#ED544B] block">
              {getMetricDisplay(top3)}
            </span>
          </div>
        </div>

        {/* Open Editorial Ranked List Stream (Widescreen Rows) */}
        <div className="w-full flex flex-col divide-y divide-[#942A45]/15 border-y border-[#942A45]/20 mb-10">
          <AnimatePresence>
            {displayedData.map((row) => {
              const isTop1 = row.displayRank === 1;
              const isTop2 = row.displayRank === 2;
              const isTop3 = row.displayRank === 3;

              let badgeVariant: any = 'default';
              if (isTop1) badgeVariant = 'gold';
              else if (isTop2) badgeVariant = 'teal';
              else if (isTop3) badgeVariant = 'coral';

              return (
                <div
                  key={row.name}
                  className="w-full py-4 sm:py-5 px-3 sm:px-8 flex items-center justify-between transition-colors hover:bg-[#942A45]/5 gap-4"
                >
                  {/* Left: Rank & Avatar & Name */}
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    <Badge
                      variant={badgeVariant}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0 flex items-center justify-center shrink-0 font-black text-xs sm:text-base shadow-xs"
                    >
                      #{row.displayRank}
                    </Badge>

                    <div
                      style={{ backgroundColor: row.avatarBg }}
                      className="w-10 h-10 sm:w-13 sm:h-13 rounded-full text-[#F2DABB] font-black text-sm sm:text-lg flex items-center justify-center shrink-0 shadow-md"
                    >
                      {row.initials}
                    </div>

                    <div className="text-left min-w-0">
                      <h4 className="font-bold text-sm sm:text-xl lg:text-2xl truncate text-[#942A45]">
                        {row.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#3A2A2F]/70 truncate">
                        {row.city} · {row.outlets} outlets
                      </p>
                    </div>
                  </div>

                  {/* Right: Primary Metric */}
                  <div className="text-right shrink-0 ml-2">
                    <span className="font-black text-base sm:text-xl lg:text-2xl block text-[#942A45]">
                      {getMetricDisplay(row)}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold opacity-75 block text-[#3A2A2F]">
                      {sortKey === 'trees' && `${row.co2Text} CO₂ · ${row.volumeText}`}
                      {sortKey === 'carbon' && `${row.trees.toLocaleString()} trees · ${row.volumeText}`}
                      {sortKey === 'volume' && `${row.trees.toLocaleString()} trees · ${row.co2Text} CO₂`}
                    </span>
                  </div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        <Button
          variant="outlinePlum"
          onClick={() => setShowAll(!showAll)}
          className="mt-1 mb-8 gap-2 font-bold text-sm sm:text-base border-[#942A45] hover:bg-[#942A45] hover:text-[#F2DABB] px-8 py-3.5"
        >
          <span>{showAll ? 'Show Less' : 'View Full Top 10 Leaderboard'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
        </Button>

        {/* Footnote */}
        <p className="text-xs sm:text-sm lg:text-base text-[#3A2A2F]/75 font-semibold max-w-2xl text-center leading-relaxed px-4">
          Rankings refresh each season from verified Chuk order volumes. Newly switched members start with a projected first-year figure.
        </p>
      </div>
    </section>
  );
}
