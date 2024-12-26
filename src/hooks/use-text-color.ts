import { useEffect, useState } from "react";

/**
 * Change the text color of a text-based component.
 * @hook useTextColor
 */
export function useTextColor(color: string) {
  const [textColor, setTextColor] = useState("inherit");

  useEffect(() => {
    handleTextColor(color);
  }, [textColor]);

  /**
   * Handles the text color for the text component.
   * @function handleTextColor
   */
  function handleTextColor(color: string) {
    setTextColor(color);
  }

  return {
    state: { textColor },
    actions: { setTextColor },
    fn: { handleTextColor },
  };
}
