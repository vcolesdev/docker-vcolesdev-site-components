import { useEffect, useState } from "react";
import type { ButtonProps } from "../Button.api";
import { api as buttonApi } from "../Button.api";
import { handlePropCases } from "@/src/utils/handlePropCases";
import { cn } from "@/src/utils/cn";
import { useMuiBaseButton } from "./useMuiBaseButton";

const API = buttonApi;
const buttonTypes = ["primary", "secondary", "ghost", "outlined"];
const buttonSizes = ["sm", "md", "lg", "xl"];

function useHandleBtnCases({
  cases,
  currValue,
  values,
}: {
  cases: string[];
  currValue: any;
  values: Record<any, any>;
}) {
  return handlePropCases({ cases, currValue, values });
}

function useButtonApi(props: ButtonProps) {
  const { extraClasses, size, variant } = props;
  const { buttonStyles } = useMuiBaseButton();

  const [btnVariant, setBtnVariant] = useState(API.styles.default);
  const [btnSize, setBtnSize] = useState(API.sizes.md);
  const [btnExtraClasses, setBtnExtraClasses] = useState("");

  const buttonClasses = cn([buttonStyles, btnVariant, btnSize, btnExtraClasses]);

  const handleVariant = useHandleBtnCases({
    cases: buttonTypes,
    currValue: variant,
    values: API.styles,
  });

  const handleSize = useHandleBtnCases({
    cases: buttonSizes,
    currValue: size,
    values: API.sizes,
  });

  useEffect(() => {
    setBtnVariant(handleVariant);
    setBtnSize(handleSize);

    if (extraClasses) {
      setBtnExtraClasses(extraClasses);
    }
  }, []);

  return {
    buttonClasses,
  };
}

export { useButtonApi };
