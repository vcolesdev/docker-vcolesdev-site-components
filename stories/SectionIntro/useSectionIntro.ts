import {
  SectionIntroContentApi,
  SectionIntroCtaApi,
  SectionIntroHeaderApi,
} from "@/stories/SectionIntro/SectionIntro.api";
import { useState } from "react";
import { TablerIconName } from "@/stories/TablerIcon/TablerIcon";

function useSectionIntroEyebrow() {
  const [sIntroHasEyebrow, setsIntroHasEyebrow] = useState<boolean>(false);
  const [sIntroEyebrowIconName, setSIntroEyebrowIconName] = useState<TablerIconName | null>(null);
  const [sIntroEyebrowIconPos, setSIntroEyebrowIconPos] = useState<"end" | "start" | null>(null);
  const [sIntroEyebrowIconSize, setSIntroEyebrowIconSize] = useState<number | null>(null);
  const [sIntroEyebrowText, setSIntroEyebrowText] = useState<string | undefined>(undefined);

  return {
    state: {
      sIntroHasEyebrow,
      sIntroEyebrowIconName,
      sIntroEyebrowIconPos,
      sIntroEyebrowIconSize,
      sIntroEyebrowText,
    },
    actions: {
      setsIntroHasEyebrow,
      setSIntroEyebrowIconName,
      setSIntroEyebrowIconPos,
      setSIntroEyebrowIconSize,
      setSIntroEyebrowText,
    },
  };
}

/**
 * @hook useSectionIntro
 */
function useSectionIntro() {
  const [sIntroCtaText, setSIntroCtaText] = useState<SectionIntroCtaApi["ctaText"] | null>(null);
  const [sIntroCtaVariant, setSIntroCtaVariant] = useState<SectionIntroCtaApi["ctaVariant"] | "primary">("primary");
  const [sIntroTitleContent, setSIntroTitleContent] = useState<SectionIntroHeaderApi["titleContent"] | null>(null);
  const [sIntroTitleSize, setSIntroTitleSize] = useState<SectionIntroHeaderApi["titleSize"] | "lg">("lg");
  const [sIntroTextSize, setSIntroTextSize] = useState<SectionIntroContentApi["textSize"] | "lg">("lg");

  return {
    state: {
      sIntroCtaText,
      sIntroCtaVariant,
      sIntroTitleContent,
      sIntroTitleSize,
      sIntroTextSize,
    },
    actions: {
      setSIntroCtaText,
      setSIntroCtaVariant,
      setSIntroTitleContent,
      setSIntroTitleSize,
      setSIntroTextSize,
    },
  };
}

export { useSectionIntro, useSectionIntroEyebrow };
