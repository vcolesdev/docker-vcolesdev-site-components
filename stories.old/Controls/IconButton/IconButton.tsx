import * as React from "react";
import { useEffect, useState } from "react";

import { TablerIcon, TablerIconName } from "../../TablerIcon/TablerIcon";
import { Button } from "../Button";
import { ButtonApi } from "../Button/Button.api";

type IconButtonPosition = "start" | "end";

interface IconButtonApi extends ButtonApi {
  iconName: TablerIconName;
  iconPos?: IconButtonPosition;
  iconSize?: number;
}

function useIconButton() {
  const [iconPos, setIconPos] = useState<IconButtonPosition>("end");
  const [iconName, setIconName] = useState<TablerIconName | null>(null);
  const [iconSize, setIconSize] = useState<number | null>(null);

  return {
    state: { iconPos, iconName, iconSize },
    actions: { setIconPos, setIconName, setIconSize },
  };
}

function IconButton(props: IconButtonApi) {
  const { state, actions } = useIconButton();

  useEffect(() => {
    actions.setIconPos(props.iconPos);
    actions.setIconSize(props.iconSize || 20);

    if (props.iconPos === "start") {
      actions.setIconName(props.iconName || "IconChevronLeft");
    } else {
      actions.setIconName(props.iconName || "IconChevronRight");
    }
  }, []);

  const spanClasses = "flex items-center";

  return state.iconPos === "start" ? (
    <Button hasIcon iconPos="start" {...props}>
      <span className="me-2 flex items-center">
        <TablerIcon size={state.iconSize} currentIcon={state.iconName} />
      </span>
      <span>{props.children}</span>
    </Button>
  ) : (
    <Button hasIcon iconPos="end" {...props}>
      <span>{props.children}</span>
      <span className="ms-2 flex items-center">
        <TablerIcon size={state.iconSize} currentIcon={state.iconName} />
      </span>
    </Button>
  );
}

export { IconButton };
export type { IconButtonApi };
