import { FancyCardContentApi, FancyCardFooterApi, FancyCardHeaderApi } from "@/stories/FancyCard/FancyCard.api";
import { Heading } from "@/stories/Heading/Heading";
import { Spacer } from "@/stories/Spacer/Spacer";
import * as React from "react";

export const FancyCardHeader = ({ title }: FancyCardHeaderApi) => (
  <header className="fancy-card-header">
    <Heading el="h3" size="sm" styles={{ letterSpacing: "normal" }}>
      {title}
    </Heading>
    <Spacer size="xs" />
  </header>
);

export const FancyCardFooter = ({ children }: FancyCardFooterApi) => (
  <footer className="fancy-card--footer">
    <Spacer size="sm" />
    {children}
  </footer>
);

export const FancyCardContent = ({ children }: FancyCardContentApi) => (
  <div className="fancy-card-content">{children}</div>
);
