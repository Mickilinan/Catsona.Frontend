import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all duration-200",
        secondary: "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 transform hover:-translate-y-0.5 transition-all duration-200",
        destructive: "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 transform hover:-translate-y-0.5 transition-all duration-200",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary/10 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200",
        ghost: "text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
