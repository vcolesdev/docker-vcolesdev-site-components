import { gsap } from "gsap";

const HIDDEN = { autoAlpha: 0, display: "none", opacity: 0 } as gsap.TweenVars;
const VISIBLE = { autoAlpha: 1, display: "block", opacity: 1 } as gsap.TweenVars;

const tweens = {
  hidden: { ...HIDDEN },
  visible: { ...VISIBLE },
};

export { tweens, HIDDEN, VISIBLE };
