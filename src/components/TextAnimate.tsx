'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  by?: 'word' | 'character' | 'line';
  animation?:
    | 'fadeIn'
    | 'blurIn'
    | 'blurInUp'
    | 'slideUp'
    | 'scaleUp';
  staggerTimings?: number;
  as?: React.ElementType;
}

export default function TextAnimate({
  children,
  className = '',
  delay = 0.4,
  duration = 0.3,
  by = 'word',
  animation = 'blurInUp',
  staggerTimings = 0.05,
  as: Component = 'p',
}: TextAnimateProps) {
  const animationVariants: Record<string, { container: Variants; item: Variants }> = {
    blurInUp: {
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerTimings,
            delayChildren: delay,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      },
    },
    fadeIn: {
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerTimings,
            delayChildren: delay,
          },
        },
      },
      item: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration, ease: 'easeOut' },
        },
      },
    },
    slideUp: {
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerTimings,
            delayChildren: delay,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      },
    },
  };

  const selectedVariant = animationVariants[animation] || animationVariants.blurInUp;

  if (by === 'word') {
    const words = children.split(' ');
    return (
      <Component className={className}>
        <motion.span
          variants={selectedVariant.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block"
        >
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={selectedVariant.item}
              className="inline-block mr-[0.25em] whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  return (
    <Component className={className}>
      <motion.span
        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Component>
  );
}
