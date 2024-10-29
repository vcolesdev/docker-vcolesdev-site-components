import { cn } from "@/src/utils/cn";
import * as React from "react";

interface PageSubheadingApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

interface PageSubheadingContainerApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

function PageSubheadingContainer({ children }: PageSubheadingContainerApi) {
  return <div>{children}</div>;
}

const HEADING_STYLES = {
  element: cn([
    "text-[32px]",
    "font-body",
    "font-semibold",
    "tracking-tight",
    "text-tree-bark",
    "leading-none",
    "dark:text-freshwater-blue",
  ]),
};

function PageSubheading({ children }: PageSubheadingApi) {
  return (
    <PageSubheadingContainer>
      <h3 className={`${HEADING_STYLES["element"]}`}>{children}</h3>
    </PageSubheadingContainer>
  );
}

export { PageSubheading };
