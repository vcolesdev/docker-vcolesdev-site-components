import { useEffect } from "react";
import * as React from "react";

import { Eyebrow } from "../../../Eyebrow/Eyebrow";
import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { useSectionIntroHasEyebrow } from "../../hooks/useSectionIntroHasEyebrow";
import { SectionIntroContent, SectionIntroCta } from "../../parts";

export function SectionIntroWithCtaEyeIcon(props: SectionIntroApi) {
  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroHasEyebrow();

  useEffect(() => {
    actions.setCta({
      ctaText: props.ctaText,
      ctaVariant: props.ctaVariant,
    });

    eyeActions.setEyebrow({
      text: props.eyebrowText,
    });

    actions.setTextSize(props.textSize);
  }, [state, eyeState]);

  return (
    <SectionIntro {...props}>
      {/* Intro Eyebrow */}
      <div>
        <Eyebrow content={eyeState.eyebrow.text} />
      </div>
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{props.children}</SectionIntroContent>
      {/* Intro CTA */}
      <SectionIntroCta ctaText={state.cta.ctaText} ctaVariant={state.cta.ctaVariant} />
    </SectionIntro>
  );
}
