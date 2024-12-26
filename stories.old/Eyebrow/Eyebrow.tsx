import * as React from "react";
import { ForwardedRef, forwardRef, useEffect } from "react";

import { TablerIconName } from "../TablerIcon/TablerIcon";
import { EyebrowProvider } from "./EyebrowProvider";
import { useEyebrow } from "./useEyebrow";

/**
 * @interface EyebrowApi
 */
export interface EyebrowApi {
  // The name of the icon to display.
  eyeIconName?: TablerIconName;

  // The size of the icon. Ex: 64.
  eyeIconSize?: number;

  // The HTML ref for the component.
  ref?: ForwardedRef<HTMLDivElement>;

  // The text content to display.
  content?: React.ReactNode | React.ReactNode[] | string;
}

/**
 * @interface EyebrowApiProvider
 */
export interface EyebrowApiProvider {
  children: React.ReactNode | React.ReactNode[] | string;
  ref?: ForwardedRef<HTMLDivElement>;
}

/**
 * Eyebrow
 * @param {EyebrowApi} props - The props for the Eyebrow component.
 */
const Eyebrow = forwardRef((props: EyebrowApi, ref: ForwardedRef<HTMLDivElement>) => {
  const { state, actions } = useEyebrow();

  useEffect(() => {
    actions.setContent(props.content);
  }, [state.content]);

  return (
    <EyebrowProvider ref={ref} {...props}>
      <span className="inline-block">{state.content}</span>
    </EyebrowProvider>
  );
});

export { Eyebrow };
