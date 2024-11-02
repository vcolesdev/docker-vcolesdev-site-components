import { TablerIcon, TablerIconName } from "@/stories/TablerIcon/TablerIcon";
import * as React from "react";
import { useEffect, useState } from "react";

import { Button } from "../Button";
import { ButtonApi } from "../Button/Button.api";

type IconButtonPosition = "start" | "end";

interface IconButtonApi extends ButtonApi {
  iconName: TablerIconName;
  iconPos?: IconButtonPosition;
  iconSize?: number;
}

function IconButton(props: IconButtonApi) {
  const { children, iconPos, iconName, iconSize, removeClasses } = props;

  const [iconBtnPosition, setIconPosition] = useState<IconButtonPosition>("end");
  const [iconBtnName, setBtnIconName] = useState<TablerIconName | null>(null);
  const [iconBtnSize, setBtnIconSize] = useState<number | null>(null);
  const [iconBtnRemoveClasses, setBtnIconRemoveClasses] = useState<string[] | []>([]);

  useEffect(() => {
    setIconPosition(iconPos);
    setBtnIconSize(iconSize || 20);

    if (removeClasses) {
      setBtnIconRemoveClasses(removeClasses);
    }

    if (iconPos === "start") {
      setBtnIconName(iconName || "IconChevronLeft");
    } else {
      setBtnIconName(iconName || "IconChevronRight");
    }
  });

  const getCurrPadding = () => {};

  return iconBtnPosition === "start" ? (
    <Button hasIcon iconPos="start" {...props}>
      <span className="me-2 flex items-center">
        <TablerIcon size={iconBtnSize} currentIcon={iconBtnName} />
      </span>
      <span>{children}</span>
    </Button>
  ) : (
    <Button hasIcon iconPos="end" {...props}>
      <span>{children}</span>
      <span className="ms-2 flex items-center">
        <TablerIcon size={iconBtnSize} currentIcon={iconBtnName} />
      </span>
    </Button>
  );
}

export { IconButton };
export type { IconButtonApi };
