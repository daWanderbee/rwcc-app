'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HighlighterProps {
  children: React.ReactNode;
  action?: 'highlight' | 'underline';
  color?: string;
  className?: string;
  delay?: number;
}

export default function Highlighter({
  children,
  action = 'highlight',
  color = 'plum',
  className = '',
  delay = 0.2,
}: HighlighterProps) {
  // Helper to resolve color presets or custom hex values
  const resolveColor = (c: string) => {
    if (c === 'plum' || c === '#942A45') {
      return {
        stroke: '#942A45',
        bg: '#942A45',
        text: '#F2DABB', // Sand color like the background
        border: '#7A1F36',
      };
    }
    if (c === 'gold' || c === '#D6A419' || c === '#FF9800') {
      return {
        stroke: '#D6A419',
        bg: '#FCE8AC',
        text: '#3A2A2F',
        border: '#D6A419',
      };
    }
    if (c === 'green' || c === '#82B74B') {
      return {
        stroke: '#82B74B',
        bg: '#82B74B',
        text: '#F2DABB',
        border: '#6B9A3B',
      };
    }
    return {
      stroke: c,
      bg: c,
      text: '#F2DABB',
      border: c,
    };
  };

  const activeColor = resolveColor(color);

  if (action === 'underline') {
    return (
      <span className={`relative inline-block whitespace-nowrap z-0 ${className}`}>
        <span className="relative z-10">{children}</span>
        {/* Crisp Magic UI Hand-Drawn SVG Underline */}
        <svg
          className="absolute left-0 -bottom-1 w-full h-3 pointer-events-none z-10 overflow-visible"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 2 8 C 30 13, 70 4, 98 9"
            fill="none"
            stroke={activeColor.stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </span>
    );
  }

  return (
    <span className={`relative inline-block px-2.5 py-0.5 rounded-md z-0 transition-all ${className}`}>
      {/* Magic UI Background Marker Brush Animation */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          backgroundColor: activeColor.bg,
          originX: 0,
        }}
        className="absolute inset-0 rounded-md -z-10 shadow-xs"
      />

      {/* Text with sand color matching the background */}
      <span
        style={{ color: activeColor.text }}
        className="relative z-10 font-black"
      >
        {children}
      </span>
    </span>
  );
}
