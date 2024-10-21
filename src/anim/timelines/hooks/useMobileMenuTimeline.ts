import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTimeline } from "@/src/anim/hooks/useTimeline";
import { elements } from "@/src/anim/elements";
import { useMobileMenuTweens } from "@/src/anim/tweens/hooks/useMobileMenuTweens";

const CURRENT_FILE = __filename;
const DEFAULT_SETTINGS = {
  ease: "none",
  reversed: true,
} as gsap.TimelineVars;

function useMobileMenuTimeline() {
  let timeline = useRef<GSAPTimeline | null>(null);

  const { create } = useTimeline();
  const { logoTween, mobileMenuTween, mobileMenuLinkTween, overlayTween } = useMobileMenuTweens();

  const { mobileMenu, mobileMenuLink, mobileMenuLogo, overlay } = elements;

  const missingTimeline = !timeline.current;
  const missingElement = !mobileMenu.html;

  const dispatchMobileMenuTimeline = () => {
    if (missingTimeline) {
      console.error("MobileMenu Timeline is missing.", CURRENT_FILE);
    } else if (missingElement) {
      console.error("Can not find timeline element.", CURRENT_FILE);
    } else {
      timeline.current.fromTo(overlay.html as gsap.TweenTarget, overlayTween.current.from, overlayTween.current.to);
      timeline.current.fromTo(
        mobileMenu.html as gsap.TweenTarget,
        mobileMenuTween.current.from,
        mobileMenuTween.current.to
      );
      timeline.current.fromTo(mobileMenuLogo.html as gsap.TweenTarget, logoTween.current.from, logoTween.current.to);
      timeline.current.fromTo(
        mobileMenuLink.html as gsap.TweenTarget,
        mobileMenuLinkTween.current.from,
        mobileMenuLinkTween.current.to
      );
    }
  };

  useEffect(() => {
    timeline.current = create({ ...DEFAULT_SETTINGS });
  }, [timeline]);

  return { timeline, dispatchMobileMenuTimeline };
}

export { useMobileMenuTimeline };
