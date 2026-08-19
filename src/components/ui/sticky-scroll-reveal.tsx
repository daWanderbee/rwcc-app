'use client';

import React, { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface StickyScrollContentItem {
  title: string;
  description: string;
  num: string;
  tag: string;
  color: string;
  icon: React.ElementType;
  content?: React.ReactNode;
  image?: string;
  imageFit?: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: StickyScrollContentItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 w-full max-w-6xl mx-auto"
    >
      {/* Left Column: Scrolling Text Items */}
      <div className="relative flex items-start w-full lg:w-1/2 px-2 sm:px-4">
        <div className="w-full space-y-16 sm:space-y-24 py-6 lg:py-12">
          {content.map((item, index) => {
            return (
              <div
                key={item.title + index}
                className="flex flex-col"
              >
                {/* Step Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F2DABB] tracking-tight mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-base sm:text-lg text-[#F2DABB]/85 font-medium leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Mobile Visual Content (No background box container) */}
                <div className="lg:hidden mt-6 relative w-full h-64 flex items-center justify-center">
                  {item.content ? (
                    item.content
                  ) : item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`${item.imageFit || 'object-contain'}`}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Sticky Visual Preview (Pure image without background card box) */}
      <div
        className={`hidden lg:block sticky top-28 h-80 lg:h-96 w-full lg:w-1/2 flex items-center justify-center ${contentClassName}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex items-center justify-center p-2"
          >
            {content[activeCard].content ? (
              content[activeCard].content
            ) : content[activeCard].image ? (
              <Image
                src={content[activeCard].image!}
                alt={content[activeCard].title}
                fill
                className={`${content[activeCard].imageFit || 'object-contain'}`}
                priority
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
