import { PageHeader } from "@/stories/Page/PageHeader/PageHeader";
import * as React from "react";

interface PageApi {
  children: React.ReactNode | React.ReactNode[] | string;
  hasSubheading?: boolean;
  pageId?: string;
  pageTitle?: string;
  subheading?: string;
}

function Page({ children, ...rest }: PageApi) {
  const { hasSubheading, pageTitle, pageId, subheading } = rest;
  return (
    <div className="page" id={pageId}>
      <PageHeader hasSubheading={hasSubheading} subheading={subheading} title={pageTitle} />
      <div className="page-content">{children}</div>
    </div>
  );
}

export { Page, PageApi };
