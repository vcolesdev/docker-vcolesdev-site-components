import { drawVariants } from "@/src/anim/variants/drawVariants";
import { useAnimate } from "framer-motion";
import { useState } from "react";
import { useDrawPaths } from "@/src/anim/hooks/useDrawPaths";

const defaultIconStyle = "icon-tabler-brand-github";

function useAnimatedIcon() {
  const [className, setClassName] = useState<string>(defaultIconStyle);
  const [scope, animate] = useAnimate();

  return {
    animate: animate,
    drawVariants: drawVariants,
    className: className,
    scope: scope,
    setClassName: setClassName,
    onHoverStart: useDrawPaths(scope),
  };
}

export { useAnimatedIcon };
