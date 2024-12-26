import { useRenderHTML } from "@/src/hooks/use-render-html";
import { useTextColor } from "@/src/hooks/use-text-color";
import { EnumTextWeight, TextApi } from "@/stories/Typography/Text/Text.api";
import { classNames } from "@/stories/Typography/Text/Text.classes";
import * as React from "react";

/**
 * The API hook for the Text component.
 * @hook useTextApi
 * @param props
 */
export function useTextApi(props: TextApi) {
  const { children, color, element, extraClassnames, extraStyles, italic, ref, size, uppercase, weight } = props;

  const { state } = useTextColor(color);

  /**
   * Returns the props for the text component.
   * @function getProps
   */
  const getProps = () => {
    return {
      className: `${classNames.base} ${classNames.sizes[size]} ${extraClassnames || ""}`,
      style: {
        color: state.textColor,
        fontStyle: italic ? "italic" : "normal",
        fontWeight: weight || EnumTextWeight.Regular,
        textTransform: (uppercase ? "uppercase" : "none") as React.CSSProperties["textTransform"],
        ...extraStyles,
      },
      children,
      ref,
    };
  };

  // The element to render.
  const TextElement = useRenderHTML(element, getProps());

  return {
    fn: { getProps },
    TextElement,
  };
}
