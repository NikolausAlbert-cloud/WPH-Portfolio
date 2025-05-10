import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-sm-regular placeholder:text-neutral-200 bg-neutral-900 outline-none h-12 w-full rounded-2xl p-3 md:text-md-regular md:py-[2.25]",
         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
