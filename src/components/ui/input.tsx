import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input type={type} className={cn("flex h-14 w-full rounded-[14px] border border-black/[0.06] bg-[#f7f7fa] px-5 py-4 font-sans text-sm text-[#14141a] outline-none placeholder:text-[#8c8c99] focus:border-[#7366e5]", className)} ref={ref} {...props} />
))
Input.displayName = "Input"

export { Input }
