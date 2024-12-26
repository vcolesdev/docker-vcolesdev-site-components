import * as React from "react";

import { TextContent } from "../../TextContent/TextContent";
import type { SectionIntroContentApi } from "../SectionIntro.api";

/**
 * SectionIntroContent
 * @param {SectionIntroContentApi} props - The content and text size.
 */
export const SectionIntroContent = (props: SectionIntroContentApi) => {
  const { children, textSize } = props;

  return (
    <div className="text-tree-bark dark:text-baby-blue">
      <TextContent element="p" size={textSize}>
        {children}
      </TextContent>
    </div>
  );
};
