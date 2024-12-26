import { cn } from "@/src/utils/cn";
import * as React from "react";
import { ComponentPropsWithRef, ForwardedRef, forwardRef, useContext } from "react";

import { ToggleGroupContext } from "./context";

type ToggleButtonBaseApi = {
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  value: string;
};

type ToggleButtonApi = ToggleButtonBaseApi & Omit<ComponentPropsWithRef<"button">, keyof ToggleButtonBaseApi>;

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
    "bg-transparent",
    "text-tree-bark",
    "shadow-sm",
    "hover:bg-transparent",
    "hover:text-melon",
    "focus:text-melon",
    "focus:ring-melon",
    "focus:ring-[2px]",
    "focus:ring-offset-1",
    "dark:focus:ring-[1.5px]",
    "dark:bg-transparent",
    "dark:hover:bg-transparent",
    "dark:hover:text-white",
    "dark:focus:bg-slate-800",
    "dark:focus:text-white",
    "dark:focus:ring-sky",
  ]),
  first: cn(["rounded-tr-none", "rounded-br-none"]),
  second: cn(["rounded-tr-none", "rounded-tl-none", "rounded-br-none", "rounded-bl-none"]),
  third: cn(["rounded-tl-none", "rounded-bl-none"]),
};

const SELECTED_CLASSES = cn([]);
const TOGGLE_GROUP_CLASSES = cn([""]);

interface ToggleGroupApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

const ToggleButton = forwardRef(function ToggleButton(
  { children, className, value, ...rest }: ToggleButtonApi,
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

const ToggleButtonA = forwardRef(function ToggleButtonA(
  { children, value, ...rest }: ToggleButtonApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <ToggleButton className={`${TOGGLE_BUTTON.first}`} value={value} {...rest}>
      {children}
    </ToggleButton>
  );
});

const ToggleButtonB = forwardRef(function ToggleButtonB(
  { children, value, ...rest }: ToggleButtonApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <ToggleButton className={`${TOGGLE_BUTTON.second}`} value={value} {...rest}>
      {children}
    </ToggleButton>
  );
});

const ToggleButtonC = forwardRef(function ToggleButtonC(
  { children, value, ...rest }: ToggleButtonApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <ToggleButton className={`${TOGGLE_BUTTON.third}`} value={value} {...rest}>
      {children}
    </ToggleButton>
  );
});

const ToggleGroup = forwardRef(function ToggleGroup(
  { children, ...rest }: ToggleGroupApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {} = rest;

  return (
    <div className={`${TOGGLE_GROUP_CLASSES}`} {...rest} ref={ref}>
      {children}
    </div>
  );
});

export { ToggleButton, ToggleGroup, ToggleButtonA, ToggleButtonB, ToggleButtonC };
