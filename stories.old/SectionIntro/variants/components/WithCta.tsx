import { useEffect } from "react";

import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { SectionIntroContent } from "../../parts/SectionIntroContent";
import { SectionIntroCta } from "../../parts/SectionIntroCta";

/**
 * SectionIntroWithCta
 */
export function SectionIntroWithCta(props: SectionIntroApi) {
  const { children, ctaText, ctaVariant, textSize } = props;

  const { state, actions } = useSectionIntro();
  const { cta } = state;

  useEffect(() => {
    actions.setCta({ ctaText, ctaVariant });

    actions.setTextSize(textSize);
  }, [state.cta, state.textSize]);

  return (
    <SectionIntro {...props}>
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{children}</SectionIntroContent>
      {/* Intro CTA */}
      <SectionIntroCta ctaText={cta.ctaText} ctaVariant={cta.ctaVariant} />
    </SectionIntro>
  );
}
