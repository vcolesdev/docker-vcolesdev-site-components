import { gsap } from "gsap";
import { useState } from "react";

/**
 * Hook for handling GSAP timelines.
 */
function useTimeline() {
  const [timeline, setTimeline] = useState(null);

  const create = ({ ...vars }: gsap.TimelineVars) => gsap.timeline({ paused: true, ...vars });

  return { create, tl: { timeline, setTimeline } };
}

export { useTimeline };
