import { useEffect } from "react";

import { SectionIntro } from "../../SectionIntro";
import type { SectionIntroApi } from "../../SectionIntro.api";
import { useSectionIntro } from "../../hooks/useSectionIntro";
import { SectionIntroContent } from "../../parts/SectionIntroContent";
import { SectionIntroHeader } from "../../parts/SectionIntroHeader";

/**
 * SectionIntroWithHeader
 */
export function SectionIntroWithHeader(props: SectionIntroApi) {
  const { children, textSize, titleContent, titleSize } = props;

  const { state, actions } = useSectionIntro();
  const { title } = state;

  useEffect(() => {
    actions.setTitle({ titleContent, titleSize });

    actions.setTextSize(textSize);
  }, [state]);

  return (
    <SectionIntro {...props}>
      {/* Intro Header */}
      <SectionIntroHeader titleContent={title.titleContent} titleSize={title.titleSize} />
      {/* Intro Content */}
      <SectionIntroContent textSize={state.textSize}>{children}</SectionIntroContent>
    </SectionIntro>
  );
}
