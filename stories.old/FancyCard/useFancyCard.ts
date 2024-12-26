import { useState } from "react";
import {
  FancyCardCustomStyles,
  FancyCardExtraClasses,
  FancyCardFooterContent,
  FancyCardTitleText,
} from "./FancyCard.api";

/**
 * @hook useFancyCard
 */
function useFancyCard() {
  const [cardCustomStyles, setCardCustomStyles] = useState<FancyCardCustomStyles>({});
  const [cardExtraClasses, setCardExtraClasses] = useState<FancyCardExtraClasses>(null);
  const [cardFooterContent, setCardFooterContent] = useState<FancyCardFooterContent>(null);
  const [cardTitleText, setCardTitleText] = useState<FancyCardTitleText>(null);

  return {
    state: {
      cardCustomStyles,
      cardExtraClasses,
      cardFooterContent,
      cardTitleText,
    },
    actions: {
      setCardCustomStyles,
      setCardExtraClasses,
      setCardFooterContent,
      setCardTitleText,
    },
  };
}

export { useFancyCard };
