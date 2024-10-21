import { cn } from "@/src/utils/cn";
import type { SectionIntroProviderApi } from "@/stories/SectionIntro/SectionIntro.api";
import * as React from "react";

const SectionIntroProvider = (props: SectionIntroProviderApi) => {
  const { children, ref } = props;

  const classes = cn(["group/section-intro", "grid", "grid-cols-1", "gap-10"]);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
};

export { SectionIntroProvider };
