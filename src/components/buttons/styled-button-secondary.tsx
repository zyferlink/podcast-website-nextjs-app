"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StyledButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

/**
 * StyledButtonSecondary
 *
 * - Solid primary background
 * - Inverted icon colors
 * - Expanding hover layer (top-left → bottom-right)
 * - Fully Tailwind-based
 */
export const StyledButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  StyledButtonSecondaryProps
>(({ children, className, icon, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        // Base layout
        "relative z-1 inline-flex items-center gap-3 overflow-hidden rounded-full",
        "px-6 py-1.5 text-lg font-semibold",
        "border-2 border-primary transition-all duration-500",
        "cursor-pointer group",

        // Base secondary styling
        "bg-primary text-black",

        // Animated hover layer (::before used instead of ::after)
        "before:absolute before:inset-0 before:rounded-full",
        "before:bg-secondary",
        "before:w-0 before:h-0",
        "before:top-0 before:left-0",
        "before:-z-10",
        "before:transition-all before:duration-500",

        // Hover animation direction (reverse of primary)
        "hover:before:w-full hover:before:h-full",
        "hover:before:bottom-0 hover:before:right-0",
        "hover:before:top-auto hover:before:left-auto",
        "hover:border-white",

        className,
      )}
      {...props}
    >
      {children}

      {icon && (
        <span
          className={cn(
            "flex items-center justify-center",
            "w-7.5 h-7.5 rounded-full",
            "bg-black text-primary font-bold",
            "transition-transform duration-500",
            "group-hover:-rotate-180",
          )}
        >
          {icon}
        </span>
      )}
    </button>
  );
});

StyledButtonSecondary.displayName = "StyledButtonSecondary";
