import { cn } from "@/src/utils/cn";
import * as React from "react";

import { Heading } from "../../Heading/Heading";
import type { SectionIntroHeaderApi } from "../SectionIntro.api";

const styles = {
  element: cn(["text-deep-brown", "dark:text-sky"]),
};

/**
 * SectionIntroHeader
 * @param {SectionIntroHeaderApi} props - The props for the SectionIntroHeader component.
 */
export const SectionIntroHeader = (props: SectionIntroHeaderApi) => (
  <header className={styles.element}>
    <Heading el="h3" size={props.titleSize}>
      {props.titleContent}
    </Heading>
  </header>
);
