import { useEffect } from "react";

import { TablerIcon } from "../TablerIcon/TablerIcon";
import type { EyebrowApi } from "./Eyebrow";
import { EyebrowProvider } from "./EyebrowProvider";
import { useEyebrow } from "./useEyebrow";

/**
 * EyebrowIconOnly
 * @param {EyebrowApi} props - The props for the EyebrowIconOnly component.
 */
export function EyebrowIconOnly(props: EyebrowApi) {
  const { state, actions } = useEyebrow();

  useEffect(() => {
    actions.setIconName(props.eyeIconName);
    actions.setIconSize(props.eyeIconSize);
    actions.setContent(props.content);
  }, [state.iconSize, state.iconName, state.content]);

  return (
    <EyebrowProvider>
      <div className="inline-block">
        <TablerIcon color="currentColor" currentIcon={state.iconName} size={state.iconSize} stroke={1.5} />
      </div>
    </EyebrowProvider>
  );
}
