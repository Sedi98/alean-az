import * as React from "react"

import { cn } from "@/lib/utils"

const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn("flex h-14 w-full appearance-none rounded-[14px] border border-black/[0.06] bg-[#f7f7fa] px-5 py-4 font-sans text-sm text-[#14141a] outline-none focus:border-[#7366e5]", className)} {...props}>
    {children}
  </select>
))
Select.displayName = "Select"

export { Select }
