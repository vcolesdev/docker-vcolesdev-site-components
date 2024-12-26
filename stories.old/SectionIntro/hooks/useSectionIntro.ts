import { SectionIntroContentApi, SectionIntroCtaApi, SectionIntroHeaderApi } from "../SectionIntro.api";
import { useState } from "react";
import { TablerIconName } from "../../TablerIcon/TablerIcon";

/**
 * @interface SectionEyebrowApi
 */
export interface SectionEyebrowApi {
  // The icon to display in the eyebrow section.
  icon?: TablerIconName;

  // The position of the eyebrow icon.
  iconPos?: "end" | "start";

  // The size of the eyebrow icon.
  iconSize?: number;

  // The text to display in the eyebrow section.
  text?: string;
}

/**
 * @const initCta - Initial state for the CTA section of the SectionIntro component
 */
const initCta = {
  ctaText: null,
  ctaVariant: "primary",
} as SectionIntroCtaApi;

/**
 * @const initTitle - Initial state for the title section of the SectionIntro component
 */
const initTitle = {
  titleContent: null,
  titleSize: "lg",
} as SectionIntroHeaderApi;

/**
 * @hook useSectionIntro
 */
export function useSectionIntro() {
  const [cta, setCta] = useState<SectionIntroCtaApi | null>(initCta);
  const [title, setTitle] = useState<SectionIntroHeaderApi | null>(initTitle);
  const [textSize, setTextSize] = useState<SectionIntroContentApi["textSize"] | "lg">("lg");

  const sectionIntroState = { cta, title, textSize };
  const sectionIntroActions = { setCta, setTitle, setTextSize };

  return {
    state: sectionIntroState,
    actions: sectionIntroActions,
  };
}
