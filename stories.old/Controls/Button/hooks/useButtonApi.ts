import { useEffect, useState } from "react";
import type { ButtonProps } from "../Button.api";
import { api as buttonApi } from "../Button.api";
import { handlePropCases } from "@/src/utils/handlePropCases";
import { cn } from "@/src/utils/cn";
import { useMuiBaseButton } from "./useMuiBaseButton";

// Our button API (sizes, styles, etc.)
const API = buttonApi;

// Button types
const buttonTypes = ["primary", "secondary", "ghost", "outlined"];

// Button sizes
const buttonSizes = ["sm", "md", "lg", "xl"];

/**
 * Responsible for handling button cases, such as sizes and styles.
 * @interface ButtonPropsCases
 */
interface ButtonPropsCases {
  // The cases to handle, for example, ["sm", "md", "lg", "xl"]
  cases: string[];

  // The current value to handle.
  currValue: any;

  // The values to handle.
  values: Record<any, any>;
}

/**
 * Handles button cases and outputs the correct value.
 * @hook useHandleBtnCases
 */
function useHandleBtnCases({ cases, currValue, values }: ButtonPropsCases) {
  return handlePropCases({ cases, currValue, values });
}

/**
 * Handles the button API, such as sizes and styles.
 * @hook useButtonApi
 * @param props - The button props.
 */
function useButtonApi(props: ButtonProps) {
  const { extraClasses, size, variant } = props;

  // Get the button styles from the MUI base button.
  const { buttonStyles } = useMuiBaseButton();

  // States for handling button composition
  const [btnVariant, setBtnVariant] = useState(API.styles.default);
  const [btnSize, setBtnSize] = useState(API.sizes.md);
  const [btnExtraClasses, setBtnExtraClasses] = useState("");

  // Compose the button classes
  const buttonClasses = cn([buttonStyles, btnVariant, btnSize, btnExtraClasses]);

  // Handle the button variant
  const handleVariant = useHandleBtnCases({
    cases: buttonTypes,
    currValue: variant,
    values: API.styles,
  });

  // Handle the button size
  const handleSize = useHandleBtnCases({
    cases: buttonSizes,
    currValue: size,
    values: API.sizes,
  });

  // Set the button variant and size
  useEffect(() => {
    setBtnVariant(handleVariant);
    setBtnSize(handleSize);

    if (extraClasses) {
      setBtnExtraClasses(extraClasses);
    }
  }, []);

  // Return the completed button classes
  return { buttonClasses };
}

export { useButtonApi };
