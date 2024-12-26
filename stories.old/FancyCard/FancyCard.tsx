import * as React from "react";
import { ForwardedRef, forwardRef, useEffect } from "react";

import { FancyCardApi } from "./FancyCard.api";
import { FancyCardProvider } from "./FancyCardProvider";
import { FancyCardContent, FancyCardFooter, FancyCardHeader } from "./parts";
import { useFancyCard } from "./useFancyCard";

/**
 * Fancy Card
 * @param children
 * @param rest - FancyCardApi
 * @component FancyCard
 */
const FancyCard = forwardRef(function FancyCard({ ...props }: FancyCardApi, ref: ForwardedRef<HTMLDivElement>) {
  const { children, extraClasses, id, styles } = props;

  const { state, actions } = useFancyCard();
  const { cardExtraClasses, cardCustomStyles } = state;

  useEffect(() => {
    actions.setCardCustomStyles(styles);
    actions.setCardExtraClasses(extraClasses);
  }, [cardCustomStyles, cardExtraClasses]);

  return (
    <FancyCardProvider extraClasses={cardExtraClasses} id={id} ref={ref} styles={cardCustomStyles}>
      {children}
    </FancyCardProvider>
  );
});

/**
 * Fancy Card with Footer
 * @param children
 * @param rest - FancyCardApi
 * @component FancyCardWithFooter
 */
function FancyCardWithFooter({ children, ...rest }: FancyCardApi) {
  const { extraClasses, id, footerContent, styles, ...props } = rest;
  const cardProps = { props };

  const { state, actions } = useFancyCard();
  const { cardFooterContent } = state;

  useEffect(() => {
    actions.setCardFooterContent(footerContent);
  }, [cardFooterContent]);

  return (
    <FancyCard {...cardProps}>
      <FancyCardContent>{children}</FancyCardContent>
      <FancyCardFooter>{cardFooterContent}</FancyCardFooter>
    </FancyCard>
  );
}

/**
 * Fancy Card with Header
 * @param children
 * @param rest - FancyCardApi
 * @component FancyCardWithHeader
 */
function FancyCardWithHeader({ children, ...rest }: FancyCardApi) {
  const { titleText, ...props } = rest;
  const cardProps = { props };

  const { state, actions } = useFancyCard();
  const { cardTitleText } = state;

  useEffect(() => {
    actions.setCardTitleText(titleText);
  }, [cardTitleText]);

  return (
    <FancyCard {...cardProps}>
      <FancyCardHeader title={cardTitleText} />
      <FancyCardContent>{children}</FancyCardContent>
    </FancyCard>
  );
}

/**
 * Fancy Card Full
 * @param children
 * @param rest - FancyCardApi
 * @component FancyCardFull
 */
function FancyCardFull({ children, ...rest }: FancyCardApi) {
  const { footerContent, titleText, ...props } = rest;
  const cardProps = { props };

  const { state, actions } = useFancyCard();
  const { cardFooterContent, cardTitleText } = state;

  useEffect(() => {
    actions.setCardFooterContent(footerContent);
    actions.setCardTitleText(titleText);
  });

  return (
    <FancyCard {...cardProps}>
      <FancyCardHeader title={cardTitleText} />
      {children}
      <FancyCardFooter>{cardFooterContent}</FancyCardFooter>
    </FancyCard>
  );
}

export { FancyCard, FancyCardFull, FancyCardWithFooter, FancyCardWithHeader };
