import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-[#942A45]/20 bg-[#942A45]/10 text-[#942A45]',
        plum:
          'border-[#942A45] bg-[#942A45] text-[#F2DABB]',
        gold:
          'border-[#D6A419] bg-[#D6A419] text-[#942A45]',
        coral:
          'border-[#ED544B] bg-[#ED544B] text-[#F2DABB]',
        teal:
          'border-[#0096B1] bg-[#0096B1] text-[#F2DABB]',
        green:
          'border-[#82B74B] bg-[#82B74B] text-[#3A2A2F]',
        sand:
          'border-[#E5C7A3] bg-[#E5C7A3] text-[#3A2A2F]',
        outline:
          'border-[#E5C7A3] text-[#3A2A2F] bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
