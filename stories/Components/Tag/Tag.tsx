import { useProjectTags } from "@/src/hooks/use-project-tags";
import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";

/**
 * @type TagSize
 */
export type TagSize = "sm" | "md" | "lg" | "xl";

/**
 * @interface TagApi
 */
export interface TagApi {
  size?: TagSize;
  tagContent?: string;
}

/**
 * @const classnames
 */
export const classnames = {
  root: cn([
    "cursor-pointer",
    "inline-flex",
    "items-center",
    "justify-center",
    "border-[1.5px]",
    "border-primary",
    "text-primary",
    "font-body",
    "font-semibold",
    "transition-all",
    "ease-in-out-cubic",
    "duration-300",
    "shadow-md",
    "shadow-theme-light",
    "hover:shadow-sm",
    "hover:bg-primary",
    "hover:text-white",
    "dark:bg-transparent",
    "dark:border-slate-400/20",
    "dark:shadow-theme-dark",
    "dark:text-rose",
    "dark:hover:bg-transparent",
    "dark:hover:text-rose",
    "dark:hover:border-rose",
  ]),
  span: cn(["block"]),
  sizes: {
    sm: cn(["rounded-[5px]", "px-2", "py-[6px]", "text-[12px]"]),
    md: cn(["rounded-[6px]", "px-2", "py-[8px]", "text-[14px]"]),
    lg: cn(["rounded-[7px]", "px-3", "py-[12px]", "text-[16px]"]),
    xl: cn(["rounded-[8px]", "px-4", "py-[14px]", "text-[18px]"]),
  },
};

const tagSizes = {
  sm: classnames.sizes.sm,
  md: classnames.sizes.md,
  lg: classnames.sizes.lg,
  xl: classnames.sizes.xl,
};

/**
 * Tag
 * @param
 */
export function Tag(props: TagApi) {
  const { size, tagContent } = props;

  const [tagSize, setTagSize] = useState<TagSize>("md");

  const composedTagClasses = cn([classnames.root, tagSizes[tagSize]]);

  useEffect(() => {
    setTagSize(size || "md");
  }, [tagSize]);

  return (
    <div className={composedTagClasses}>
      <span className={classnames.span}>{tagContent || "Tag"}</span>
    </div>
  );
}

/**
 * ProjectTagsList
 * @param props TagApi
 */
export function ProjectTagsList(props: TagApi) {
  const { projectTags } = useProjectTags();

  useEffect(() => {}, [projectTags]);

  return <>{projectTags?.map((tag) => <Tag key={tag._id} tagContent={tag.title} size={props.size || "md"} />)}</>;
}
