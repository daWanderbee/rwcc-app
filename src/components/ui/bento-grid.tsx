'use client';

import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  badge?: string;
  accentColor?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-auto md:auto-rows-[23rem] lg:auto-rows-[25rem] xl:auto-rows-[27rem]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  badge,
  accentColor = '#F3B343',
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F2DABB] border-2 border-[#942A45]/20 p-5 sm:p-6 lg:p-8 shadow-xl transition-all duration-300 font-[\'Karbon\'] min-h-[17rem] sm:min-h-[20rem] md:min-h-0',
      className
    )}
    {...props}
  >
    {/* Background visual asset */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-500 group-hover:scale-105">
      {background}
    </div>

    {/* Top Content: Icon, Badge & Title */}
    <div className="relative z-10 flex transform-gpu flex-col gap-1.5 sm:gap-2 transition-all duration-300 lg:group-hover:-translate-y-2">
      <div className="flex items-center justify-between gap-2 mb-1">
        <div
          style={{ backgroundColor: accentColor }}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#942A45] p-2 sm:p-2.5 shadow-md transition-all duration-300 group-hover:scale-110"
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        {badge && (
          <span
            style={{ backgroundColor: `${accentColor}35`, color: '#942A45', borderColor: `${accentColor}60` }}
            className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border shadow-2xs backdrop-blur-xs"
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#942A45] tracking-tight leading-snug drop-shadow-2xs pr-16 sm:pr-0">
        {name}
      </h3>
      <p className="max-w-md text-xs sm:text-base text-[#3A2A2F] font-semibold leading-relaxed drop-shadow-2xs pr-12 sm:pr-0">
        {description}
      </p>
    </div>

    {/* Mobile CTA */}
    <div className="relative z-10 flex w-full flex-row items-center pt-3 mt-4 border-t border-[#942A45]/15 lg:hidden">
      <Button
        variant="link"
        asChild
        size="sm"
        className="p-0 text-[#942A45] font-black text-xs sm:text-sm hover:no-underline"
      >
        <a href={href} className="flex items-center gap-1.5 hover:text-[#ED544B] transition-colors">
          <span>{cta}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </Button>
    </div>

    {/* Desktop CTA (slides in on hover) */}
    <div className="relative z-10 hidden w-full transform-gpu flex-row items-center pt-3 border-t border-[#942A45]/15 opacity-80 transition-all duration-300 group-hover:opacity-100 lg:flex">
      <Button
        variant="link"
        asChild
        size="sm"
        className="p-0 text-[#942A45] font-black text-base hover:no-underline"
      >
        <a href={href} className="flex items-center gap-2 hover:text-[#ED544B] transition-colors">
          <span>{cta}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>

    {/* Subtle tint overlay on hover */}
    <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 bg-[#942A45]/5 group-hover:bg-[#942A45]/10" />
  </div>
);

export { BentoCard, BentoGrid };
