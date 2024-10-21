import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";

interface ScrollTriggerApi extends ScrollTrigger.Vars {}

/**
 * Hook for handling ScrollTrigger instances.
 * @param vars - ScrollTrigger variables.
 */
function useScrollTrigger({ ...vars }: ScrollTriggerApi) {
  const { end, start, trigger, toggleClass } = vars;

  const [instance, setInstance] = useState<ScrollTrigger | null>(null);

  /**
   * Creates a ScrollTrigger instance.
   * @function create
   */
  const create = () => ScrollTrigger.create({ ...vars });

  /**
   * Creates a basic ScrollTrigger instance.
   * @function createBasic
   */
  const createBasic = () =>
    ScrollTrigger.create({
      end,
      start,
      toggleClass,
      trigger,
    });

  return { create, createBasic, instance, setInstance };
}

export { useScrollTrigger };
