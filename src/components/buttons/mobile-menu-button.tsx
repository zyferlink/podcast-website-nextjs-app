"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MobileMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
}

/**
 * MobileMenuButton
 *
 * - Hamburger → X animation
 * - Controlled via `open` prop
 * - Hidden on large screens
 * - Accessible toggle button
 */
export const MobileMenuButton = React.forwardRef<
  HTMLButtonElement,
  MobileMenuButtonProps
>(({ open, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Toggle menu"
      aria-expanded={open}
      className={cn(
        "lg:hidden flex flex-col justify-center gap-1.25",
        "w-6 h-6 relative",
        className,
      )}
      {...props}
    >
      {/* Top bar */}
      <span
        className={cn(
          "block w-6 h-0.75 bg-white transition-all duration-300",
          open && "rotate-45 translate-y-2",
        )}
      />

      {/* Middle bar */}
      <span
        className={cn(
          "block w-6 h-0.75 bg-white transition-all duration-300",
          open && "opacity-0",
        )}
      />

      {/* Bottom bar */}
      <span
        className={cn(
          "block w-6 h-0.75 bg-white transition-all duration-300",
          open && "-rotate-45 -translate-y-2",
        )}
      />
    </button>
  );
});

MobileMenuButton.displayName = "MobileMenuButton";
