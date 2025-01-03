import { cn } from "@/src/utils/cn";

// Base styles
export const HEADING_BASE_CN = cn(["relative", "my-0", "leading-normal", "text-deep-brown", "dark:text-sky"]);

// Sizes
const HEADING_SIZE_XS = cn(["font-body", "text-[1.025rem]", "font-bold", "tracking-tight", "uppercase"]);
const HEADING_SIZE_SM = cn(["font-heading", "text-[1.5rem]", "font-bold", "tracking-wide"]);
const HEADING_SIZE_MD = cn(["font-heading", "text-[2rem]", "font-bold", "tracking-loose"]);
const HEADING_SIZE_LG = cn(["font-heading", "text-[2.5rem]", "font-bold", "tracking-loose"]);
const HEADING_SIZE_XL = cn([
  "font-heading",
  "text-[2.25rem]",
  "font-bold",
  "tracking-loose",
  "transition",
  "duration-200",
  "ease-in-out-cubic",
  "md:text-[2.5rem]",
  "md:text-[2.75rem]",
  "xl:text-[3rem]",
]);

/**
 * Classnames for the Heading component.
 */
export const classNames = {
  base: HEADING_BASE_CN,
  sizes: {
    xs: HEADING_SIZE_XS,
    sm: HEADING_SIZE_SM,
    md: HEADING_SIZE_MD,
    lg: HEADING_SIZE_LG,
    xl: HEADING_SIZE_XL,
  },
};
