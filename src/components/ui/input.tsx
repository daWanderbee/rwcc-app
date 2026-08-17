import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border-2 border-[#E5C7A3] bg-[#E5C7A3]/30 px-4 py-2 text-sm font-semibold text-[#3A2A2F] transition-colors placeholder:text-[#3A2A2F]/50 focus-visible:outline-none focus-visible:border-[#942A45] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
