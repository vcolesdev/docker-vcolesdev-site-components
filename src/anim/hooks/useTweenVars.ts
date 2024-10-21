import gsap from "gsap";
import { useState } from "react";

interface TweenVarsApi extends gsap.TweenVars {}

function useTweenVars() {
  const [from, setFrom] = useState<gsap.TweenVars | null>({});
  const [to, setTo] = useState<gsap.TweenVars | null>({});

  const createTween = ({ from, to }: TweenVarsApi) => {
    return { ...from, ...to };
  };

  return {
    state: { from, to },
    actions: { createTween, setFrom, setTo },
  };
}

export { useTweenVars, TweenVarsApi };
