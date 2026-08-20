import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[#942A45] text-[#F2DABB] hover:bg-[#7A1F36] shadow-md',
        coral:
          'bg-[#ED544B] text-[#F2DABB] hover:bg-[#D9453C] shadow-lg shadow-[#ED544B]/20',
        gold:
          'bg-[#D6A419] text-[#942A45] hover:bg-[#C29314] shadow-md',
        outline:
          'border-2 border-[#0096B1] text-[#0096B1] bg-[#F2DABB] hover:bg-[#0096B1] hover:text-[#F2DABB]',
        outlinePlum:
          'border-2 border-[#942A45] text-[#942A45] bg-[#F2DABB] hover:bg-[#942A45] hover:text-[#F2DABB]',
        secondary:
          'bg-[#E5C7A3] text-[#942A45] hover:bg-[#D4B58F]',
        ghost:
          'hover:bg-[#942A45]/10 text-[#942A45]',
        link: 'text-[#942A45] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2.5 text-sm sm:text-base',
        sm: 'h-9 px-4 py-2 text-xs sm:text-sm',
        lg: 'h-13 px-8 py-3.5 text-base sm:text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
