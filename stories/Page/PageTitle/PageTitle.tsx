import * as React from "react";

interface PageTitleApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

function PageTitle({ children }: PageTitleApi) {
  return (
    <div>
      <h2 className="text-[48px] font-heading font-bold tracking-tight text-tree-bark dark:text-sky leading-none">
        {children}
      </h2>
    </div>
  );
}

export { PageTitle };
