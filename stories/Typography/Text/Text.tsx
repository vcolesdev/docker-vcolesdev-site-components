import { TextApi } from "@/stories/Typography/Text/Text.api";
import * as React from "react";

import { useTextApi } from "./use-text-api";

/**
 * Text Component
 * @desc A component for rendering text content.
 */
export function Text(props: TextApi) {
  const { TextElement } = useTextApi(props);

  return <>{TextElement}</>;
}
