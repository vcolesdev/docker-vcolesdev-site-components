import { TablerIcon, TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import { ButtonApi } from "@/stories/Controls/Button/Button";
import { Template } from "@/stories/Controls/Button/Button";
import * as React from "react";

export interface IconButtonApi extends ButtonApi {
  iconName: TablerIconName;
  iconPos: "start" | "end";
  iconSize: number;
}

/**
 * IconButton Component
 */
export function IconButton(props: IconButtonApi) {
  const classnames = {
    default: props.iconPos === "start" ? "ps-4" : "pe-4",
    sm: props.iconPos === "start" ? "ps-3" : "pe-3",
    lg: props.iconPos === "start" ? "ps-5" : "pe-5",
  };

  const Icon = () => (
    <TablerIcon color="currentColor" currentIcon={props.iconName} size={props.iconSize || 32} stroke={2} />
  );

  return (
    <Template
      className={props.size === "sm" ? classnames.sm : props.size === "lg" ? classnames.lg : classnames.default}
      {...props}
    >
      {props.iconPos === "start" && (
        <span>
          <Icon />
        </span>
      )}
      {props.children}
      {props.iconPos === "end" && (
        <span>
          <Icon />
        </span>
      )}
    </Template>
  );
}

IconButton.displayName = "IconButton";
