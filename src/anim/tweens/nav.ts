import { tweens as globalTweens } from "./global";

const NAV_ITEM_HIDDEN = {
  autoAlpha: 0,
  opacity: 0,
  y: -100,
} as gsap.TweenVars;

const NAV_ITEM_VISIBLE = {
  autoAlpha: 1,
  duration: 0.4,
  opacity: 1,
  stagger: 0.1,
  y: 0,
} as gsap.TweenVars;

const tweens = {
  item: {
    hidden: { ...NAV_ITEM_HIDDEN },
    visible: { ...NAV_ITEM_VISIBLE },
  },
  hidden: { ...globalTweens.hidden },
  visible: { ...globalTweens.visible },
};

export { tweens };
