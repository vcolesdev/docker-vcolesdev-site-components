/* Docs.tsx */
import { Controls, Description, Primary, Stories, Subtitle, Title } from "@storybook/blocks";
import { useEffect, useRef } from "react";

/**
 * Custom Docs component.
 * @constructor
 */
export default function Docs() {
  const docsRef = useRef<HTMLElement | null>(null);
  const docsId = "storybook-docs";

  useEffect(() => {
    docsRef.current = document.getElementById(docsId);
    if (!docsRef.current) {
      return console.error(`Docs element with id ${docsId} not found.`);
    }
  }, [docsRef, docsId]);

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </>
  );
}
