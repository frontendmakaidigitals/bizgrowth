import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-oklch(0.923 0.003 48.717) px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-oklch(0.709 0.01 56.259) focus:ring-offset-2 dark:border-oklch(1 0 0 / 10%) dark:focus:ring-oklch(0.553 0.013 58.071)",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-oklch(0.216 0.006 56.043) text-oklch(0.985 0.001 106.423) shadow hover:bg-oklch(0.216 0.006 56.043)/80 dark:bg-oklch(0.923 0.003 48.717) dark:text-oklch(0.216 0.006 56.043) dark:hover:bg-oklch(0.923 0.003 48.717)/80",
        secondary:
          "border-transparent bg-oklch(0.97 0.001 106.424) text-oklch(0.216 0.006 56.043) hover:bg-oklch(0.97 0.001 106.424)/80 dark:bg-oklch(0.268 0.007 34.298) dark:text-oklch(0.985 0.001 106.423) dark:hover:bg-oklch(0.268 0.007 34.298)/80",
        destructive:
          "border-transparent bg-oklch(0.577 0.245 27.325) text-destructive-foreground shadow hover:bg-oklch(0.577 0.245 27.325)/80 dark:bg-oklch(0.704 0.191 22.216) dark:hover:bg-oklch(0.704 0.191 22.216)/80",
        outline: "text-oklch(0.147 0.004 49.25) dark:text-oklch(0.985 0.001 106.423)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
