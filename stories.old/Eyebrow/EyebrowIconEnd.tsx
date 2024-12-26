import { useEffect } from "react";

import { TablerIcon } from "../TablerIcon/TablerIcon";
import type { EyebrowApi } from "./Eyebrow";
import { EyebrowProvider } from "./EyebrowProvider";
import { useEyebrow } from "./useEyebrow";

/**
 * EyebrowIconEnd
 * @param {EyebrowApi} props - The props for the EyebrowIconEnd component.
 */
export function EyebrowIconEnd(props: EyebrowApi) {
  const { state, actions } = useEyebrow();

  useEffect(() => {
    actions.setIconName(props.eyeIconName);
    actions.setIconSize(props.eyeIconSize);
    actions.setContent(props.content);
  }, [state.iconSize, state.iconName, state.content]);

  return (
    <EyebrowProvider>
      <span className="inline-block">{state.content}</span>
      <div className="inline-block ms-2">
        <TablerIcon color="currentColor" currentIcon={state.iconName} size={state.iconSize} stroke={1.5} />
      </div>
    </EyebrowProvider>
  );
}
