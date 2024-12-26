import { useEffect, useState } from "react";
import * as React from "react";

import { TablerIconName } from "../TablerIcon/TablerIcon";
import { EyebrowApi } from "./Eyebrow";

type EyebrowContent = React.ReactNode | React.ReactNode[] | string;

/**
 * @hook useEyebrow
 */
function useEyebrow() {
  const [content, setContent] = useState<EyebrowContent | null>(null);
  const [iconName, setIconName] = useState<TablerIconName | null>(null);
  const [iconSize, setIconSize] = useState<number | null>(null);

  return {
    state: {
      content,
      iconName,
      iconSize,
    },
    actions: {
      setContent,
      setIconName,
      setIconSize,
    },
  };
}

/**
 * @hook useEyebrowApi
 */
function useEyebrowApi(props: EyebrowApi) {
  const { state, actions } = useEyebrow();

  useEffect(() => {
    actions.setIconName(props.eyeIconName);
    actions.setIconSize(props.eyeIconSize);
    actions.setContent(props.content);
  }, [state.iconSize, state.iconName, state.content]);
}

export { useEyebrow, useEyebrowApi };
