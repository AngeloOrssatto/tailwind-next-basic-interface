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
      primary: ["bg-violet-500 text-white", "hover:bg-violet-700"],
      outline: ["border border-zinc-300 text-zinc-700", "hover:bg-zinc-50"],
      ghost: ["rounded-md px-2 shadow-none", "hover:bg-zinc-50"],
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {}

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant: variant })} />;
}
