import { useTweenVars } from "@/src/anim/hooks/useTweenVars";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { tweens } from "../mobile-menu";

function useMobileMenuTweens() {
  const { actions } = useTweenVars();
  const { createTween } = actions;

  const logoTween = useRef<gsap.TweenVars | null>(null);
  const mobileMenuLinkTween = useRef<gsap.TweenVars | null>(null);
  const mobileMenuTween = useRef<gsap.TweenVars | null>(null);
  const overlayTween = useRef<gsap.TweenVars | null>(null);

  useEffect(() => {
    logoTween.current = createTween(tweens.targets.logo);
    mobileMenuTween.current = createTween({ ...tweens.hidden, ...tweens.visible });
    mobileMenuLinkTween.current = createTween(tweens.targets.menuLink);
    overlayTween.current = createTween(tweens.targets.overlay);
  }, [logoTween, mobileMenuTween, mobileMenuLinkTween, overlayTween]);

  return { logoTween, mobileMenuLinkTween, overlayTween, mobileMenuTween };
}

export { useMobileMenuTweens };
