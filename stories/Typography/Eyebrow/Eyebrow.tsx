import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import type { EyebrowApi, EyebrowWithIconApi } from "@/stories/Typography/Eyebrow/Eyebrow.api";
import { classnames } from "@/stories/Typography/Eyebrow/Eyebrow.classes";
import * as React from "react";
import { useEffect } from "react";

/**
 * Eyebrow Component
 * @param props
 */
export function Eyebrow(props: EyebrowApi) {
  const { children, id, ref } = props;

  return (
    <div className={`${classnames.base}`} id={id} ref={ref}>
      <span>{children}</span>
    </div>
  );
}

/**
 * EyebrowWithIcon Component
 * @param props
 */
export function EyebrowWithIcon(props: EyebrowWithIconApi) {
  const { children, id, ref, ...icon } = props;

  const Icon = () => (
    <TablerIcon color={icon.iconColor} currentIcon={icon.iconName} size={icon.iconSize} stroke={icon.iconStroke} />
  );

  useEffect(() => {}, [icon]);

  return (
    <div className={classnames.base} id={id} ref={ref}>
      {icon.iconPos === "start" && (
        <span className={classnames.icon}>
          <Icon />
        </span>
      )}
      <span className={classnames.content}>{children}</span>
      {icon.iconPos === "end" && (
        <span className={classnames.icon}>
          <Icon />
        </span>
      )}
    </div>
  );
}
