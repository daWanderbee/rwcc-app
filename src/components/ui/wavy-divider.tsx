import React from 'react';

interface WavyDividerProps {
  fill: string; // The fill color matching the incoming section
  variant?: 1 | 2 | 3;
  flip?: boolean;
  className?: string;
}

export function WavyDivider({
  fill,
  variant = 1,
  flip = false,
  className = '',
}: WavyDividerProps) {
  // Smooth, continuous responsive Bézier wave paths extending slightly past viewBox (82) to ensure 0 gap
  let pathD = 'M0,28 C320,68 640,4 960,42 C1180,68 1340,18 1440,30 L1440,82 L0,82 Z';
  if (variant === 2) {
    pathD = 'M0,45 C280,10 560,65 840,30 C1120,0 1320,55 1440,35 L1440,82 L0,82 Z';
  } else if (variant === 3) {
    pathD = 'M0,20 C360,60 720,0 1080,45 C1260,65 1380,15 1440,25 L1440,82 L0,82 Z';
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-full left-0 right-0 w-full overflow-hidden leading-none pointer-events-none translate-y-[2px] z-20 ${className}`}
      style={{ transform: flip ? 'translateY(2px) scaleX(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d={pathD}
          fill={fill}
          stroke={fill}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />
      </svg>
    </div>
  );
}
