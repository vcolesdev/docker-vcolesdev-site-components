import { useAnimatedIcon } from "@/src/anim/hooks/useAnimatedIcon";
import { SVG_SETTINGS as settings } from "@/src/hooks/useSVGSettings";
import { cn } from "@/src/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import * as React from "react";

/**
 * @interface MotionTemplateApi
 */
interface MotionTemplateApi {
  // The child elements to render.
  children: React.ReactNode | React.ReactNode[];

  // Extra classes to apply to the element.
  extraClasses: string;

  // The size of the SVG element. Ex: 64.
  size?: number;

  // The stroke width of the SVG element. Ex: 2.
  strokeWidth?: number;
}

/**
 * @constant styles
 */
const styles = {
  element: cn(["icon", "icon-tabler", "icons-tabler-outline"]),
};

/**
 * MotionTemplate
 * @param {MotionTemplateApi} props - The properties to pass to the component.
 * @todo We can probably refactor this...
 */
function MotionTemplate(props: MotionTemplateApi) {
  const { children, extraClasses, size, strokeWidth } = props;

  const [svgSize, setSvgSize] = useState<MotionTemplateApi["size"] | null>(null);
  const [svgStrokeWidth, setSvgStrokeWidth] = useState<number | null>(null);

  const { animate, scope, setClassName, ...svg } = useAnimatedIcon();

  useEffect(() => {
    setSvgSize(size);
    setSvgStrokeWidth(strokeWidth);

    setClassName(extraClasses);
  }, [svgSize, svgStrokeWidth]);

  return (
    <motion.svg
      animate="animate"
      className={`${styles.element} ${extraClasses}`}
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

export { MotionTemplate };
