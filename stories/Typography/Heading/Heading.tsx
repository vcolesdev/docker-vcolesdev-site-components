import { HeadingApi } from "@/stories/Typography/Heading/Heading.api";
import { useHeadingApi } from "@/stories/Typography/Heading/user-heading-api";

/**
 * Heading Component
 * @desc A component for rendering heading content.
 */
export function Heading(props: HeadingApi) {
  const { HeadingElement } = useHeadingApi(props);

  return <>{HeadingElement}</>;
}
