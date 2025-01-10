import { cn } from "@/src/utils/cn";
import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as React from "react";

/**
 * @const classnames
 */
const classnames = {
  root: cn([
    "inline-flex",
    "space-x-px",
    "rounded-md",
    "border-[1.5px]",
    "border-primary",
    `bg-[hsl(11,80%,98%)]`,
    `dark:bg-[hsl(225,25%,15%)]`,
  ]),
  groupItem: cn([
    "flex",
    "size-[42px]",
    "items-center",
    "justify-center",
    "first:rounded-l",
    "last:rounded-r",
    "bg-transparent",
    "leading-4",
    "text-body-color",
    "transition",
    "ease-in-out-cubic",
    "duration-300",
    "hover:bg-primary",
    "hover:text-white",
    "focus:z-10",
    //"focus:ring-0",
    "data-[state=on]:bg-primary",
    "data-[state=on]:text-white",
    `dark:hover:bg-[hsl(225,25%,20%)]`,
    "dark:text-body-color-dark",
    "dark:data-[state=on]:bg-[hsl(225,25%,25%)]",
    "dark:data-[state=on]:text-white",
  ]),
};

export function ThemeChanger() {
  return (
    <ToggleGroup.Root className={classnames.root} type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleGroup.Item className={classnames.groupItem} value="light" aria-label="Switch Light Theme">
        <TablerIcon color="currentColor" currentIcon="IconSun" size={18} stroke={2} />
      </ToggleGroup.Item>
      <ToggleGroup.Item className={classnames.groupItem} value="dark" aria-label="Switch Dark Theme">
        <TablerIcon color="currentColor" currentIcon="IconMoon" size={18} stroke={2} />
      </ToggleGroup.Item>
      <ToggleGroup.Item className={classnames.groupItem} value="system" aria-label="Switch System Theme">
        <TablerIcon color="currentColor" currentIcon="IconDeviceDesktop" size={18} stroke={2} />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
