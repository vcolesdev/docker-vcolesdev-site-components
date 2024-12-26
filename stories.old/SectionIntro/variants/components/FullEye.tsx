import * as React from "react";
import { useEffect } from "react";

import { Eyebrow } from "../../../Eyebrow/Eyebrow";
import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { useSectionIntroHasEyebrow } from "../../hooks/useSectionIntroHasEyebrow";
import { SectionIntroContent } from "../../parts/SectionIntroContent";
import { SectionIntroCta } from "../../parts/SectionIntroCta";
import { SectionIntroHeader } from "../../parts/SectionIntroHeader";

/**
 * SectionIntroFullEye
 */
export function SectionIntroFullEye(props: SectionIntroApi) {
  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroHasEyebrow();

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

    eyeActions.setEyebrow({
      text: props.eyebrowText,
    });
  }, [state, eyeState]);

  return (
    <SectionIntro {...props}>
      {/* Intro Eyebrow */}
      <div>
        <Eyebrow content={eyeState.eyebrow.text} />
      </div>
      {/* Intro Header */}
      <SectionIntroHeader titleContent={state.title.titleContent} titleSize={state.title.titleSize} />
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{props.children}</SectionIntroContent>
      {/* Intro CTA */}
      <SectionIntroCta ctaText={state.cta.ctaText} ctaVariant={state.cta.ctaVariant} />
    </SectionIntro>
  );
}
