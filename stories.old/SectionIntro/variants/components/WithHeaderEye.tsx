import * as React from "react";
import { useEffect } from "react";

import { Eyebrow } from "../../../Eyebrow/Eyebrow";
import { SectionIntro } from "../../SectionIntro";
import { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { useSectionIntroHasEyebrow } from "../../hooks/useSectionIntroHasEyebrow";
import { SectionIntroContent } from "../../parts/SectionIntroContent";
import { SectionIntroHeader } from "../../parts/SectionIntroHeader";

/**
 * SectionIntroWithHeaderEye
 */
export function SectionIntroWithHeaderEye(props: SectionIntroApi) {
  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroHasEyebrow();

  useEffect(() => {
    actions.setTitle({
      titleContent: props.titleContent,
      titleSize: props.titleSize,
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
      {/* Intro Header */}
      <SectionIntroHeader titleContent={state.title.titleContent} titleSize={state.title.titleSize} />
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{props.children}</SectionIntroContent>
    </SectionIntro>
  );
}
