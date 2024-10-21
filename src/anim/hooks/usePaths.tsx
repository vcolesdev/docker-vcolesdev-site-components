import { Variants, motion } from "framer-motion";

interface PathsApi {
  paths: string[];
  variants: Variants;
}

function usePaths(props: PathsApi) {
  const { paths, variants } = props;

  const output = paths.map((path, i) => <motion.path key={`motion-path-${i}`} d={path} variants={variants} />);

  return {
    paths: output,
  };
}

export { usePaths };
