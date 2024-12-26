import { drawVariants } from "@/src/anim/variants/drawVariants";
import { motion } from "framer-motion";
import * as React from "react";

import { MotionTemplate } from "./MotionTemplate";
import { MotionPaths } from "./components/MotionPaths";

/**
 * iconDrawVariants
 * The draw variants of the icon paths.  This is an object with the following properties:
 * - rest: The rest state of the icon.
 * - animate: The animate state of the icon.
 */
const iconDrawVariants = drawVariants;

/**
 * @interface AnimatedIconApi
 */
interface AnimatedIconApi {
  // The name of the icon.
  iconName: string;

  // The paths of the icon, represented by an array of strings.
  paths: string[];

  // The size of the icon.  Ex: 64
  size?: number;
}

/**
 * MotionContainer
 * @param children - The children of the container.
 */
function MotionContainer({ children }: { children: React.ReactNode }) {
  return <motion.div>{children}</motion.div>;
}

/**
 * AnimatedIcon
 * @param {AnimatedIconApi} props - The properties of the component represented by AnimatedIconApi.
 */
function AnimatedIcon(props: AnimatedIconApi) {
  const { iconName, paths, size } = props;
  const iconPrefix = "icon-tabler";

  return (
    <MotionContainer>
      <MotionTemplate extraClasses={`${iconPrefix}-${iconName}`} strokeWidth={1.5} size={size || 24}>
        <MotionPaths paths={paths} variants={iconDrawVariants} />
      </MotionTemplate>
    </MotionContainer>
  );
}

export { AnimatedIcon, AnimatedIconApi };
