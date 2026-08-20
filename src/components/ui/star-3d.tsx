import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Star3DProps {
  rank: 1 | 2 | 3;
  size?: number;
  className?: string;
}

export function Star3D({ rank, size = 95, className = '' }: Star3DProps) {
  const configs = {
    1: {
      src: '/images/star-3d-yellow.png',
      alt: 'Rank 1 Gold Star',
      numColor: '#942A45',
      badgeBg: '#FFF2E0',
      badgeBorder: '#F3B343',
      glow: 'rgba(243, 179, 67, 0.4)',
      duration: 3.2,
      delay: 0,
    },
    2: {
      src: '/images/star-3d-cyan.png',
      alt: 'Rank 2 Turquoise Sky Star',
      numColor: '#942A45',
      badgeBg: '#FFF2E0',
      badgeBorder: '#33A8C3',
      glow: 'rgba(51, 168, 195, 0.4)',
      duration: 3.5,
      delay: 0.35,
    },
    3: {
      src: '/images/star-3d-coral.png',
      alt: 'Rank 3 Sunset Coral Star',
      numColor: '#942A45',
      badgeBg: '#FFF2E0',
      badgeBorder: '#ED544B',
      glow: 'rgba(237, 84, 75, 0.4)',
      duration: 3.3,
      delay: 0.7,
    },
  };

  const cfg = configs[rank];

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: cfg.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: cfg.delay,
      }}
      whileHover={{ scale: 1.12, rotate: [0, -5, 5, 0] }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Soft Glow */}
      <div
        className="absolute inset-2 rounded-full blur-lg opacity-60"
        style={{ backgroundColor: cfg.glow }}
      />

      {/* Glossy 3D Star Image Asset */}
      <div className="relative w-full h-full drop-shadow-xl flex items-center justify-center">
        <Image
          src={cfg.src}
          alt={cfg.alt}
          fill
          priority
          className="object-contain"
          sizes={`${size}px`}
        />

        {/* Center Rank Numeral Badge */}
        <div
          style={{
            backgroundColor: cfg.badgeBg,
            borderColor: cfg.badgeBorder,
            color: cfg.numColor,
          }}
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full border-2.5 flex items-center justify-center font-black text-xs sm:text-sm lg:text-base shadow-md select-none mt-1"
        >
          {rank}
        </div>
      </div>
    </motion.div>
  );
}
