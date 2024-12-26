import { useState } from "react";

import { SectionEyebrowApi } from "./useSectionIntro";

/**
 * @hook useSectionIntroHasEyebrow
 */
export function useSectionIntroHasEyebrow() {
  const [hasEyebrow, setHasEyebrow] = useState<boolean>(false);
  const [eyebrow, setEyebrow] = useState<SectionEyebrowApi>({
    icon: "IconActivity",
    iconPos: "start",
    iconSize: 24,
    text: "This is the eyebrow text",
  });

  const eyebrowState = { hasEyebrow, eyebrow };
  const eyebrowActions = { setHasEyebrow, setEyebrow };

  return {
    state: eyebrowState,
    actions: eyebrowActions,
  };
}
