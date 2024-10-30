import { cn } from "@/src/utils/cn";
import { ToggleGroupContext } from "@/stories/ToggleGroup/context";
import { ComponentPropsWithRef, ForwardedRef, forwardRef, useContext } from "react";
import * as React from "react";

type ToggleGroupButtonBaseApi = {
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  pos?: "a" | "b" | "c";
  value: string;
};

type ToggleGroupButtonApi = ToggleGroupButtonBaseApi &
  Omit<ComponentPropsWithRef<"button">, keyof ToggleGroupButtonBaseApi>;

const BASE_CLASSES = cn([
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

const TOGGLE_BUTTON = {
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

const SELECTED_CLASSES = cn([]);

const ToggleGroupButtonBase = forwardRef(function ToggleButton(
  { children, className, value, ...rest }: ToggleGroupButtonApi,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { value: selectedValue, onChange } = useContext(ToggleGroupContext);

  return (
    <button
      {...rest}
      className={`${TOGGLE_BUTTON.element} ${selectedValue === value ? SELECTED_CLASSES : BASE_CLASSES} ${className}`}
      onClick={() => onChange(value)}
      ref={ref}
    >
      {children}
    </button>
  );
});

const ToggleGroupButton = forwardRef(function ToggleGroupButton(
  { children, pos, value, ...rest }: ToggleGroupButtonApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  return pos === "a" ? (
    <ToggleGroupButtonBase className={`${TOGGLE_BUTTON.first}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : pos === "b" ? (
    <ToggleGroupButtonBase className={`${TOGGLE_BUTTON.second}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : pos === "c" ? (
    <ToggleGroupButtonBase className={`${TOGGLE_BUTTON.third}`} value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  ) : (
    <ToggleGroupButtonBase value={value} {...rest}>
      {children}
    </ToggleGroupButtonBase>
  );
});

export { ToggleGroupButtonBase, ToggleGroupButton };
