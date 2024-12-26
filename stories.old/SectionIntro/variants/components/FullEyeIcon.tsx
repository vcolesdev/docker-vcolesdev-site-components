import { useEffect } from "react";
import * as React from "react";

import { IconButton } from "../../../Controls/IconButton/IconButton";
import { Eyebrow } from "../../../Eyebrow/Eyebrow";
import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { useSectionIntroHasEyebrow } from "../../hooks/useSectionIntroHasEyebrow";
import { SectionIntroContent, SectionIntroHeader } from "../../parts";

export function SectionIntroFullEyeIcon(props: SectionIntroApi) {
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
  }, [state]);

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
      <footer>
        <IconButton size="md" iconName="IconChevronRight" iconPos="end" iconSize={24} variant={state.cta.ctaVariant}>
          {state.cta.ctaText}
        </IconButton>
      </footer>
    </SectionIntro>
  );
}
