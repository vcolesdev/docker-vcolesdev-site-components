import * as React from "react";
import {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_NAME,
  DEFAULT_ICON_POSITION,
  DEFAULT_ICON_SIZE,
  DEFAULT_ICON_STROKE,
} from "@/stories/Typography/Eyebrow/Eyebrow.const";
import { TablerIconName } from "@/stories/TablerIcon/TablerIcon";

/**
 * The position of the icon in the Eyebrow component.
 * @type IconPosition
 */
export type IconPosition = "start" | "end";

/**
 * @interface EyebrowIcon
 */
export interface EyebrowIcon {
  color?: string | typeof DEFAULT_ICON_COLOR;
  name?: TablerIconName | typeof DEFAULT_ICON_NAME;
  position?: IconPosition | typeof DEFAULT_ICON_POSITION;
  size?: number | typeof DEFAULT_ICON_SIZE;
  stroke?: number | typeof DEFAULT_ICON_STROKE;
}

/**
 * @interface EyebrowApi
 */
export interface EyebrowApi {
  children: React.ReactNode | React.ReactNode[] | string;
  id?: string;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

/**
 * @interface EyebrowWithIconApi
 */
export interface EyebrowWithIconApi extends EyebrowApi {
  iconColor: EyebrowIcon["color"];
  iconName: EyebrowIcon["name"];
  iconPos: EyebrowIcon["position"];
  iconSize: EyebrowIcon["size"];
  iconStroke: EyebrowIcon["stroke"];
}
