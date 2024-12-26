import * as React from "react";
import { ForwardedRef, Suspense, forwardRef, lazy, useEffect, useState } from "react";

import { TabIcons } from "./icons";

type TablerIconName = keyof typeof TabIcons;

interface TablerIconApi {
  color?: string;
  currentIcon?: TablerIconName;
  size?: number;
  stroke?: number;
  title?: string;
  //viewBox?: number;
}

const TablerIcon = forwardRef(function TablerIcon({ ...props }: TablerIconApi, ref: ForwardedRef<HTMLSpanElement>) {
  const {
    color,
    currentIcon,
    size,
    stroke,
    title,
    //viewBox
  } = props;

  const [iconName, setIconName] = useState<TablerIconName | null>(null);
  const [iconColor, setIconColor] = useState<string | "currentColor">("currentColor");
  const [iconSize, setIconSize] = useState<number | 24>(24);
  const [iconStroke, setIconStroke] = useState<number | 2>(2);
  const [iconTitle, setIconTitle] = useState<string | "">("");
  //const [iconViewBox, setIconViewBox] = useState<number | null>(null);

  useEffect(() => {
    setIconColor(color);
    setIconName(currentIcon || "IconAlien");
    setIconSize(size);
    setIconStroke(stroke);
    setIconTitle(title);
    //setIconViewBox(viewBox);
  }, [
    iconColor,
    iconName,
    iconSize,
    iconStroke,
    iconTitle,
    //iconViewBox
  ]);

  function Icon({ currentIcon, ...props }: TablerIconApi) {
    const DynamicIcon = lazy(() => import(`../../node_modules/@tabler/icons-react/dist/esm/icons/${currentIcon}.mjs`));
    return (
      <Suspense fallback={<div>"</div>}>
        <DynamicIcon {...props} />
      </Suspense>
    );
  }

  return (
    <span ref={ref}>
      <Icon currentIcon={iconName} stroke={iconStroke} size={iconSize} color={iconColor} title={iconTitle} {...props} />
    </span>
  );
});

export { TablerIcon, TablerIconApi, TablerIconName };
