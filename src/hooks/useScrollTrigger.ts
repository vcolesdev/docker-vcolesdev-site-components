import ScrollTrigger from "gsap/ScrollTrigger";

interface ScrollTriggerApi {
  end: number;
  start: string;
  trigger: HTMLDivElement;
  toggleClassname: string;
  toggleTargets: string;
}

export function useScrollTrigger({ trigger, ...rest }: ScrollTriggerApi) {
  const { end, start, toggleClassname, toggleTargets } = rest;

  const scrollTrigger = {
    end: end,
    start: start,
    toggleClassname: toggleClassname,
    toggleTargets: toggleTargets,
    trigger: trigger,
  };

  return ScrollTrigger.create({ ...scrollTrigger });
}
