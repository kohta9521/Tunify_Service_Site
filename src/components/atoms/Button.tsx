import React from "react";

// tv
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ButtonProps = VariantProps<typeof button>;

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={button({ size: props.size, color: props.color })}
    >
      Click me
    </button>
  );
};

export default Button;
