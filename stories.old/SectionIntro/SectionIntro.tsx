import * as React from "react";
import { ForwardedRef, forwardRef } from "react";

import type { SectionIntroApi } from "./SectionIntro.api";
import { SectionIntroProvider } from "./parts/SectionIntroProvider";

/**
 * SectionIntro
 */
const SectionIntro = forwardRef((props: SectionIntroApi, ref: ForwardedRef<HTMLDivElement>) => {
  const { children } = props;
  return <SectionIntroProvider ref={ref}>{children}</SectionIntroProvider>;
});

export { SectionIntro };
