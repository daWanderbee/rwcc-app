import React from 'react';

interface SectionWaveProps {
  topColor: string;
  fillColor: string;
  variant?: 'wave1' | 'wave2' | 'wave3';
  flip?: boolean;
  className?: string;
}

export function SectionWave({
  topColor,
  fillColor,
  variant = 'wave1',
  flip = false,
  className = '',
}: SectionWaveProps) {
  return (
    <div
      style={{ backgroundColor: topColor }}
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-12 sm:h-20 lg:h-28 block ${flip ? 'scale-x-[-1]' : ''}`}
      >
        {variant === 'wave1' && (
          <path
            d="M0,35 C320,115 520,10 720,55 C920,100 1140,5 1440,45 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'wave2' && (
          <path
            d="M0,60 C260,10 480,110 740,45 C1000,-10 1220,95 1440,35 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'wave3' && (
          <path
            d="M0,35 C340,105 620,5 940,65 C1180,110 1320,15 1440,50 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
}
