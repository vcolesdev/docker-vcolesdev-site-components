import { useEffect, useState } from "react";
import type { ButtonProps } from "../Button.api";
import { api as buttonApi } from "../Button.api";
import { handlePropCases } from "@/src/utils/handlePropCases";
import { cn } from "@/src/utils/cn";
import { useMuiBaseButton } from "./useMuiBaseButton";

const API = buttonApi;

function useButtonApi(props: ButtonProps) {
  const { extraClasses, size, removeClasses, variant } = props;
  const { buttonStyles } = useMuiBaseButton();

  const [btnBackdropVariantStyles, setBtnBackdropStyles] = useState(null);
  const [btnVariantStyles, setBtnVariantStyles] = useState(API.styles.default);
  const [btnSizeStyles, setBtnSizeStyles] = useState(API.sizes.md);
  const [btnExtraClasses, setBtnExtraClasses] = useState("");
  const [btnRemoveClasses, setBtnRemoveClasses] = useState<string[] | null>(null);

  const [filteredBtnClasses, setFilteredClasses] = useState<string>("");

  const buttonClasses = cn([buttonStyles, btnVariantStyles, btnSizeStyles, extraClasses]);

  const handleButtonBackdrop = () =>
    handlePropCases({
      cases: ["primary", "secondary", "destructive", "ghost", "outlined"],
      currValue: variant,
      values: API.styles.backdrop,
    });

  const handleButtonVariant = () =>
    handlePropCases({
      cases: ["default", "primary", "secondary", "destructive", "ghost", "outlined"],
      currValue: variant,
      values: API.styles,
    });

  const handleButtonSize = () =>
    handlePropCases({
      cases: ["sm", "md", "lg", "xl"],
      currValue: size,
      values: API.sizes,
    });

  useEffect(() => {
    setBtnBackdropStyles(handleButtonBackdrop());
    setBtnVariantStyles(handleButtonVariant());
    setBtnSizeStyles(handleButtonSize());

    if (removeClasses) {
      setBtnRemoveClasses(removeClasses);
    }

    if (extraClasses) {
      setBtnExtraClasses(extraClasses);
    }
  }, []);

  return {
    btnBackdropVariantStyles,
    btnExtraClasses,
    btnVariantStyles,
    btnSizeStyles,
    filteredBtnClasses,
    handleButtonSize,
    handleButtonVariant,
    setBtnVariantStyles,
    setBtnSizeStyles,
  };
}

export { useButtonApi };
