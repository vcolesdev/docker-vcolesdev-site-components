import { useRenderHTML } from "@/src/hooks/use-render-html";
import { HeadingApi } from "@/stories/Typography/Heading/Heading.api";
import { classNames } from "@/stories/Typography/Heading/Heading.classes";

/**
 * The API hook for the Heading component.
 * @hook useHeadingApi
 * @param props
 */
export function useHeadingApi(props: HeadingApi) {
  const { children, extraClassnames, extraStyles, italic, level, ref, size } = props;

  /**
   * Returns the props for the heading component.
   * @function getProps
   */
  const getProps = () => {
    return {
      className: `${classNames.base} ${classNames.sizes[size]} ${extraClassnames || ""}`,
      style: {
        fontStyle: italic ? "italic" : "normal",
        ...extraStyles,
      },
      children,
      ref,
    };
  };

  // The element to render.
  const HeadingElement = useRenderHTML(`h${level || 2}`, getProps());

  return {
    fn: { getProps },
    HeadingElement,
  };
}
