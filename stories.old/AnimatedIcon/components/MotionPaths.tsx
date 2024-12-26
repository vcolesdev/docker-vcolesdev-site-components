import { Variants, motion } from "framer-motion";

/**
 * @interface MotionPathsApi
 */
interface MotionPathsApi {
  // A list of strings representing the paths to be animated.
  paths: string[];

  // A list of variants to be applied to the paths.  These control the animation.
  variants: Variants;
}

/**
 * @interace MotionPathApi
 */
interface MotionPathApi {
  // A string representing the path to be animated.
  path: string;

  // A list of variants to be applied to the paths.  These control the animation.
  variants: Variants;
}

/**
 * MotionPaths
 * @param {MotionPathsApi} svg - The SVG to animate.
 */
function MotionPaths(svg: MotionPathsApi) {
  return svg.paths.map((path: string, i: number) => (
    <motion.path key={`motion-path-${i}`} d={path} variants={svg.variants} />
  ));
}

/**
 * MotionPath
 * @param {MotionPathApi} svg - The SVG to animate.
 */
function MotionPath(svg: MotionPathApi) {
  return <motion.path d={svg.path} variants={svg.variants} />;
}

export { MotionPaths, MotionPath };
