import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useTimeline } from "../../hooks/useTimeline";
import { useNavTweens } from "@/src/anim/tweens/hooks/useNavTweens";
import { elements } from "@/src/anim/elements";

const CURRENT_FILE = __filename;
const DEFAULT_SETTINGS = {
  ease: "none",
  reversed: true,
} as gsap.TimelineVars;

function useNavTimeline() {
  let timeline = useRef<GSAPTimeline | null>(null);

  const { create } = useTimeline();
  const { navTween } = useNavTweens();

  const { nav } = elements;

  const missingTimeline = !timeline.current;
  const missingElement = !nav.html;

  const dispatchNavTimeline = () => {
    if (missingTimeline) {
      console.error("Nav Timeline is missing.", CURRENT_FILE);
    } else if (missingElement) {
      console.error("Can not find timeline element.", CURRENT_FILE);
    } else {
      timeline.current.fromTo(nav.html as gsap.TweenTarget, navTween.current.from, navTween.current.to);
    }
  };

  useEffect(() => {
    if (!timeline) {
      timeline.current = create({ ...DEFAULT_SETTINGS });
    }
  }, [timeline]);

  return { timeline, dispatchNavTimeline };
}

function useNavItemTimeLine() {
  let timeline = useRef<GSAPTimeline | null>(null);

  const { create } = useTimeline();
  const { navItemTween } = useNavTweens();

  const { navItem } = elements;

  const missingTimeline = !timeline.current;
  const missingElement = !navItem.selector;

  const dispatchNavItemTimeline = () => {
    if (missingTimeline) {
      console.error("NavItem Timeline is missing.", CURRENT_FILE);
    } else if (missingElement) {
      console.error("Can not find timeline element.", CURRENT_FILE);
    } else {
      timeline.current.fromTo(navItem.selector, navItemTween.current.from, navItemTween.current.to);
    }
  };

  useEffect(() => {
    if (!timeline) {
      timeline.current = create({ ...DEFAULT_SETTINGS });
    }
  }, [timeline]);

  return { timeline, dispatchNavItemTimeline };
}

export { useNavTimeline, useNavItemTimeLine };
