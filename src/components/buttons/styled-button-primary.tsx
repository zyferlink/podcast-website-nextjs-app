"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Props extend native button attributes
 * so the component behaves like a standard <button>.
 */
export interface StyledButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

/**
 * StyledButtonPrimary
 *
 * - Pill-shaped primary button
 * - Expanding background animation using ::before
 * - Rotating icon on hover
 * - Fully Tailwind-based
 */
export const StyledButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  StyledButtonPrimaryProps
>(({ children, className, icon, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        // Base layout
        "relative z-1 inline-flex items-center gap-3 overflow-hidden rounded-full",
        "px-6 py-1.5 text-lg font-semibold",
        "border-2 border-primary-light",
        "transition-all duration-500",
        "cursor-pointer group",

        // Primary styling
        "text-white",

        // Animated background layer (before pseudo-element)
        "before:absolute before:inset-0 before:rounded-full",
        "before:bg-secondary",
        "before:w-0 before:h-0",
        "before:bottom-0 before:right-0",
        "before:-z-10",
        "before:transition-all before:duration-500",

        // Hover interactions
        "hover:before:w-full hover:before:h-full",
        "hover:before:top-0 hover:before:left-0",
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
            "bg-primary-light text-black font-bold",
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

StyledButtonPrimary.displayName = "StyledButtonPrimary";
