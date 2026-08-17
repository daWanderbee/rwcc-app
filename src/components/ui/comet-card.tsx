'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CometCard = ({
  children,
  className,
  cometColor = '#942A45',
}: {
  children: React.ReactNode;
  className?: string;
  cometColor?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      style={{ borderColor: cometColor }}
      className={cn(
        'relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-3',
        className
      )}
    >
      {/* Inner Card Body - Using solid sand palette */}
      <div className="relative z-10 w-full h-full bg-[#F2DABB] rounded-[21px] p-6 sm:p-8 flex flex-col justify-between text-[#3A2A2F] font-['Karbon']">
        {children}
      </div>
    </motion.div>
  );
};
