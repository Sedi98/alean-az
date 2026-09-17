import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => (
  <textarea className={cn("flex min-h-[140px] w-full resize-none rounded-[14px] border border-black/[0.06] bg-[#f7f7fa] px-5 py-4 font-sans text-sm text-[#14141a] outline-none placeholder:text-[#8c8c99] focus:border-[#7366e5]", className)} ref={ref} {...props} />
))
Textarea.displayName = "Textarea"

export { Textarea }
