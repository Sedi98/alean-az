"use client"

import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup> &
    Pick<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Positioner>, "align" | "side" | "sideOffset">
>(({ className, align = "center", side = "bottom", sideOffset = 8, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner align={align} side={side} sideOffset={sideOffset} className="z-[100]">
      <PopoverPrimitive.Popup
        ref={ref}
        className={cn(
          "origin-[var(--transform-origin)] rounded-2xl border border-white/15 bg-[#15151d]/95 p-1.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] outline-none backdrop-blur-xl transition data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverContent, PopoverTrigger }
