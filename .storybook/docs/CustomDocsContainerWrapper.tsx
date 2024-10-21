import { DocsContainer as BaseContainer, DocsContainerProps } from "@storybook/blocks";
import { FC, PropsWithChildren } from "react";

import useCurrentTheme from "../hooks/useCurrentTheme";

/**
 * Custom Docs Container Wrapper.
 * @param props
 * @constructor
 */
export default function CustomDocsContainerWrapper(props: unknown | any) {
  const { theme } = useCurrentTheme();
  return <CustomDocsContainer theme={theme} {...props} />;
}

/**
 * Custom Docs Container.
 * @param children
 * @param context
 * @constructor
 */
const CustomDocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const { theme } = useCurrentTheme();

  return (
    <BaseContainer context={context} theme={theme}>
      <div>{children}</div>
    </BaseContainer>
  );
};
