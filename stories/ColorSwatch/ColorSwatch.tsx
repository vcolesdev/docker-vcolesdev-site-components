import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";

interface ColorSwatchApi {
  color?: string;
  size?: "sm" | "md" | "lg";
}

const swatchStyles = {
  element: cn([
    "group/swatch",
    "rounded-xl",
    "shadow-md",
    "translate-y-0",
    "scale-100",
    "delay-75",
    "ease-in-out",
    "duration-300",
    "hover:scale-110",
    "hover:translate-y--1",
  ]),
};

export function ColorSwatch({ ...props }: ColorSwatchApi) {
  const { color, size, ...rest } = props;

  const [swatchColor, setSwatchColor] = useState(null);
  const [swatchSize, setSwatchSize] = useState(null);

  const handleSize = () => {
    if (size === "sm") {
      return 32;
    } else if (size === "md") {
      return 64;
    } else if (size === "lg") {
      return 128;
    } else {
      return 64;
    }
  };

  useEffect(() => {
    setSwatchColor(color);
    setSwatchSize(handleSize());
  }, [color, size]);

  return (
    <div
      className={`${swatchStyles.element}`}
      style={{
        backgroundColor: swatchColor,
        maxWidth: swatchSize,
        height: swatchSize - 10,
      }}
    ></div>
  );
}
