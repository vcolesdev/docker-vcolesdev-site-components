import { useAnimatedIcon } from "@/src/anim/hooks/useAnimatedIcon";
import { drawVariants } from "@/src/anim/variants/drawVariants";
import { SVG_SETTINGS as settings } from "@/src/hooks/useSVGSettings";
import { cn } from "@/src/utils/cn";
import { MotionPaths } from "@/stories/AnimatedIcon/components/MotionPaths";
import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSVGApi {
  children: React.ReactNode | React.ReactNode[];
  extraClasses: string;
  size?: number;
  strokeWidth?: number;
}

const SVG_CLASSES = cn(["icon", "icon-tabler", "icons-tabler-outline"]);

function AnimatedSVG({ children, ...rest }: AnimatedSVGApi) {
  const { extraClasses, size, strokeWidth } = rest;

  const { animate, scope, setClassName, ...svg } = useAnimatedIcon();

  const [svgSize, setSvgSize] = useState<AnimatedSVGApi["size"] | null>(null);
  const [svgStrokeWidth, setSvgStrokeWidth] = useState<number | null>(null);

  useEffect(() => {
    setSvgSize(size);
    setSvgStrokeWidth(strokeWidth);

    setClassName(extraClasses);
  }, [svgSize, svgStrokeWidth]);

  return (
    <motion.svg
      animate="animate"
      className={`${SVG_CLASSES} ${extraClasses}`}
      fill="none"
      height={svgSize}
      initial="rest"
      onHoverStart={svg.onHoverStart}
      ref={scope}
      stroke="currentColor"
      strokeWidth={svgStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={`0 0 24 24`}
      xmlns={settings.xmlns}
      width={svgSize}
    >
      <motion.path />
      {/* The rest of the paths are generated here... */}
      {children}
    </motion.svg>
  );
}

interface AnimatedIconApi {
  iconName: string;
  paths: string[];
  size?: number;
}

const AnimatedIcon = ({ iconName, paths, ...rest }: AnimatedIconApi) => {
  const { size } = rest;

  const iconPrefix = "icon-tabler";
  const elements = <MotionPaths paths={paths} variants={drawVariants} />;

  return (
    <motion.div>
      <AnimatedSVG extraClasses={`${iconPrefix}-${iconName}`} strokeWidth={1.5} size={size || 24}>
        {elements}
      </AnimatedSVG>
    </motion.div>
  );
};

export { AnimatedIcon, AnimatedSVG };
export type { AnimatedSVGApi };
