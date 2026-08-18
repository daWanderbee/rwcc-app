'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
  url: string;
  title: string;
  restaurant: string;
  handle: string;
  city: string;
  likes: string;
  image: string;
  tag: string;
  tagColor: string;
  quote: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    url: 'https://www.instagram.com/chukitnow/reel/DZ42J3cBD4W/',
    title: 'Rasodu · Gujarati Snacks',
    restaurant: 'Rasodu',
    handle: '@rasodu_official',
    city: 'HSR Layout, Bengaluru',
    likes: '217',
    image: '/images/reels/reel-1.jpg',
    tag: '3CP Snack Tray',
    tagColor: '#95CC2E', // Leaf Lime
    quote: '80% of our menu served on Chuk. The 3CP tray keeps the dabeli crisp and chai doesn’t spill.',
  },
  {
    id: 'reel-2',
    url: 'https://www.instagram.com/camerabackpacker/reel/DcGli-6sdx1/',
    title: 'Civil Lines Wala · Chole Bhature',
    restaurant: 'Civil Lines Wala',
    handle: '@camerabackpacker',
    city: 'Gurgaon',
    likes: '1.4K',
    image: '/images/reels/reel-2.jpg',
    tag: 'Legendary Spot',
    tagColor: '#F3B343', // Sunny Gold
    quote: 'Iconic 15-year-old foodie spot serving hot Chole Bhature on 100% regenerative sugarcane tableware.',
  },
  {
    id: 'reel-3',
    url: 'https://www.instagram.com/psclicks_india/reel/Db2Dr0YP7VZ/',
    title: 'Jain Chaat · Heritage Taste',
    restaurant: 'Jain Chaat',
    handle: '@psclicks_india',
    city: 'Lucknow',
    likes: '890',
    image: '/images/reels/reel-3.jpg',
    tag: 'Heritage Chaat',
    tagColor: '#ED544B', // Sunset Coral
    quote: 'Generations of Lucknow chaat lovers, now served with care on 100% compostable Chuk plates.',
  },
  {
    id: 'reel-4',
    url: 'https://www.instagram.com/chukitnow/reel/DbA3_QVBD-g/',
    title: 'NH8 · Unlimited Rajasthani Thali',
    restaurant: 'NH8 Restaurant',
    handle: '@chukitnow',
    city: 'Bengaluru',
    likes: '640',
    image: '/images/reels/reel-4.jpg',
    tag: 'Unlimited Thali',
    tagColor: '#33A8C3', // Turquoise Sky
    quote: 'Using Chuk for 6 years. Guests walking in expect hygiene, sustainability, and sturdiness.',
  },
  {
    id: 'reel-5',
    url: 'https://www.instagram.com/chukitnow/reel/DaxWodiBDij/',
    title: 'Bambaiya · Bombay Street Food',
    restaurant: 'Bambaiya',
    handle: '@bambaiya_bangalore',
    city: 'HSR Layout, Bengaluru',
    likes: '1.1K',
    image: '/images/reels/reel-5.jpg',
    tag: 'Founder Story',
    tagColor: '#F3B343', // Sunny Gold
    quote: 'Mumbai ka swad in Bangalore. Authentic flavours, honest prices — plastic just didn’t fit our story.',
  },
  {
    id: 'reel-6',
    url: 'https://www.instagram.com/chukitnow/reel/DaVGhZMBprp/',
    title: 'Sahib’s Brick Oven Pizza',
    restaurant: 'Sahib’s Pizza',
    handle: '@sahibsbrickovenpizza',
    city: 'Horamavu, Bengaluru',
    likes: '780',
    image: '/images/reels/reel-6.jpg',
    tag: 'Craft Delivery',
    tagColor: '#95CC2E', // Leaf Lime
    quote: 'Handcrafted pasta packed in Chuk: no leaks, no soggy bottoms, delivered 100% toxin-free.',
  },
];

export default function ReelsSection() {
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="reels"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-12 sm:py-20 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-[#942A45]/15"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-[#942A45] tracking-tight mb-2 sm:mb-3"
          >
            From Our Partners&apos; Tables
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl font-bold text-[#ED544B] mb-2 sm:mb-3"
          >
            The best restaurants in India already made the switch.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-base lg:text-lg text-[#3A2A2F]/90 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            See how operators across the country are serving with 100% compostable Chuk — and what their diners are saying about it.
          </motion.p>
        </div>

        {/* 6 Real Partner Reels Grid (Mobile Snap Carousel / Desktop 3-Col Grid) */}
        <div className="w-full flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-6 sm:pb-0 mb-12 sm:mb-16 scrollbar-none">
          {reelsData.map((reel, index) => {
            const isLiked = !!likedMap[reel.id];

            return (
              <motion.a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative shrink-0 w-[82vw] sm:w-auto snap-center rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-3 border-[#942A45]/20 bg-[#3A2A2F] flex flex-col justify-between aspect-[9/16] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl p-3.5 sm:p-4 text-left"
              >
                {/* High-Resolution Thumbnail */}
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 group-hover:from-black/30 group-hover:to-black/80 transition-colors" />

                {/* Top Bar: Tag & Reel Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <Badge
                    style={{ backgroundColor: reel.tagColor, color: reel.tagColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                    className="font-black text-[10px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 border-0 shadow-md"
                  >
                    {reel.tag}
                  </Badge>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3A2A2F]/80 backdrop-blur-xs text-[#F2DABB] text-[10px] sm:text-xs font-bold border border-[#F2DABB]/20 shadow-md">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#F3B343]" />
                    <span>Watch Reel</span>
                  </div>
                </div>

                {/* Center: Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2DABB]/95 text-[#942A45] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F3B343]">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Card Pill */}
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

                  <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#F2DABB] leading-snug line-clamp-1">
                    {reel.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs font-medium text-[#F2DABB]/80 line-clamp-2 leading-relaxed">
                    &ldquo;{reel.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#F3B343] pt-1.5 border-t border-[#F2DABB]/15">
                    <span className="flex items-center gap-1">
                      <InstagramIcon className="w-3 h-3" />
                      <span>Instagram</span>
                    </span>
                    <span className="flex items-center gap-1 group-hover:underline">
                      <span>Open Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Follow CTA Bar */}
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
      </div>
    </section>
  );
}
