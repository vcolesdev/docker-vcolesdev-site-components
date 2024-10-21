import { gsap } from "gsap";
import { tweens as globalTweens } from "./global";

const HIDDEN = { ...globalTweens.hidden, left: "-100%" } as gsap.TweenVars;
const VISIBLE = { ...globalTweens.visible, left: 0 } as gsap.TweenVars;
const LOGO_HIDDEN = { ...globalTweens.hidden, x: -100 } as gsap.TweenVars;
const LOGO_VISIBLE = { ...globalTweens.visible, duration: 0.4, x: 0 } as gsap.TweenVars;
const MOBILE_MENU_LINK_HIDDEN = { ...globalTweens.hidden, stagger: 0.1, x: -100 } as gsap.TweenVars;
const MOBILE_MENU_LINK_VISIBLE = { ...globalTweens.visible, duration: 0.4, stagger: 0.1, x: 0 } as gsap.TweenVars;
const OVERLAY = {
  ...(globalTweens.hidden as gsap.TweenVars),
  ...(globalTweens.visible as gsap.TweenVars),
} as gsap.TweenVars;

const tweens = {
  targets: {
    logo: {
      hidden: { ...LOGO_HIDDEN },
      visible: { ...LOGO_VISIBLE },
    },
    menuLink: {
      hidden: { ...MOBILE_MENU_LINK_HIDDEN },
      visible: { ...MOBILE_MENU_LINK_VISIBLE },
    },
    overlay: { ...OVERLAY },
  },
  hidden: { ...HIDDEN },
  visible: { ...VISIBLE },
};

export { tweens };
