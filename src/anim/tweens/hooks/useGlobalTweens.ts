import { useTweenVars } from "@/src/anim/hooks/useTweenVars";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { tweens } from "../nav";

function useGlobalTweens() {
  const { actions } = useTweenVars();
  const { createTween } = actions;

  const [globalTween, setGlobalTween] = useState<gsap.TweenVars | {} | null>(null);

  useEffect(() => {
    setGlobalTween(createTween({ ...tweens.hidden, ...tweens.visible }));
  }, [globalTween]);

  return { globalTween };
}

export { useGlobalTweens };
