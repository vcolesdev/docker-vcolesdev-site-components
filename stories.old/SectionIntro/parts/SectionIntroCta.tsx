import * as React from "react";
import { useEffect } from "react";

import { IconButton } from "../../Controls/IconButton/IconButton";
import type { SectionIntroCtaApi } from "../SectionIntro.api";

/**
 * SectionIntroCta
 * @param {SectionIntroCtaApi} props - The CTA text and variant.
 */
export const SectionIntroCta = (props: SectionIntroCtaApi) => {
  const { ctaText, ctaVariant } = props;

  useEffect(() => {}, [ctaText, ctaVariant]);

  return (
    <footer>
      <IconButton size="md" iconName="IconChevronRight" iconPos="end" iconSize={24} variant={ctaVariant}>
        {ctaText}
      </IconButton>
    </footer>
  );
};
