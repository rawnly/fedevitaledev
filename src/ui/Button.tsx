"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// 'rx-bg-neutral-3 rx-border-neutral-6 border rx-text-neutral-11',
// 'hover:rx-bg-neutral-4 active:rx-bg-neutral-5',
// 'disabled:rx-bg-neutral-6 disabled:rx-text-neutral-11'

const buttonVariants = cva(
  "inline-flex items-center focus:rx-ring-offset-1 justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 focus:rx-ring-neutral-6 disabled:pointer-events-none data-[state=open]:rx-bg-neutral-4",
  {
    variants: {
      variant: {
        default:
          "dark:bg-white bg-black text-white focus:ring-offset-2 focus:rx-ring-offset-neutral-1 dark:text-neutral-12 hover:bg-black/75 dark:hover:bg-white/75",
        destructive:
          "rx-bg-danger-3 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "rx-bg-neutral-3 rx-border-neutral-6 rx-text-neutral-11 border hover:rx-bg-neutral-4 active:rx-bg-neutral-5 disabled:rx-bg-neutral-6 disabled:rx-text-neutral-11",
        ghost:
          "bg-transparent hover:rx-bg-neutral-3 rx-text-neutral-11 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
