import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge class names and tailwind classes.
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
