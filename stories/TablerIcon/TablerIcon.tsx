import { TabIcons } from "@/stories/TablerIcon/icons";
import * as React from "react";
import { ForwardedRef, Suspense, forwardRef, lazy, useEffect, useState } from "react";

/**
 * Tabler Icon Name
 * @type {TablerIconName}
 */
export type TablerIconName = keyof typeof TabIcons;

/**
 * @interface TablerIconApi
 */
export interface TablerIconApi {
  color?: string;
  currentIcon?: TablerIconName;
  size?: number;
  stroke?: number;
  title?: string;
  //viewBox?: number;
}

/**
 * @const DEFAULT_TABLER_ICON
 */
export const DEFAULT_TABLER_ICON = "IconAlien";

/**
 * @const DEFAULT_TABLER_COLOR
 */
export const DEFAULT_TABLER_COLOR = "currentColor";

/**
 * @const DEFAULT_TABLER_SIZE
 */
export const DEFAULT_TABLER_SIZE = 24;

/**
 * @const DEFAULT_TABLER_STROKE
 */
export const DEFAULT_TABLER_STROKE = 2;

/**
 * @const DEFAULT_TABLER_TITLE
 */
export const DEFAULT_TABLER_TITLE = "";

/**
 * Template
 * @param currentIcon
 * @param props
 */
export function Template({ currentIcon, ...props }: TablerIconApi) {
  const icon = currentIcon.toString();
  const importString = import(`../../node_modules/@tabler/icons-react/dist/esm/icons/${icon}.mjs`);

  const DynamicIcon = lazy(() => importString);
  return (
    <Suspense fallback={<div>"</div>}>
      <DynamicIcon {...props} />
    </Suspense>
  );
}

/**
 * TablerIcon Component
 */
export const TablerIcon = forwardRef(function TablerIcon(
  { ...props }: TablerIconApi,
  ref: ForwardedRef<HTMLSpanElement>
) {
  const { color, currentIcon, size, stroke, title } = props;

  useEffect(() => {}, [props]);

  const DefaultIcon = () => (
    <Template
      currentIcon={DEFAULT_TABLER_ICON}
      color={DEFAULT_TABLER_COLOR}
      size={DEFAULT_TABLER_SIZE}
      stroke={DEFAULT_TABLER_SIZE}
      title={DEFAULT_TABLER_TITLE}
      {...props}
    />
  );

  const output = (props && (
    <Template currentIcon={currentIcon} stroke={stroke} size={size} color={color} title={title} {...props} />
  )) || <DefaultIcon />;

  return <span ref={ref}>{output}</span>;
});
