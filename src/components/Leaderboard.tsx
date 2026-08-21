'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star3D } from '@/components/ui/star-3d';

export type BusinessType =
  | 'Cloud kitchen'
  | 'QSR and fast food'
  | 'Restaurant and casual dining'
  | 'Cafe and bakery'
  | 'Caterer and canteen';

export interface RestaurantMember {
  id: string;
  name: string;
  initials: string;
  businessType: BusinessType;
  city: string;
  outlets: number;
  mealsPlasticFree: number; // Headline Figure (Meals)
  volumeCbm: number; // Volume Figure (Tonnes)
  co2AvoidedKg: number; // Technical Carbon Metric (kg CO2e)
  kwhAvoided: number; // Electricity Avoided
  monthsRunning: number; // Streak
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  avatarBg: string;
  tierColor: string;
  memberSince: string;
}

export const leaderboardMembers: RestaurantMember[] = [
  {
    id: '1',
    name: "Haldiram's",
    initials: 'HD',
    businessType: 'QSR and fast food',
    city: 'Delhi NCR',
    outlets: 45,
    mealsPlasticFree: 4250000,
    volumeCbm: 1820,
    co2AvoidedKg: 174839,
    kwhAvoided: 69200,
    monthsRunning: 24,
    tier: 'Platinum',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Jan 2024',
  },
  {
    id: '2',
    name: 'Caterspoint',
    initials: 'CP',
    businessType: 'Cloud kitchen',
    city: 'Gurugram',
    outlets: 6,
    mealsPlasticFree: 610000,
    volumeCbm: 260,
    co2AvoidedKg: 24719,
    kwhAvoided: 9800,
    monthsRunning: 18,
    tier: 'Platinum',
    avatarBg: '#33A8C3',
    tierColor: '#33A8C3',
    memberSince: 'Jul 2024',
  },
  {
    id: '3',
    name: 'Bikanervala',
    initials: 'BV',
    businessType: 'QSR and fast food',
    city: 'Delhi NCR',
    outlets: 28,
    mealsPlasticFree: 420000,
    volumeCbm: 180,
    co2AvoidedKg: 16881,
    kwhAvoided: 6700,
    monthsRunning: 16,
    tier: 'Gold',
    avatarBg: '#ED544B',
    tierColor: '#ED544B',
    memberSince: 'Sep 2024',
  },
  {
    id: '4',
    name: 'Lite Bite Foods',
    initials: 'LB',
    businessType: 'Restaurant and casual dining',
    city: 'Mumbai',
    outlets: 18,
    mealsPlasticFree: 185000,
    volumeCbm: 78,
    co2AvoidedKg: 7235,
    kwhAvoided: 2900,
    monthsRunning: 15,
    tier: 'Gold',
    avatarBg: '#95CC2E',
    tierColor: '#95CC2E',
    memberSince: 'Oct 2024',
  },
  {
    id: '5',
    name: 'Taco Bell',
    initials: 'TB',
    businessType: 'QSR and fast food',
    city: 'Delhi NCR',
    outlets: 12,
    mealsPlasticFree: 65000,
    volumeCbm: 28,
    co2AvoidedKg: 2345,
    kwhAvoided: 940,
    monthsRunning: 12,
    tier: 'Gold',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Dec 2024',
  },
  {
    id: '6',
    name: 'Vrindawan Sweets & Restaurant',
    initials: 'VS',
    businessType: 'Restaurant and casual dining',
    city: 'Delhi NCR',
    outlets: 4,
    mealsPlasticFree: 32000,
    volumeCbm: 14,
    co2AvoidedKg: 1250,
    kwhAvoided: 500,
    monthsRunning: 10,
    tier: 'Gold',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Feb 2025',
  },
  {
    id: '7',
    name: 'Civil Line Wala',
    initials: 'CL',
    businessType: 'QSR and fast food',
    city: 'Gurugram',
    outlets: 3,
    mealsPlasticFree: 25000,
    volumeCbm: 10,
    co2AvoidedKg: 920,
    kwhAvoided: 370,
    monthsRunning: 9,
    tier: 'Silver',
    avatarBg: '#33A8C3',
    tierColor: '#33A8C3',
    memberSince: 'Mar 2025',
  },
  {
    id: '8',
    name: 'Bansal Sweets',
    initials: 'BS',
    businessType: 'QSR and fast food',
    city: 'Delhi NCR',
    outlets: 3,
    mealsPlasticFree: 24000,
    volumeCbm: 11,
    co2AvoidedKg: 890,
    kwhAvoided: 350,
    monthsRunning: 8,
    tier: 'Silver',
    avatarBg: '#ED544B',
    tierColor: '#ED544B',
    memberSince: 'Apr 2025',
  },
  {
    id: '9',
    name: 'Kapoor Balle Balle',
    initials: 'KB',
    businessType: 'Restaurant and casual dining',
    city: 'Delhi NCR',
    outlets: 2,
    mealsPlasticFree: 21000,
    volumeCbm: 9,
    co2AvoidedKg: 780,
    kwhAvoided: 310,
    monthsRunning: 8,
    tier: 'Silver',
    avatarBg: '#95CC2E',
    tierColor: '#95CC2E',
    memberSince: 'Apr 2025',
  },
  {
    id: '10',
    name: 'Noodles',
    initials: 'ND',
    businessType: 'QSR and fast food',
    city: 'Delhi NCR',
    outlets: 3,
    mealsPlasticFree: 17500,
    volumeCbm: 8,
    co2AvoidedKg: 650,
    kwhAvoided: 260,
    monthsRunning: 7,
    tier: 'Silver',
    avatarBg: '#0096B1',
    tierColor: '#0096B1',
    memberSince: 'May 2025',
  },
  {
    id: '11',
    name: 'Harish Bakery',
    initials: 'HB',
    businessType: 'Cafe and bakery',
    city: 'Gurugram',
    outlets: 2,
    mealsPlasticFree: 18500,
    volumeCbm: 8,
    co2AvoidedKg: 603,
    kwhAvoided: 240,
    monthsRunning: 6,
    tier: 'Bronze',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Jun 2025',
  },
  {
    id: '12',
    name: 'Khan Chacha',
    initials: 'KC',
    businessType: 'Restaurant and casual dining',
    city: 'Delhi',
    outlets: 4,
    mealsPlasticFree: 16200,
    volumeCbm: 7,
    co2AvoidedKg: 603,
    kwhAvoided: 240,
    monthsRunning: 6,
    tier: 'Bronze',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Jun 2025',
  },
  {
    id: '13',
    name: 'Prince Chaat',
    initials: 'PC',
    businessType: 'QSR and fast food',
    city: 'Gurugram',
    outlets: 2,
    mealsPlasticFree: 15000,
    volumeCbm: 7,
    co2AvoidedKg: 580,
    kwhAvoided: 230,
    monthsRunning: 5,
    tier: 'Bronze',
    avatarBg: '#ED544B',
    tierColor: '#ED544B',
    memberSince: 'Jul 2025',
  },
  {
    id: '14',
    name: 'Dora Pancakes & waffles',
    initials: 'DP',
    businessType: 'Cafe and bakery',
    city: 'Delhi NCR',
    outlets: 2,
    mealsPlasticFree: 14000,
    volumeCbm: 6,
    co2AvoidedKg: 540,
    kwhAvoided: 215,
    monthsRunning: 5,
    tier: 'Bronze',
    avatarBg: '#33A8C3',
    tierColor: '#33A8C3',
    memberSince: 'Jul 2025',
  },
  {
    id: '15',
    name: 'Hooga House',
    initials: 'HH',
    businessType: 'Cafe and bakery',
    city: 'Delhi NCR',
    outlets: 2,
    mealsPlasticFree: 13500,
    volumeCbm: 6,
    co2AvoidedKg: 510,
    kwhAvoided: 200,
    monthsRunning: 4,
    tier: 'Bronze',
    avatarBg: '#95CC2E',
    tierColor: '#95CC2E',
    memberSince: 'Aug 2025',
  },
  {
    id: '16',
    name: 'Sandwich king',
    initials: 'SK',
    businessType: 'Cafe and bakery',
    city: 'Delhi NCR',
    outlets: 2,
    mealsPlasticFree: 12800,
    volumeCbm: 5,
    co2AvoidedKg: 480,
    kwhAvoided: 190,
    monthsRunning: 4,
    tier: 'Bronze',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Aug 2025',
  },
  {
    id: '17',
    name: 'Lintons Cafe',
    initials: 'LC',
    businessType: 'Cafe and bakery',
    city: 'Kolkata',
    outlets: 2,
    mealsPlasticFree: 11000,
    volumeCbm: 5,
    co2AvoidedKg: 420,
    kwhAvoided: 170,
    monthsRunning: 3,
    tier: 'Bronze',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Sep 2025',
  },
];

