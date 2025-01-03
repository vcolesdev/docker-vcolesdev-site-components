import { DocsPage } from "@storybook/blocks";
import React from "react";

import CustomDocs from "./CustomDocs";

/**
 * Custom Docs Page Root.
 * @param pageProps
 * @constructor
 */
export default function CustomDocsPageRoot(pageProps: any) {
  return (
    <>
      <DocsPage {...pageProps}>
        <CustomDocs />
      </DocsPage>
    </>
  );
}
