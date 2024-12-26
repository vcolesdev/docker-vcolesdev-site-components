import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";

type TagSize = "sm" | "md" | "lg" | "xl";

interface TagApi {
  size?: TagSize;
  tagContent?: string;
}

const tagStyles = {
  element: cn([
    "cursor-pointer",
    "inline-flex",
    "justify-center",
    "items-center",
    "border-[1.5px]",
    "border-[#f4c7be]",
    "text-melon",
    "font-body",
    "font-semibold",
    "transition-all",
    "ease-in-out-cubic",
    "delay-75",
    "duration-300",
    "hover:border-melon",
    "dark:bg-transparent",
    "dark:border-slate-400/20",
    "dark:text-rose",
    "dark:hover:text-rose",
    "dark:hover:border-rose",
  ]),
  span: cn(["block"]),
  sizes: {
    sm: cn(["rounded-[5px]", "h-[24px]", "px-2", "text-[12px]"]),
    md: cn(["rounded-[6px]", "h-[30px]", "px-2", "text-[14px]"]),
    lg: cn(["rounded-[7px]", "h-[36px]", "px-3", "text-[15px]"]),
    xl: cn(["rounded-[8px]", "h-[46px]", "px-4", "text-[16px]"]),
  },
};

const tagSizes = {
  sm: tagStyles.sizes.sm,
  md: tagStyles.sizes.md,
  lg: tagStyles.sizes.lg,
  xl: tagStyles.sizes.xl,
};

function Tag({ ...rest }: TagApi) {
  const { size, tagContent } = rest;

  const [tagSize, setTagSize] = useState<TagSize>("md");

  const composedTagClasses = cn([tagStyles.element, tagSizes[tagSize]]);

  useEffect(() => {
    setTagSize(size);
  }, [tagSize]);

  return (
    <div className={composedTagClasses}>
      <span className={tagStyles.span}>{tagContent || "Tag"}</span>
    </div>
  );
}

export { Tag, TagApi };