const LEAGUES: { label: string; value: string }[] = [
  { label: 'Overall National Board', value: 'All Types' },
  { label: 'Cloud Kitchen League', value: 'Cloud kitchen' },
  { label: 'QSR & Fast Food League', value: 'QSR and fast food' },
  { label: 'Restaurant & Casual Dining', value: 'Restaurant and casual dining' },
  { label: 'Cafe & Bakery League', value: 'Cafe and bakery' },
  { label: 'Caterer & Canteen League', value: 'Caterer and canteen' },
];

const fmtNum = (n: number) => new Intl.NumberFormat('en-US').format(n);
const fmtName15 = (name: string) => (name.length > 15 ? `${name.slice(0, 15)}...` : name);

export default function Leaderboard() {
  const [selectedLeague, setSelectedLeague] = useState<string>('All Types');
  const [sortKey, setSortKey] = useState<'meals' | 'volume' | 'carbon'>('meals');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Filter & Sort Members based on Meals, Volume (CBM), and Carbon
  const sortedAndFilteredData = useMemo(() => {
    let filtered = leaderboardMembers;
    if (selectedLeague !== 'All Types') {
      filtered = leaderboardMembers.filter((m) => m.businessType.toLowerCase() === selectedLeague.toLowerCase());
    }

    return [...filtered]
      .sort((a, b) => {
        if (sortKey === 'meals') return b.mealsPlasticFree - a.mealsPlasticFree;
        if (sortKey === 'volume') return b.volumeCbm - a.volumeCbm;
        if (sortKey === 'carbon') return b.co2AvoidedKg - a.co2AvoidedKg;
        return 0;
      })
      .map((item, index) => ({ ...item, displayRank: index + 1 }));
  }, [selectedLeague, sortKey]);

  const displayedData = showAll ? sortedAndFilteredData : sortedAndFilteredData.slice(0, 5);

  const top1 = sortedAndFilteredData[0] || leaderboardMembers[0];
  const top2 = sortedAndFilteredData[1] || leaderboardMembers[1];
  const top3 = sortedAndFilteredData[2] || leaderboardMembers[2];

  const getHeadlineMetric = (row: RestaurantMember) => {
    if (sortKey === 'meals') return `${fmtNum(row.mealsPlasticFree)} Meals`;
    if (sortKey === 'volume') return `${fmtNum(row.volumeCbm)} Tonnes`;
    if (sortKey === 'carbon') return `${fmtNum(row.co2AvoidedKg)} kg CO₂`;
    return `${fmtNum(row.mealsPlasticFree)} Meals`;
  };

  const getSubMetric = (row: RestaurantMember) => {
    return `${fmtNum(row.mealsPlasticFree)} meals · ${fmtNum(row.volumeCbm)} t · ${fmtNum(row.co2AvoidedKg)} kg CO₂`;
  };

  return (
    <section
      id="leaderboard"
      className="relative z-10 w-full bg-[#F2DABB] text-[#942A45] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Block with Official Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#942A45] tracking-tight mb-4"
          >
            See where your kitchen stands
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-[#942A45]/90 font-semibold leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Track your real kitchen impact verified directly from your Chuk order history.
          </motion.p>

          <Button
            asChild
            variant="ghost"
            className="text-xs sm:text-sm font-extrabold text-[#942A45] bg-[#FFF2E0] hover:bg-[#942A45] hover:text-[#FFF2E0] border-2 border-[#942A45]/20 px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-sm transition-all hover:scale-105"
          >
            <a href="#how-it-works-impact">
              <span>How the numbers are calculated</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Filter Controls: Business Type League Dropdown & Metric Tabs */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Business Type League Selection Dropdown */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="text-sm font-black text-[#942A45] uppercase tracking-wider">Format League:</span>
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="bg-[#FFF2E0] border-2 border-[#942A45]/30 text-[#942A45] font-black text-sm rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#942A45] cursor-pointer shadow-xs"
            >
              {LEAGUES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          {/* Metric Sorting Tabs with Vibrant Colors */}
          <Tabs
            value={sortKey}
            onValueChange={(val) => setSortKey(val as any)}
            className="w-full sm:w-auto"
          >
            <TabsList className="bg-[#F2DABB] border border-[#942A45]/20 p-1 h-11 rounded-full flex gap-1 shadow-xs">
              <TabsTrigger value="meals" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#33A8C3] data-[state=active]:text-[#FFF2E0] data-[state=active]:shadow-sm">
                Meals Served
              </TabsTrigger>
              <TabsTrigger value="volume" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#F3B343] data-[state=active]:text-[#942A45] data-[state=active]:shadow-sm">
                Volume (Tonnes)
              </TabsTrigger>
              <TabsTrigger value="carbon" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#95CC2E] data-[state=active]:text-[#942A45] data-[state=active]:shadow-sm">
                Carbon Avoided
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Top 3 Podium (3D Stars & Vibrant Pedestals with #FFF2E0 / #F2DABB surfaces) */}
        {sortedAndFilteredData.length >= 3 && (
          <div className="grid grid-cols-3 items-end gap-2.5 sm:gap-6 lg:gap-8 w-full max-w-4xl mb-12 sm:mb-16">
            {/* #2 Rank Pedestal (Glossy 3D Cyan Star) */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex items-center justify-center">
                <Star3D rank={2} size={84} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
              </div>
              <div className="w-full bg-[#FFF2E0] border-2 border-[#33A8C3] rounded-2xl p-3 sm:p-5 pt-3.5 flex flex-col items-center shadow-md">
                <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] w-full text-center">
                  {fmtName15(top2.name)}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#942A45]/70 w-full mb-1.5">
                  {top2.businessType} · {top2.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-sm lg:text-base font-black text-[#0096B1] bg-[#33A8C3]/20 border border-[#33A8C3]/40 px-3 py-0.5 rounded-full shadow-xs">
                  {getHeadlineMetric(top2)}
                </span>
              </div>
            </div>

            {/* #1 Rank Pedestal (Glossy 3D Gold Centerpiece Star) */}
            <div className="flex flex-col items-center text-center -translate-y-2 sm:-translate-y-4">
              <div className="mb-3 flex items-center justify-center">
                <Star3D rank={1} size={110} className="w-20 h-20 sm:w-26 sm:h-26 lg:w-30 lg:h-30" />
              </div>
              <div className="w-full bg-[#FFF2E0] border-3 border-[#F3B343] rounded-2xl p-3.5 sm:p-6 pt-4 flex flex-col items-center shadow-xl">
                <h4 className="font-black text-sm sm:text-lg lg:text-xl text-[#942A45] w-full text-center">
                  {fmtName15(top1.name)}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#942A45]/75 w-full mb-2">
                  {top1.businessType} · {top1.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-base lg:text-lg font-black text-[#942A45] bg-[#F3B343]/30 border border-[#F3B343] px-3.5 py-1 rounded-full shadow-xs">
                  {getHeadlineMetric(top1)}
                </span>
              </div>
            </div>

            {/* #3 Rank Pedestal (Glossy 3D Sunset Coral Star) */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex items-center justify-center">
                <Star3D rank={3} size={84} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
              </div>
              <div className="w-full bg-[#FFF2E0] border-2 border-[#ED544B] rounded-2xl p-3 sm:p-5 pt-3.5 flex flex-col items-center shadow-md">
                <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] w-full text-center">
                  {fmtName15(top3.name)}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#942A45]/70 w-full mb-1.5">
                  {top3.businessType} · {top3.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-sm lg:text-base font-black text-[#ED544B] bg-[#ED544B]/20 border border-[#ED544B]/40 px-3 py-0.5 rounded-full shadow-xs">
                  {getHeadlineMetric(top3)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Ranked Stream (Desktop Table Layout with #FFF2E0 & #F2DABB) */}
        <div className="w-full max-w-4xl bg-[#FFF2E0] border-2 border-[#942A45]/20 rounded-3xl overflow-hidden mb-10 shadow-lg">
          {/* Table Header on Desktop */}
          <div className="hidden sm:grid grid-cols-12 py-3 px-6 lg:px-8 border-b-2 border-[#942A45]/15 text-xs font-black uppercase tracking-wider text-[#942A45]/80 bg-[#F2DABB]">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Member Kitchen</div>
            <div className="col-span-2">Format & City</div>
            <div className="col-span-4 text-right">Impact & Volume</div>
          </div>

          <div className="flex flex-col divide-y divide-[#942A45]/10">
            <AnimatePresence>
              {displayedData.map((row) => {
                const isTop1 = row.displayRank === 1;
                const isTop2 = row.displayRank === 2;
                const isTop3 = row.displayRank === 3;
                const isTop4 = row.displayRank === 4;

                let rankBadgeBg = '#942A45';
                let rankBadgeText = '#FFF2E0';
                if (isTop1) {
                  rankBadgeBg = '#F3B343';
                  rankBadgeText = '#942A45';
                } else if (isTop2) {
                  rankBadgeBg = '#33A8C3';
                  rankBadgeText = '#FFF2E0';
                } else if (isTop3) {
                  rankBadgeBg = '#ED544B';
                  rankBadgeText = '#FFF2E0';
                } else if (isTop4) {
                  rankBadgeBg = '#95CC2E';
                  rankBadgeText = '#942A45';
                }

                return (
                  <div
                    key={row.id}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 flex sm:grid sm:grid-cols-12 items-center justify-between transition-colors hover:bg-[#F2DABB]/60 gap-3 sm:gap-4"
                  >
                    {/* Mobile: Combined Left Group | Desktop: Col 1 & Col 2 */}
                    <div className="flex sm:contents items-center gap-3 sm:gap-4 min-w-0 flex-1 sm:flex-none">
                      {/* Col 1: Rank */}
                      <div className="sm:col-span-1 flex items-center shrink-0">
                        <span
                          style={{ backgroundColor: rankBadgeBg, color: rankBadgeText }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-xs shrink-0"
                        >
                          #{row.displayRank}
                        </span>
                      </div>

                      {/* Col 2: Restaurant & Avatar */}
                      <div className="sm:col-span-5 flex items-center gap-3 sm:gap-4 min-w-0 flex-1 sm:flex-none">
                        <div
                          style={{ backgroundColor: row.avatarBg }}
                          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full text-[#FFF2E0] font-black text-xs sm:text-base flex items-center justify-center shrink-0 shadow-sm"
                        >
                          {row.initials}
                        </div>
                        <div className="text-left min-w-0 flex-1 flex flex-col justify-center">
                          <span className="font-black text-sm sm:text-base lg:text-lg text-[#942A45] whitespace-nowrap block">
                            {fmtName15(row.name)}
                          </span>
                          <span className="sm:hidden text-[11px] font-semibold text-[#942A45]/70 block truncate mt-0.5 whitespace-nowrap">
                            {row.businessType} · {row.city}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Col 3: Format & City (Desktop) */}
                    <div className="hidden sm:flex col-span-2 flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold text-[#942A45]">
                        {row.businessType}
                      </span>
                      <span className="text-[11px] font-semibold text-[#942A45]/75">
                        {row.city}
                      </span>
                    </div>

                    {/* Col 4: Primary Metric */}
                    <div className="sm:col-span-4 text-right shrink-0">
                      <span suppressHydrationWarning className="font-black text-sm sm:text-base lg:text-lg block text-[#942A45]">
                        {getHeadlineMetric(row)}
                      </span>
                      <span suppressHydrationWarning className="text-[10px] sm:text-xs font-semibold text-[#942A45]/75 block">
                        {getSubMetric(row)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Show More / Show Less Toggle Button */}
        <Button
          variant="outlinePlum"
          onClick={() => setShowAll(!showAll)}
          className="mt-1 mb-8 gap-2 font-bold text-sm sm:text-base border-[#942A45] bg-[#FFF2E0] hover:bg-[#942A45] hover:text-[#FFF2E0] px-8 py-3.5 rounded-full shadow-sm"
        >
          <span>{showAll ? 'Show Top 5 Only' : `View Full Leaderboard (${sortedAndFilteredData.length} Members)`}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
        </Button>

        {/* Verified Order History Footnote */}
        <p className="text-xs sm:text-sm lg:text-base text-[#942A45]/80 font-semibold max-w-2xl text-center leading-relaxed px-4">
          The numbers come off real Chuk order history. Where we have to assume something, we take the lower figure so your impact score holds up when corporate clients ask you to prove it.
        </p>
      </div>
    </section>
  );
}
