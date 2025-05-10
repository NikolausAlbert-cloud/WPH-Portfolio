import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-sm-regular placeholder:text-neutral-200 bg-neutral-900 outline-none h-42 w-full rounded-2xl p-4 md:text-md-regular md:py-3",
         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
