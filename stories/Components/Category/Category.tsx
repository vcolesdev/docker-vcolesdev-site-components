import { useProjectCategories } from "@/src/hooks/use-project-categories";
import { cn } from "@/src/utils/cn";
import { TablerIcon, TablerIconApi } from "@/stories/Components/TablerIcon/TablerIcon";
import * as React from "react";
import { useEffect } from "react";

/**
 * @interface CategoryApi
 */
export interface CategoryApi {
  currentIcon?: TablerIconApi["currentIcon"];
  hasIcon?: boolean;
  name?: string;
}

/**
 * @const classnames
 */
export const classnames = {
  container: cn(["flex", "flex-col", "space-y-2"]),
  root: cn(["group/project-category", "relative", "inline-flex", "items-center", "space-x-2"]),
  span: cn([
    "group/project-category",
    "inline-block",
    "font-semibold",
    "text-body-color",
    "cursor-pointer",
    "transition",
    "duration-200",
    "ease-in-out-cubic",
    "dark:text-body-color-dark",
    "group-hover/project-category:translate-x-[5px]",
  ]),
};

/**
 * Category
 * @param props CategoryApi
 */
export function Category(props: CategoryApi) {
  return (
    <div className={classnames.root}>
      {props.hasIcon && <TablerIcon color="currentColor" currentIcon={props.currentIcon} size={16} stroke={2} />}
      <span className={classnames.span}>{props.name || "Example Category"}</span>
    </div>
  );
}

/**
 * ProjectCategoriesList
 * @param props CategoryApi
 */
export function ProjectCategoriesList(props: CategoryApi) {
  const { projectCategories } = useProjectCategories();

  useEffect(() => {}, [projectCategories]);

  return (
    <div className={classnames.container}>
      {(projectCategories &&
        projectCategories.map((category) => (
          <Category
            hasIcon={props.hasIcon}
            currentIcon={props.currentIcon || "IconChevronRight"}
            key={category._id}
            name={category.name}
          />
        ))) || <p>No Categories found.</p>}
    </div>
  );
}
