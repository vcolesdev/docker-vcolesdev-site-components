import { Variants, motion } from "framer-motion";

interface MotionPathsApi {
  paths: string[];
  variants: Variants;
}

interface MotionPathApi {
  path: string;
  variants: Variants;
}

function MotionPaths(svg: MotionPathsApi) {
  return svg.paths.map((path: string, i: number) => (
    <motion.path key={`motion-path-${i}`} d={path} variants={svg.variants} />
  ));
}

function MotionPath(svg: MotionPathApi) {
  return <motion.path d={svg.path} variants={svg.variants} />;
}

export { MotionPaths, MotionPath };
