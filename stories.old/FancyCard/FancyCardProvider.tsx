import { cn } from "@/src/utils/cn";
import * as React from "react";

import { FancyCardProviderApi } from "./FancyCard.api";
import { FANCY_CARD_STYLES } from "./FancyCard.styles";

const FancyCardProvider = (props: FancyCardProviderApi) => {
  const cardStyles = FANCY_CARD_STYLES;

  let { children, extraClasses, id, ref, styles } = props;

  const classes = cn([cardStyles["element"], extraClasses]);

  return (
    <article className={classes} id={id} ref={ref} style={styles}>
      {children}
    </article>
  );
};

export { FancyCardProvider };
