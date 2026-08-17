'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Eye, Volume2, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ReelItem {
  id: string;
  title: string;
  restaurant: string;
  handle: string;
  city: string;
  views: string;
  likes: string;
  duration: string;
  image: string;
  tag: string;
  tagColor: string;
  audioTrack: string;
  caption: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Unboxing the Spring 2026 Welcome Kit',
    restaurant: 'Green Leaf Kitchen',
    handle: '@greenleafkitchen',
    city: 'Bengaluru',
    views: '18.4K',
    likes: '2.1K',
    duration: '0:42',
    image: '/images/reels/reel-1-unboxing.jpg',
    tag: 'Welcome Kit',
    tagColor: '#95CC2E', // Leaf Lime Green
    audioTrack: 'Original Audio · Green Leaf Kitchen',
    caption: 'Our official Restaurants Who Care Club 2026 Welcome Kit just arrived! The acrylic plaque looks stunning at our billing desk 🌿✨ #RestaurantsWhoCareClub #CHUK',
  },
  {
    id: 'reel-2',
    title: 'Table Service on 100% Bagasse Bowls',
    restaurant: 'The Daily Bowl',
    handle: '@thedailybowl',
    city: 'Mumbai',
    views: '24.8K',
    likes: '3.4K',
    duration: '0:30',
    image: '/images/reels/reel-2-table-service.jpg',
    tag: 'Table Service',
    tagColor: '#33A8C3', // Turquoise Sky
    audioTrack: 'Trending · Sustainable Flavors',
    caption: 'Gourmet meal plating meets 100% compostable sugarcane bagasse bowls. Our diners love the tent cards explaining the tree savings! 🍜🌱',
  },
  {
    id: 'reel-3',
    title: 'Front-of-House Plaque Reveal',
    restaurant: 'Saffron Table',
    handle: '@saffrontable',
    city: 'Delhi',
    views: '31.2K',
    likes: '4.8K',
    duration: '0:48',
    image: '/images/reels/reel-3-reception-plaque.jpg',
    tag: 'Member Plaque',
    tagColor: '#F3B343', // Sunny Gold
    audioTrack: 'Saffron Table Vibes · Delhi',
    caption: 'Placed our official Season Rank #3 recognition block right by the entrance. Diners stop to read the impact numbers every day! 🏆🌿',
  },
  {
    id: 'reel-4',
    title: 'Why We Switched to 100% Compostable',
    restaurant: 'Coastal Co.',
    handle: '@coastalco',
    city: 'Chennai',
    views: '42.6K',
    likes: '5.9K',
    duration: '0:56',
    image: '/images/reels/reel-4-chef-kitchen.jpg',
    tag: 'Kitchen Story',
    tagColor: '#ED544B', // Sunset Coral
    audioTrack: 'Chef Stories · Coastal Co.',
    caption: 'Behind the pass with Chef Maria. Zero single-use plastic in our kitchen — 100% rapid-renewable sugarcane tableware by CHUK. 🌊🌱',
  },
];

