import * as React from "react";

import { Heading } from "../../Heading/Heading";
import { Spacer } from "../../Spacer/Spacer";
import { FancyCardContentApi, FancyCardFooterApi, FancyCardHeaderApi } from "../FancyCard.api";

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
