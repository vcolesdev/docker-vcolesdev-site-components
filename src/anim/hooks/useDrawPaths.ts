import { animate, AnimationScope } from "framer-motion";
import { useEffect, useState } from "react";

function useDrawPaths(scope: AnimationScope, selector: string = "path") {
  const [paths, setPaths] = useState<SVGPathElement[]>([]);

  useEffect(() => {
    const paths = scope.current.querySelectorAll(selector);
    setPaths(paths);
  }, []);

  return () => {
    for (const path of paths) {
      animate(
        path,
        { pathLength: [0, 1] },
        {
          bounce: 0,
          duration: 1.2,
          type: "spring",
        }
      );
    }
  };
}

export { useDrawPaths };
