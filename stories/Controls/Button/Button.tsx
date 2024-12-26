import { cn } from "@/src/utils/cn";
import { classnames } from "@/stories/Controls/Button/Button.classes";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { ForwardedRef } from "react";

const exampleClassnames = cn([
  "inline-flex",
  "items-center",
  "justify-center",
  "border",
  "whitespace-nowrap",
  "font-medium",
  "focus-visible:opacity-80",
  //"disabled:bg-neutral-alpha-3",
  //"disabled:text-neutral-alpha-8",
  "border-transparent",
  "px-5",
  "py-3",
  "rounded-lg",
  //"text-3",
  //"bg-primary-9",
  //"text-white",
  //"hover:bg-primary-10",
  //"focus-visible:bg-primary-10",
]);

/**
 * @const buttonSizes - Button sizes
 */
export const buttonSizes = {
  example: classnames.example,
  default: classnames.size.default,
  sm: classnames.size.sm,
  lg: classnames.size.lg,
  icon: classnames.size.icon,
};

/**
 * @const buttonVariants - Button variants
 */
export const buttonVariants = {
  default: classnames.variant.default,
  destructive: classnames.variant.destructive,
  outline: classnames.variant.outline,
  secondary: classnames.variant.secondary,
  ghost: classnames.variant.ghost,
  link: classnames.variant.link,
};

export const buttonCva = cva(classnames.root, {
  variants: {
    variant: buttonVariants,
    size: buttonSizes,
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TemplateApi extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonCva> {
  asChild?: boolean;
}

export interface ButtonApi extends TemplateApi {}

/**
 * Template Component
 */
export const Template = React.forwardRef<HTMLButtonElement, TemplateApi>(
  ({ className, size, variant, asChild = false, ...props }: TemplateApi, ref: ForwardedRef<HTMLButtonElement>) => {
    // If asChild is true, use the Slot component from Radix UI
    const Comp = asChild ? Slot : "button";

    // Use the cvaClassnames function to generate the classnames
    const classnames = cn(buttonCva({ variant, size, className }));

    // Render the composition
    return <Comp className={classnames} ref={ref} {...props} />;
  }
);

/**
 * Button Component
 */
export function Button(props: ButtonApi) {
  return <Template {...props}>{props.children}</Template>;
}

Button.displayName = "Button";