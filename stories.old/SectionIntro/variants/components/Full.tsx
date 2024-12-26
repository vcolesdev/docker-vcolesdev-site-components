import * as React from "react";
import { useEffect } from "react";

import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { SectionIntroContent } from "../../parts/SectionIntroContent";
import { SectionIntroCta } from "../../parts/SectionIntroCta";
import { SectionIntroHeader } from "../../parts/SectionIntroHeader";

/**
 * SectionIntroFull
 */
export function SectionIntroFull(props: SectionIntroApi) {
  const { state, actions } = useSectionIntro();
  const { cta, title } = state;

  useEffect(() => {
    actions.setCta({
      ctaText: props.ctaText,
      ctaVariant: props.ctaVariant,
    });

    actions.setTitle({
      titleContent: props.titleContent,
      titleSize: props.titleSize,
    });

    actions.setTextSize(props.textSize);
  }, [state]);

  return (
    <SectionIntro {...props}>
      {/* Intro Header */}
      <SectionIntroHeader titleContent={title.titleContent} titleSize={title.titleSize} />
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{props.children}</SectionIntroContent>
      {/* Intro CTA */}
      <SectionIntroCta ctaText={cta.ctaText} ctaVariant={cta.ctaVariant} />
    </SectionIntro>
  );
}
