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
  "px-4",
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
      className={`${className} ${selectedValue === value ? SELECTED_CLASSES : BASE_CLASSES}`}
      onClick={() => onChange(value)}
      ref={ref}
    >
      {children}
    </button>
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

export { ToggleButton, ToggleGroup };
