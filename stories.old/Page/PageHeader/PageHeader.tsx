import * as React from "react";

import { Spacer } from "../../Spacer/Spacer";
import { PageSubheading } from "../PageSubheading/PageSubheading";
import { PageTitle } from "../PageTitle/PageTitle";

interface PageHeaderApi {
  hasSubheading?: boolean;
  subheading?: string;
  title?: string;
}

interface PageHeaderContainerApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

interface PageTitleSlotApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

function PageHeaderContainer({ children }: PageHeaderContainerApi) {
  return (
    <div className="max-w-6xl mt-8 mx-auto w-full space-y-4">
      {children}
      <Spacer size="lg" />
    </div>
  );
}

function PageTitleSlot({ children }: PageTitleSlotApi) {
  return <div className="mb-6">{children}</div>;
}

function PageHeader(props: PageHeaderApi) {
  const { hasSubheading, subheading, title } = props;
  return (
    <PageHeaderContainer>
      <PageTitleSlot>
        <PageTitle>{title}</PageTitle>
      </PageTitleSlot>
      {hasSubheading && <PageSubheading>{subheading}</PageSubheading>}
    </PageHeaderContainer>
  );
}

export { PageHeader, PageHeaderApi };
