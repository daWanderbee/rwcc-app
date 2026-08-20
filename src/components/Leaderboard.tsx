'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type BusinessType =
  | 'Cloud kitchen'
  | 'QSR and fast food'
  | 'Restaurant and casual dining'
  | 'Cafe and bakery'
  | 'Caterer and canteen';

interface RestaurantMember {
  id: string;
  name: string;
  initials: string;
  businessType: BusinessType;
  city: string;
  outlets: number;
  mealsPlasticFree: number; // Headline Figure (Meals)
  volumeCbm: number; // Volume Figure (CBM)
  co2AvoidedKg: number; // Technical Carbon Metric (kg CO2e)
  kwhAvoided: number; // Electricity Avoided
  monthsRunning: number; // Streak
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  avatarBg: string;
  tierColor: string;
  memberSince: string;
}

const leaderboardMembers: RestaurantMember[] = [
  {
    id: '1',
    name: 'Green Leaf Kitchen',
    initials: 'GL',
    businessType: 'Cloud kitchen',
    city: 'Bengaluru',
    outlets: 8,
    mealsPlasticFree: 345000,
    volumeCbm: 148,
    co2AvoidedKg: 7850,
    kwhAvoided: 3120,
    monthsRunning: 18,
    tier: 'Platinum',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Jul 2024',
  },
  {
    id: '2',
    name: 'Anjani Sweets',
    initials: 'AS',
    businessType: 'QSR and fast food',
    city: 'Mumbai',
    outlets: 5,
    mealsPlasticFree: 295000,
    volumeCbm: 126,
    co2AvoidedKg: 7500,
    kwhAvoided: 2980,
    monthsRunning: 16,
    tier: 'Gold',
    avatarBg: '#ED544B',
    tierColor: '#ED544B',
    memberSince: 'Sep 2024',
  },
  {
    id: '3',
    name: 'Saffron Table',
    initials: 'ST',
    businessType: 'Restaurant and casual dining',
    city: 'Delhi',
    outlets: 6,
    mealsPlasticFree: 210000,
    volumeCbm: 98,
    co2AvoidedKg: 5120,
    kwhAvoided: 2040,
    monthsRunning: 14,
    tier: 'Gold',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Nov 2024',
  },
  {
    id: '4',
    name: 'Subko Coffee & Bakehouse',
    initials: 'SK',
    businessType: 'Cafe and bakery',
    city: 'Mumbai',
    outlets: 4,
    mealsPlasticFree: 178000,
    volumeCbm: 84,
    co2AvoidedKg: 4210,
    kwhAvoided: 1680,
    monthsRunning: 15,
    tier: 'Gold',
    avatarBg: '#B5793B',
    tierColor: '#B5793B',
    memberSince: 'Aug 2024',
  },
  {
    id: '5',
    name: 'Urban Tadka',
    initials: 'UT',
    businessType: 'QSR and fast food',
    city: 'Pune',
    outlets: 4,
    mealsPlasticFree: 165000,
    volumeCbm: 76,
    co2AvoidedKg: 4120,
    kwhAvoided: 1640,
    monthsRunning: 12,
    tier: 'Gold',
    avatarBg: '#95CC2E',
    tierColor: '#95CC2E',
    memberSince: 'Jan 2025',
  },
  {
    id: '6',
    name: 'The Green Fork',
    initials: 'GF',
    businessType: 'Cloud kitchen',
    city: 'Kochi',
    outlets: 2,
    mealsPlasticFree: 112000,
    volumeCbm: 68,
    co2AvoidedKg: 2810,
    kwhAvoided: 1120,
    monthsRunning: 24,
    tier: 'Platinum',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Jan 2024',
  },
  {
    id: '7',
    name: 'Coastal Co.',
    initials: 'CC',
    businessType: 'Restaurant and casual dining',
    city: 'Chennai',
    outlets: 3,
    mealsPlasticFree: 128000,
    volumeCbm: 59,
    co2AvoidedKg: 3150,
    kwhAvoided: 1250,
    monthsRunning: 10,
    tier: 'Gold',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Mar 2025',
  },
  {
    id: '8',
    name: 'Ferment',
    initials: 'FM',
    businessType: 'Cafe and bakery',
    city: 'Hyderabad',
    outlets: 4,
    mealsPlasticFree: 145000,
    volumeCbm: 54,
    co2AvoidedKg: 3410,
    kwhAvoided: 1360,
    monthsRunning: 9,
    tier: 'Silver',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'Apr 2025',
  },
  {
    id: '9',
    name: 'Nourish Bowls',
    initials: 'NB',
    businessType: 'Caterer and canteen',
    city: 'Kolkata',
    outlets: 7,
    mealsPlasticFree: 185000,
    volumeCbm: 51,
    co2AvoidedKg: 4390,
    kwhAvoided: 1750,
    monthsRunning: 8,
    tier: 'Silver',
    avatarBg: '#942A45',
    tierColor: '#942A45',
    memberSince: 'May 2025',
  },
  {
    id: '10',
    name: 'Baithak Canteen',
    initials: 'BK',
    businessType: 'Caterer and canteen',
    city: 'Jaipur',
    outlets: 3,
    mealsPlasticFree: 95000,
    volumeCbm: 42,
    co2AvoidedKg: 2190,
    kwhAvoided: 870,
    monthsRunning: 5,
    tier: 'Bronze',
    avatarBg: '#F3B343',
    tierColor: '#F3B343',
    memberSince: 'Aug 2025',
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
    if (sortKey === 'volume') return `${fmtNum(row.volumeCbm)} CBM`;
    if (sortKey === 'carbon') return `${fmtNum(row.co2AvoidedKg)} kg CO₂`;
    return `${fmtNum(row.mealsPlasticFree)} Meals`;
  };

  const getSubMetric = (row: RestaurantMember) => {
    return `${fmtNum(row.mealsPlasticFree)} meals · ${fmtNum(row.volumeCbm)} CBM · ${fmtNum(row.co2AvoidedKg)} kg CO₂`;
  };

  return (
    <section
      id="leaderboard"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-[#942A45]/15"
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
            className="text-base sm:text-lg lg:text-xl text-[#3A2A2F] font-semibold leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Track your real kitchen impact verified directly from your Chuk order history.
          </motion.p>

          <Button
            variant="ghost"
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-xs sm:text-sm font-extrabold text-[#942A45] hover:bg-[#942A45]/10 px-4 py-2 rounded-full inline-flex items-center gap-1.5"
          >
            <span>{showExplanation ? 'Hide Calculation Rules' : 'How the numbers are calculated'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showExplanation ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Collapsible Calculation Rules Section */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full max-w-4xl bg-[#E5C7A3] border-2 border-[#942A45]/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-lg overflow-hidden text-left"
            >
              <h3 className="text-xl font-black text-[#942A45] mb-4">
                Three numbers sit against your name.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#F2DABB] p-4 rounded-2xl border border-[#7B2239]/30">
                  <h4 className="font-black text-sm text-[#942A45] mb-1">Meals served plastic-free</h4>
                  <p className="text-xs text-[#942A45]/85 font-medium leading-relaxed">
                    One plate, bowl, container, or tray = one meal — counted straight from your orders, no double-counting, no rounding up.
                  </p>
                </div>

                <div className="bg-[#F2DABB] p-4 rounded-2xl border border-[#95CC2E]/40">
                  <h4 className="font-black text-sm text-[#942A45] mb-1">Carbon avoided</h4>
                  <p className="text-xs text-[#942A45]/85 font-medium leading-relaxed">
                    Measured against the packaging you used before you switched. The number only moves when the switch is real.
                  </p>
                </div>

                <div className="bg-[#F2DABB] p-4 rounded-2xl border border-[#F3B343]/40">
                  <h4 className="font-black text-sm text-[#942A45] mb-1">Volume of Chuk Products Used (CBM)</h4>
                  <p className="text-xs text-[#942A45]/85 font-medium leading-relaxed">
                    Every cubic metre of Chuk product you&apos;ve taken on, tallied straight from your orders. Small crates per delivery, stacked over months — into a number that shows exactly how far you&apos;ve moved.
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#942A45]/85 font-semibold space-y-2 border-t border-[#942A45]/20 pt-4">
                <p>
                  <strong>Ranked Against Kitchens Like Yours:</strong> You&apos;re ranked against kitchens like yours. A cloud kitchen packs every order that leaves the counter. A dine-in restaurant only packs takeaway.
                </p>
                <p>
                  <strong>Verified Order History:</strong> The numbers come off your real order history, not a form you fill in. Where we have to assume something, we take the lower figure so your saving holds up.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Controls: Business Type League Dropdown & Metric Tabs */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Business Type League Selection Dropdown */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="text-sm font-black text-[#942A45] uppercase tracking-wider">Format League:</span>
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="bg-[#E5C7A3] border-2 border-[#942A45]/30 text-[#942A45] font-black text-sm rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#942A45] cursor-pointer"
            >
              {LEAGUES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          {/* Metric Sorting Tabs */}
          <Tabs
            value={sortKey}
            onValueChange={(val) => setSortKey(val as any)}
            className="w-full sm:w-auto"
          >
            <TabsList className="bg-[#E5C7A3] border border-[#942A45]/20 p-1 h-11 rounded-full flex gap-1">
              <TabsTrigger value="meals" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#7B2239] data-[state=active]:text-[#F2DABB]">
                Meals Served
              </TabsTrigger>
              <TabsTrigger value="volume" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#F3B343] data-[state=active]:text-[#942A45]">
                Volume (CBM)
              </TabsTrigger>
              <TabsTrigger value="carbon" className="text-xs font-bold rounded-full px-4 py-1.5 data-[state=active]:bg-[#95CC2E] data-[state=active]:text-[#942A45]">
                Carbon Avoided
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Top 3 Podium (Structured Desktop Pedestals) */}
        {sortedAndFilteredData.length >= 3 && (
          <div className="grid grid-cols-3 items-end gap-2.5 sm:gap-6 lg:gap-8 w-full max-w-4xl mb-12 sm:mb-16">
            {/* #2 Rank Pedestal */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="w-14 h-14 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full bg-[#7B2239] text-[#F2DABB] font-black text-base sm:text-2xl lg:text-3xl flex items-center justify-center shadow-lg border-2 border-[#F2DABB] transition-transform hover:scale-105">
                  {top2.initials}
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-black text-xs sm:text-sm bg-[#7B2239] text-[#F2DABB] border-2 border-[#F2DABB]">
                  2
                </span>
              </div>
              <div className="w-full bg-[#E5C7A3] border-2 border-[#7B2239]/50 rounded-2xl p-3 sm:p-5 pt-3 flex flex-col items-center shadow-sm">
                <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] w-full text-center">
                  {fmtName15(top2.name)}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#942A45]/70 w-full mb-1">
                  {top2.businessType} · {top2.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-sm lg:text-base font-black text-[#942A45] bg-[#7B2239]/20 px-2.5 py-0.5 rounded-full">
                  {getHeadlineMetric(top2)}
                </span>
              </div>
            </div>

            {/* #1 Rank Pedestal (Elevated Centerpiece) */}
            <div className="flex flex-col items-center text-center -translate-y-2 sm:-translate-y-4">
              <div className="relative mb-3">
                <div className="w-18 h-18 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#942A45] text-[#F2DABB] font-black text-2xl sm:text-4xl lg:text-5xl flex items-center justify-center shadow-2xl border-4 border-[#F3B343] transition-transform hover:scale-105">
                  {top1.initials}
                </div>
                <span className="absolute -bottom-2 inset-x-0 mx-auto w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black text-xs sm:text-sm bg-[#F3B343] text-[#942A45] border-2 border-[#942A45]">
                  1
                </span>
              </div>
              <div className="w-full bg-[#E5C7A3] border-2 border-[#F3B343] rounded-2xl p-3.5 sm:p-6 pt-3 flex flex-col items-center shadow-md">
                <h4 className="font-black text-sm sm:text-lg lg:text-xl text-[#942A45] w-full text-center">
                  {fmtName15(top1.name)}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#942A45]/70 w-full mb-1">
                  {top1.businessType} · {top1.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-base lg:text-lg font-black text-[#942A45] bg-[#F3B343]/35 px-3 py-0.5 sm:py-1 rounded-full">
                  {getHeadlineMetric(top1)}
                </span>
              </div>
            </div>

            {/* #3 Rank Pedestal */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="w-14 h-14 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full bg-[#ED544B] text-[#F2DABB] font-black text-base sm:text-2xl lg:text-3xl flex items-center justify-center shadow-lg border-2 border-[#F2DABB] transition-transform hover:scale-105">
                  {top3.initials}
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-black text-xs sm:text-sm bg-[#ED544B] text-[#F2DABB] border-2 border-[#F2DABB]">
                  3
                </span>
              </div>
              <div className="w-full bg-[#E5C7A3] border-2 border-[#ED544B]/50 rounded-2xl p-3 sm:p-5 pt-3 flex flex-col items-center shadow-sm">
                <h4 className="font-black text-xs sm:text-base lg:text-lg text-[#942A45] w-full text-center">
                  {fmtName15(top3.name)}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#942A45]/70 w-full mb-1">
                  {top3.businessType} · {top3.city}
                </p>
                <span suppressHydrationWarning className="text-xs sm:text-sm lg:text-base font-black text-[#942A45] bg-[#ED544B]/20 px-2.5 py-0.5 rounded-full">
                  {getHeadlineMetric(top3)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Ranked Stream (Desktop Table Layout) */}
        <div className="w-full max-w-4xl bg-[#E5C7A3]/50 border-2 border-[#942A45]/20 rounded-3xl overflow-hidden mb-10 shadow-md">
          {/* Table Header on Desktop */}
          <div className="hidden sm:grid grid-cols-12 py-3 px-6 lg:px-8 border-b-2 border-[#942A45]/20 text-xs font-black uppercase tracking-wider text-[#942A45]/80 bg-[#E5C7A3]">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Member Kitchen</div>
            <div className="col-span-2">Format & City</div>
            <div className="col-span-4 text-right">Impact & Volume</div>
          </div>

          <div className="flex flex-col divide-y divide-[#942A45]/15">
            <AnimatePresence>
              {displayedData.map((row) => {
                const isTop1 = row.displayRank === 1;
                const isTop2 = row.displayRank === 2;
                const isTop3 = row.displayRank === 3;

                let rankBadgeBg = '#942A45';
                let rankBadgeText = '#F2DABB';
                if (isTop1) {
                  rankBadgeBg = '#F3B343';
                  rankBadgeText = '#942A45';
                } else if (isTop2) {
                  rankBadgeBg = '#942A45';
                  rankBadgeText = '#F2DABB';
                } else if (isTop3) {
                  rankBadgeBg = '#ED544B';
                  rankBadgeText = '#F2DABB';
                }

                return (
                  <div
                    key={row.id}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 flex sm:grid sm:grid-cols-12 items-center justify-between transition-colors hover:bg-[#942A45]/10 gap-3 sm:gap-4"
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
                          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full text-[#F2DABB] font-black text-xs sm:text-base flex items-center justify-center shrink-0 shadow-sm"
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
          className="mt-1 mb-8 gap-2 font-bold text-sm sm:text-base border-[#942A45] hover:bg-[#942A45] hover:text-[#F2DABB] px-8 py-3.5 rounded-full"
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
