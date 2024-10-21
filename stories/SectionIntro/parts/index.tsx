import { cn } from "@/src/utils/cn";
import { IconButton } from "@/stories/Controls/IconButton";
import { Heading } from "@/stories/Heading/Heading";
import type {
  SectionIntroContentApi,
  SectionIntroCtaApi,
  SectionIntroHeaderApi,
} from "@/stories/SectionIntro/SectionIntro.api";
import { TextContent } from "@/stories/TextContent/TextContent";
import * as React from "react";

export const SectionIntroHeader = ({ titleContent, ...rest }: SectionIntroHeaderApi) => {
  const { titleSize } = rest;

  const extraClasses = cn([
    "group/section-intro:tracking-normal",
    "group-hover/section-intro:tracking-wide",
    "transition-all",
    "duration-300",
    "ease-in-out-cubic",
  ]);

  return (
    <header className="text-deep-brown dark:text-sky">
      <Heading extraClasses={extraClasses} el="h3" size={titleSize}>
        {titleContent}
      </Heading>
    </header>
  );
};

export const SectionIntroContent = ({ children, ...rest }: SectionIntroContentApi) => {
  const { textSize } = rest;

  return (
    <div className="text-tree-bark dark:text-baby-blue">
      <TextContent element="p" size={textSize}>
        {children}
      </TextContent>
    </div>
  );
};

export const SectionIntroCta = ({ ...rest }: SectionIntroCtaApi) => {
  const { ctaText, ctaVariant } = rest;

  return (
    <footer>
      <IconButton size="md" iconName="IconChevronRight" iconPos="end" iconSize={24} variant={ctaVariant}>
        {ctaText}
      </IconButton>
    </footer>
  );
};
