'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const kitPieces = [
  {
    id: '01',
    title: 'Recognition block',
    placement: 'Reception & Pass',
    accentColor: '#F3B343', // Sunny Gold
    image: '/images/rwcc-framed-plaque.jpg',
    description:
      'Your ranked plaque with live impact numbers. Built for the reception desk, the billing counter, or the kitchen pass. Updated every season.',
    specs: 'Laser-etched acrylic · Weighted wood base · Seasonal refresh',
  },
  {
    id: '02',
    title: 'Table tent card',
    placement: 'On Every Table',
    accentColor: '#ED544B', // Sunset Coral
    image: '/images/tent-card.png',
    description:
      'A fold-up card that sits on every table and answers the question before your diner asks it. What is this tableware made from, and why does it matter? Answered in twelve words.',
    specs: 'Tri-fold heavy cardstock · 12-word sugarcane story',
  },
  {
    id: '03',
    title: 'Entrance door sticker',
    placement: 'Entrance Glass',
    accentColor: '#33A8C3', // Turquoise Sky
    image: '/images/entering-sticker.png',
    description:
      "The first thing a diner sees, walking in. A quiet signal that something is different here, before they've even looked at the menu.",
    specs: 'Weatherproof vinyl · Anti-fade coating · Clean peel adhesive',
  },
  {
    id: '04',
    title: 'Billing counter sticker',
    placement: 'POS & Counter',
    accentColor: '#95CC2E', // Leaf Lime Green
    image: '/images/counter-sticker.png',
    description:
      "The last thing they see before they leave. Your impact numbers at eye level, at the moment they're deciding whether to come back.",
    specs: 'Eye-level placement · Durable laminate · Custom numbers',
  },
  {
    id: '05',
    title: 'Tray liner',
    placement: 'In-Dining Trays',
    accentColor: '#B5793B', // Warm Bronze
    image: '/images/tray-liner.png',
    description:
      'Under the food, the story meets the meal. The tray liner carries the sugarcane story: where the tableware came from, why it matters, what happens to it after. Printed with your restaurant name and your numbers.',
    specs: 'Food-safe soy ink · Custom outlet print · 100% Bagasse paper',
  },
  {
    id: '06',
    title: 'Framed wall certificate',
    placement: 'Dining Room Wall',
    accentColor: '#F3B343', // Sunny Gold
    image: '/images/certifciate.png',
    description:
      'A small frame with a clear signal. Your membership, your impact, your season rank, on the wall for anyone who pauses to read it.',
    specs: 'Sustainably sourced wood frame · Official season seal',
  },
  {
    id: '07',
    title: 'Sustainability collateral',
    placement: 'Print & Digital',
    accentColor: '#95CC2E', // Leaf Lime Green
    image: '/images/sustainability-team-award.png',
    description:
      'Print and social assets, sized for Instagram, for your outlet windows, and for your own marketing. Use them across every outlet in your network.',
    specs: 'Digital asset pack · Instagram 1:1 & Stories · Window decals',
  },
];

export default function TheKit() {
  const [selectedPiece, setSelectedPiece] = useState<(typeof kitPieces)[number] | null>(null);

  return (
    <section
      id="the-kit"
      className="relative z-10 w-full bg-[#942A45] text-[#F2DABB] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F2DABB] tracking-tight mb-3"
          >
            Every member&apos;s welcome kit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F3B343] mb-4"
          >
            Markers your customers can actually see.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl text-[#F2DABB]/90 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A recognition block for your reception, plus six pieces designed to put your impact exactly where your customers are: before they order, while they eat, and as they leave.
          </motion.p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-14 sm:mb-20">
          <Button
            asChild
            size="lg"
            className="font-black shadow-xl bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] hover:scale-105 active:scale-95 transition-all text-base sm:text-lg px-10 py-6"
          >
            <a href="#join-cta">
              <span>Claim Your Kit Free</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* 7 Kit Pieces Gallery with Clean Background-less Cutout Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 w-full">
          {kitPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedPiece(piece)}
              className="cursor-pointer flex flex-col justify-between group border-t-3 pt-6 lg:pt-8 transition-all"
              style={{ borderColor: piece.accentColor }}
            >
              <div>
                {/* Floating Image Preview without solid box backgrounds */}
                <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-6 flex items-center justify-center p-2 transition-transform group-hover:scale-105 duration-300">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    className="object-contain drop-shadow-2xl rounded-2xl"
                  />
                  
                  {/* Zoom Icon overlay */}
                  <div
                    style={{ backgroundColor: piece.accentColor }}
                    className="absolute top-2 right-2 p-2.5 rounded-full text-[#F2DABB] opacity-90 group-hover:opacity-100 transition-opacity shadow-md"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Badge Number */}
                  <Badge
                    style={{ backgroundColor: piece.accentColor, color: piece.accentColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                    className="absolute top-2 left-2 px-3 py-1 font-black text-xs sm:text-sm border-0 shadow-md"
                  >
                    Piece {piece.id}
                  </Badge>
                </div>

                <div>
                  {/* Placement Tag */}
                  <span
                    style={{ color: piece.accentColor }}
                    className="text-xs sm:text-sm font-black uppercase tracking-wider block mb-1.5"
                  >
                    {piece.placement}
                  </span>

                  {/* Piece Title */}
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-[#F2DABB] tracking-tight mb-2.5 group-hover:text-[#F3B343] transition-colors">
                    {piece.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#F2DABB]/85 font-medium leading-relaxed mb-4 line-clamp-3">
                    {piece.description}
                  </p>
                </div>
              </div>

              {/* Specs Footer */}
              <div className="pt-4 border-t border-[#F2DABB]/15 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#F2DABB]/80">
                <span className="truncate pr-2">{piece.specs}</span>
                <span
                  style={{ color: piece.accentColor }}
                  className="font-bold group-hover:underline shrink-0 ml-2"
                >
                  Details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal using shadcn Dialog */}
        <Dialog open={!!selectedPiece} onOpenChange={(open) => !open && setSelectedPiece(null)}>
          {selectedPiece && (
            <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    style={{ backgroundColor: selectedPiece.accentColor, color: selectedPiece.accentColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                    className="font-bold text-xs"
                  >
                    Piece {selectedPiece.id}
                  </Badge>
                  <Badge variant="default" className="text-xs font-bold uppercase tracking-wider bg-[#942A45] text-[#F2DABB]">
                    {selectedPiece.placement}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-black text-[#942A45]">
                  {selectedPiece.title}
                </DialogTitle>
              </DialogHeader>

              {/* Big Image Preview without solid box backgrounds */}
              <div className="relative w-full h-64 sm:h-80 my-2 p-2 flex items-center justify-center">
                <Image
                  src={selectedPiece.image}
                  alt={selectedPiece.title}
                  fill
                  className="object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>

              <DialogDescription className="text-base font-medium text-[#3A2A2F] leading-relaxed">
                {selectedPiece.description}
              </DialogDescription>

              <div className="p-4 rounded-2xl bg-[#DFEFCB] border border-[#95CC2E]/40 flex items-center gap-3 my-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#3A2A2F]">
                  Included free for every verified Chuk customer.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  variant="outlinePlum"
                  size="sm"
                  onClick={() => setSelectedPiece(null)}
                >
                  Close
                </Button>
                <Button
                  asChild
                  size="sm"
                  onClick={() => setSelectedPiece(null)}
                  className="bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C]"
                >
                  <a href="#join-cta">Claim Kit Free</a>
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
