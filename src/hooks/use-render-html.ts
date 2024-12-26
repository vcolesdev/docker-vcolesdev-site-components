import * as React from "react";

/**
 * Renders the HTML element for a component.
 * @param element
 * @param props
 */
export function useRenderHTML(element: string = "div", props: React.HTMLProps<any> = {}) {
  return React.createElement(element, props);
}
