import { cn } from "@/src/utils/cn";
import { ComponentPropsWithRef, ForwardedRef, forwardRef, useContext, useEffect } from "react";
import * as React from "react";

import { ToggleGroupContext } from "../../ToggleGroup/context";

/**
 * @interface ToggleGroupButtonBaseApi
 */
interface ToggleGroupButtonBaseApi {
  // The children elements of the component.
  children: React.ReactNode | React.ReactNode[] | string;

  // The extra classes provided to the element for custom styling.
  extraClasses?: string;

  // The position of the button in the group.
  pos?: "a" | "b" | "c";

  // The HTML value of the button.
  value: string;
}

/** @type ToggleGroupButtonApi - Composed toggle button type. */
type ToggleGroupButtonApi = ToggleGroupButtonBaseApi &
  Omit<ComponentPropsWithRef<"button">, keyof ToggleGroupButtonBaseApi>;

/**
 * @const baseStyles - The base styles of the component.
 */
const baseStyles = cn([
  "px-3",
  "py-3",
  "text-sm",
  "font-semibold",
  "text-gray-600",
  "dark:text-gray-400",
  "dark:bg-gray-800",
  "bg-gray-100",
  "rounded-md",
  "hover:bg-gray-200",
  "focus:outline-none",
  "focus:ring",
  "focus:ring-melon",
  "focus:ring-opacity-50",
  "transition",
  "duration-200",
  "ease-in-out",
]);

/**
 * @const styles - The styles of the component.
 */
const styles = {
  element: cn([
    "bg-[#ffedea]",
    "border-2",
    "border-transparent",
    "text-tree-bark",
    "shadow-sm",
    "hover:bg-white",
    "hover:text-melon",
    "hover:border-melon",
    "focus:bg-white",
    "focus:text-melon",
    "focus:ring-melon",
    "focus:ring-[2px]",
    "focus:ring-offset-1",
    "dark:focus:ring-[1.5px]",
    "dark:bg-transparent",
    "dark:hover:bg-transparent",
    "dark:hover:border-[#768a93]",
    "dark:hover:text-rose",
    "dark:focus:bg-slate-800",
    "dark:focus:text-white",
    "dark:focus:ring-sky",
  ]),
  first: cn(["rounded-tr-none", "rounded-br-none"]),
  second: cn(["rounded-tr-none", "rounded-tl-none", "rounded-br-none", "rounded-bl-none"]),
  third: cn(["rounded-tl-none", "rounded-bl-none"]),
};

/**
 * @const selectedStyles - The selected styles of the component.
 */
const selectedStyles = cn([]);

/**
 * ToggleGroupButtonBase
 * @param {ToggleGroupButtonApi} props - The props of the component
 */
const ToggleGroupButtonBase = forwardRef((props: ToggleGroupButtonApi, ref: ForwardedRef<HTMLButtonElement>) => {
  const { value: selectedValue, onChange } = useContext(ToggleGroupContext);
  const { children, extraClasses, value, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles.element} ${selectedValue === value ? selectedStyles : baseStyles} ${extraClasses}`}
      onClick={() => onChange(value)}
      ref={ref}
    >
      {children}
    </button>
  );
});

/**
 * ToggleGroupButton
 * @param {ToggleGroupButtonApi} props - The props of the component
 * @param {React.ForwardedRef<HTMLDivElement>} ref - The ref of the component
 */
const ToggleGroupButton = forwardRef((props: ToggleGroupButtonApi, ref: ForwardedRef<HTMLDivElement>) => {
  const { children, pos, value, ...rest } = props;

  useEffect(() => {}, [ref]);

  return pos === "a" ? (
    <ToggleGroupButtonBase className={`${styles.first}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : pos === "b" ? (
    <ToggleGroupButtonBase className={`${styles.second}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : pos === "c" ? (
    <ToggleGroupButtonBase className={`${styles.third}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : (
    <ToggleGroupButtonBase value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  );
});

export { ToggleGroupButtonBase, ToggleGroupButton };
