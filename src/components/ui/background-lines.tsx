'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children?: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center overflow-visible w-full',
        className
      )}
    >
      <SVG duration={svgOptions?.duration} />
      {children}
    </div>
  );
};

const SVG = ({ duration = 7 }: { duration?: number }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 overflow-visible"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static Background Curved Lines - Solid Multi-Color Palette */}
      <path
        d="M-200 120 C 300 320, 1100 -80, 1600 420"
        stroke="#942A45"
        strokeWidth="4"
        strokeOpacity="0.35"
      />
      <path
        d="M-200 280 C 400 580, 1000 80, 1600 580"
        stroke="#ED544B"
        strokeWidth="6"
        strokeOpacity="0.3"
      />
      <path
        d="M-200 480 C 200 80, 1200 680, 1600 180"
        stroke="#F5B027"
        strokeWidth="4"
        strokeOpacity="0.35"
      />
      <path
        d="M-200 200 C 500 450, 900 -50, 1600 350"
        stroke="#7CB342"
        strokeWidth="5"
        strokeOpacity="0.3"
      />

      {/* Animated Glowing Light Beams - Solid Color Strokes (No Gradients) */}
      <motion.path
        d="M-200 120 C 300 320, 1100 -80, 1600 420"
        stroke="#942A45"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0.25, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.path
        d="M-200 280 C 400 580, 1000 80, 1600 580"
        stroke="#ED544B"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: 0.3, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: duration * 1.2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.path
        d="M-200 480 C 200 80, 1200 680, 1600 180"
        stroke="#7CB342"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0.35, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: duration * 0.85,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.path
        d="M-200 200 C 500 450, 900 -50, 1600 350"
        stroke="#F5B027"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0.2, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: duration * 1.1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  );
};
