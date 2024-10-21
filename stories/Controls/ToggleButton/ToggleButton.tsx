import { cn } from "@/src/utils/cn";
import * as React from "react";
import { ForwardedRef, KeyboardEventHandler, forwardRef, useEffect, useState } from "react";

interface ToggleButtonApi {
  ariaLabel?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
  content?: {
    selected: React.ReactNode | React.ReactNode[] | string;
    unselected: React.ReactNode | React.ReactNode[] | string;
  };
  data: Record<string, unknown>;
  disabled?: boolean;
  id?: string;
  isSelected?: boolean;
  label?: string;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  value?: string;
}

const ROOT_CLASSES = cn([
  "flex",
  "items-center",
  "justify-center",
  "rounded-lg",
  "border-[1.5px]",
  "border-transparent",
  "px-3",
  "py-3",
  "font-semibold",
  "transition",
  "duration-300",
  "ease-in-out-cubic",
]);

const UNSELECTED_CLASSES = cn([
  // Light classes
  "bg-white/50",
  "text-melon",
  // Dark classes
  "dark:bg-slate-800",
  "dark:text-freshwater-blue",
  "dark:hover:text-baby-blue",
]);

const SELECTED_CLASSES = cn([
  // Light classes
  "bg-white",
  "border-melon",
  // Dark classes
  "dark:bg-slate-800",
  "dark:text-baby-blue",
  "dark:border-freshwater-blue",
]);

function useToggleButton() {
  const [selected, setIsSelected] = useState(false);
  const [btnContent, setBtnContent] = useState<ToggleButtonApi["content"]>(null);
  const [boundData, setBoundData] = useState<ToggleButtonApi["data"]>(null);

  function handleChange() {
    setIsSelected(!selected);
  }

  function handleContent() {
    setBtnContent({
      selected: "Selected",
      unselected: "Unselected",
    });
  }

  return {
    boundData,
    btnContent,
    handleChange,
    handleContent,
    selected,
    setBoundData,
  };
}

const ToggleButton = forwardRef(function (
  { ariaLabel, ...rest }: ToggleButtonApi,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { content, data, id, ...props } = rest;

  const { boundData, handleChange, handleContent, selected, setBoundData } = useToggleButton();

  useEffect(() => {
    console.log("selected", selected);
    setBoundData(data);
  }, [boundData, selected]);

  return (
    <button
      aria-label={ariaLabel}
      className={`${ROOT_CLASSES} ${selected ? SELECTED_CLASSES : UNSELECTED_CLASSES}`}
      id={id}
      name={id}
      onClick={(event) => {
        event.target && (event.target as HTMLButtonElement).focus();
        handleChange();
        handleContent();
      }}
      onKeyDown={(event) => {
        const ESC = "Escape";
        const SPACE = "Space";
        const key = event.key;

        if (key === ESC) {
          event.preventDefault();
          event.stopPropagation();

          // Remove focus from the button
          event.target && (event.target as HTMLButtonElement).blur();
          return;
        }

        if (key === SPACE) {
          event.preventDefault();
          event.stopPropagation();
          handleChange();
          return;
        }
      }}
      ref={ref}
      {...props}
    >
      {selected ? content?.selected : content?.unselected}
    </button>
  );
});

export { ToggleButton, ToggleButtonApi };
