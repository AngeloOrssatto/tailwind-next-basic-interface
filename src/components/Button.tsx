import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "rounded-lg text-sm font-semibold shadow-sm py-2 px-4",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary: [
        "bg-violet-600 text-white",
        "hover:bg-violet-700",
        "dark:bg-violet-500 dark:hover:bg-violet-600",
      ],
      outline: [
        "border border-zinc-300 text-zinc-700",
        "hover:bg-zinc-50",
        "dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800",
      ],
      ghost: [
        "rounded-md px-2 shadow-none text-zinc-500",
        "hover:bg-zinc-50",
        "dark:hover:bg-zinc-800 dark:text-zinc-400",
      ],
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {}

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ variant: variant, className })}
    />
  );
}
