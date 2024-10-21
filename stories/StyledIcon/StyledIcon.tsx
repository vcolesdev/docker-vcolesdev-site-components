import { cn } from "@/src/utils/cn";
import { Button } from "@/stories/Controls/Button";
import { TablerIcon, TablerIconApi } from "@/stories/TablerIcon/TablerIcon";

interface StyledIconApi extends TablerIconApi {
  srOnlyText?: string;
}

function StyledIcon(props: StyledIconApi) {
  const { color, currentIcon, size, stroke, srOnlyText, ...rest } = props;

  const classes = cn([
    "cursor-pointer",
    "relative",
    "inline-block",
    "px-2",
    "py-2",
    "rounded-[8px]",
    "text-[#a0746d]",
    "bg-transparent",
    "border-2",
    "border-[#a0746d]",
    "shadow-md",
    "shadow-theme-light",
    "transition",
    "transition-all",
    "ease-in-out-cubic",
    "duration-300",
    "hover:bg-tree-bark",
    "hover:border-tree-bark",
    "hover:text-white",
    "hover:shadow-lg",
    "hover:shadow-theme-light",
    "active:shadow-sm",
    "active:shadow-theme-light",
    "dark:text-freshwater-blue",
    "dark:bg-transparent",
    "dark:border-2",
    "dark:border-freshwater-blue",
    "dark:shadow-theme-dark",
    "dark:hover:bg-baby-blue",
    "dark:hover:border-baby-blue",
    "dark:hover:text-slate-700",
    "dark:hover:shadow-theme-dark",
  ]);

  return (
    <div className={classes}>
      <TablerIcon color="currentColor" currentIcon={currentIcon} size={size} stroke={stroke} {...rest} />
      <span className="sr-only">{srOnlyText || currentIcon}</span>
    </div>
  );
}

export { StyledIcon, StyledIconApi };