export default function ReelsSection() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="reels"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#942A45]/15"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 lg:mb-18">
          <Badge
            variant="default"
            className="gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs bg-[#942A45] text-[#F2DABB]"
          >
            <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3B343]" />
            <span>Member Reels & Stories</span>
          </Badge>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-5xl md:text-6xl font-black text-[#942A45] tracking-tight mb-2 sm:mb-3"
          >
            Seen on the Feed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl font-bold text-[#ED544B] mb-2 sm:mb-3"
          >
            Real members. Real tables. Real impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-base lg:text-lg text-[#3A2A2F]/90 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Watch how leading restaurant partners across India unbox their welcome kits, showcase their recognition blocks, and inspire diners with 100% compostable tableware.
          </motion.p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#942A45] mb-3 sm:hidden">
          <span>Swipe reels</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>

        {/* Responsive Reels Grid / Touch-friendly Carousel on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full mb-10 sm:mb-16 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {reelsData.map((reel, index) => {
            const isLiked = likedMap[reel.id];

            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedReel(reel)}
                className="group relative shrink-0 w-[78vw] sm:w-auto snap-center cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-3 border-[#942A45]/20 bg-[#3A2A2F] flex flex-col justify-between aspect-[9/16] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl p-3 sm:p-4"
              >
                {/* Seamless Full Background Image */}
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark tint */}
                <div className="absolute inset-0 bg-[#3A2A2F]/15 group-hover:bg-transparent transition-colors" />

                {/* Top Bar: Tag & Reel Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <Badge
                    style={{ backgroundColor: reel.tagColor, color: reel.tagColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                    className="font-black text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 border-0 shadow-md"
                  >
                    {reel.tag}
                  </Badge>

                  <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#3A2A2F]/75 backdrop-blur-xs text-[#F2DABB] text-[10px] sm:text-xs font-bold border border-[#F2DABB]/20 shadow-md">
                    <InstagramIcon className="w-3 h-3 text-[#F3B343]" />
                    <span>Reel</span>
                  </div>
                </div>

                {/* Center: Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2DABB]/95 text-[#942A45] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F3B343]">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Card Pill: Clean solid container with NO visual gaps */}
                <div className="relative z-10 bg-[#3A2A2F]/90 backdrop-blur-xs border border-[#F2DABB]/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col gap-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-bold text-[#F3B343] tracking-wide truncate pr-2">
                      {reel.handle} · {reel.city}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleLike(reel.id, e)}
                      className="flex items-center gap-1 text-[#F2DABB] hover:text-[#ED544B] transition-colors p-0.5"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#ED544B] text-[#ED544B]' : ''}`} />
                      <span className="text-[10px] sm:text-xs font-black">{isLiked ? 'Liked' : reel.likes}</span>
                    </button>
                  </div>

                  <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#F2DABB] leading-snug line-clamp-2">
                    {reel.title}
                  </h3>

                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#F2DABB]/80 pt-1.5 border-t border-[#F2DABB]/15">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {reel.views}
                    </span>
                    <span className="font-bold text-[#F3B343]">Watch Reel →</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Follow CTA Bar: Cohesive Left Alignment on Mobile and Desktop */}
        <div className="w-full max-w-2xl bg-[#E5C7A3] border-2 border-[#942A45]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-md">
          <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full sm:w-auto">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#942A45] text-[#F3B343] flex items-center justify-center shrink-0 shadow-md">
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-left flex-1">
              <h4 className="font-black text-base sm:text-lg lg:text-xl text-[#942A45] leading-tight">
                Follow @chukitnow on Instagram
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#3A2A2F]/85 mt-0.5 leading-snug">
                Tag #RestaurantsWhoCareClub to get featured on our national feed.
              </p>
            </div>
          </div>

          <Button
            asChild
            className="w-full sm:w-auto shrink-0 bg-[#942A45] text-[#F2DABB] font-black text-xs sm:text-sm hover:bg-[#7A1F36] shadow-md px-6 py-3 rounded-full"
          >
            <a
              href="https://www.instagram.com/chukitnow/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Follow Club Feed</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Modal: Full Reel Player View */}
        <Dialog open={!!selectedReel} onOpenChange={(open) => !open && setSelectedReel(null)}>
          {selectedReel && (
            <DialogContent className="max-w-sm sm:max-w-md p-0 overflow-hidden bg-[#3A2A2F] border-2 border-[#942A45] text-[#F2DABB] max-h-[92vh]">
              {/* Vertical Reel Mock Video Container */}
              <div className="relative w-full aspect-[9/16] bg-black p-4 flex flex-col justify-between">
                <Image
                  src={selectedReel.image}
                  alt={selectedReel.title}
                  fill
                  className="object-cover"
                />

                {/* Subtle uniform overlay */}
                <div className="absolute inset-0 bg-[#3A2A2F]/20" />

                {/* Top Video Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-[#3A2A2F]/80 px-3 py-1.5 rounded-full backdrop-blur-xs border border-[#F2DABB]/20 shadow-md">
                    <InstagramIcon className="w-4 h-4 text-[#F3B343]" />
                    <span className="text-xs font-black text-[#F2DABB]">@chukitnow</span>
                  </div>

                  <div className="p-2 rounded-full bg-[#3A2A2F]/80 text-[#F2DABB] border border-[#F2DABB]/20 shadow-md">
                    <Volume2 className="w-3.5 h-3.5 text-[#95CC2E]" />
                  </div>
                </div>

                {/* Center Animated Play Ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-14 h-14 rounded-full bg-[#F3B343]/90 text-[#942A45] flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Video Details Card */}
                <div className="relative z-10 bg-[#3A2A2F]/90 backdrop-blur-xs border border-[#F2DABB]/20 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-[#F2DABB]/30 rounded-full overflow-hidden mb-1">
                    <div className="w-3/5 h-full bg-[#F3B343] rounded-full animate-pulse" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      style={{ backgroundColor: selectedReel.tagColor, color: selectedReel.tagColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                      className="font-black text-[10px] sm:text-xs uppercase"
                    >
                      {selectedReel.tag}
                    </Badge>
                    <span className="text-xs font-bold text-[#F3B343]">
                      {selectedReel.handle}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-[#F2DABB] leading-snug">
                    {selectedReel.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs font-medium text-[#F2DABB]/90 leading-relaxed line-clamp-2">
                    {selectedReel.caption}
                  </p>

                  <div className="flex items-center justify-between pt-1.5 border-t border-[#F2DABB]/20 text-[11px] font-semibold">
                    <span className="text-[#F2DABB]/75 truncate max-w-[170px]">🎵 {selectedReel.audioTrack}</span>
                    <a
                      href="https://www.instagram.com/chukitnow/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F3B343] font-bold hover:underline shrink-0"
                    >
                      Open Instagram ↗
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
