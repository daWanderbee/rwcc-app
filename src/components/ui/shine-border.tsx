'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function ShineBorder({
  borderRadius = 24,
  borderWidth = 3,
  duration = 10,
  color = '#D6A419',
  className,
  children,
}: {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          '--border-radius': `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        'relative rounded-[--border-radius] border-4 border-[#D6A419] bg-[#F2DABB] p-6 shadow-xl',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
