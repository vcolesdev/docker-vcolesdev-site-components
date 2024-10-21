import { useTweenVars } from "@/src/anim/hooks/useTweenVars";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { tweens } from "../nav";

function useNavTweens() {
  const { actions } = useTweenVars();
  const { createTween } = actions;

  const navTween = useRef<gsap.TweenVars | null>(null);
  const navItemTween = useRef<gsap.TweenVars | null>(null);

  useEffect(() => {
    navTween.current = createTween({ ...tweens.hidden, ...tweens.visible });
    navItemTween.current = createTween(tweens.item);
  }, [navTween, navItemTween]);

  return { navTween, navItemTween };
}

export { useNavTweens };
