'use client';

import React from 'react';

interface SpinningTextProps {
  text?: string;
  radius?: number;
  className?: string;
  fontSize?: number;
}

export default function SpinningText({
  text = "A RECOGNITION KIT BY CHUK • ",
  radius = 65,
  className = "",
  fontSize = 12.5,
}: SpinningTextProps) {
  // Repeating text seamlessly to form a complete, balanced circular ring
  const fullText = "A RECOGNITION KIT BY CHUK • A RECOGNITION KIT BY CHUK • ";
  const viewBoxSize = (radius + 25) * 2;
  const center = viewBoxSize / 2;

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer Rotating SVG Text Ring with Larger Font Size */}
      <div className="animate-spin-slow w-[130px] h-[130px] sm:w-[155px] sm:h-[155px] md:w-[170px] md:h-[170px]">
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="w-full h-full text-[#942A45]"
        >
          <defs>
            <path
              id="spinningCirclePath"
              d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            fill="#942A45"
            fontSize={fontSize}
            fontWeight="800"
            fontFamily="Karbon, sans-serif"
            letterSpacing="2.2"
            className="uppercase tracking-widest"
          >
            <textPath href="#spinningCirclePath" startOffset="0%">
              {fullText}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
