import thumbnailImg from "@/src/assets/spotlight-img-min.jpg";
import { useCreateExcerpt } from "@/src/hooks/use-create-excerpt";
import { FancyCardApi } from "@/stories/Compositions/FancyCard/FancyCard.api";
import {
  FancyCardContainer,
  FancyCardContent,
  FancyCardContentWrapper,
  FancyCardFooter,
  FancyCardHeader,
  FancyCardIcon,
  FancyCardThumbnail,
} from "@/stories/Compositions/FancyCard/FancyCard.components";
import * as React from "react";

/**
 * FancyCard
 * @param props - FancyCardApi
 */
export function FancyCard(props: FancyCardApi) {
  const excerpt = useCreateExcerpt(props.content);

  return (
    <FancyCardContainer>
      {props.hasThumbnail && (
        <FancyCardThumbnail imageAlt={props.imageAlt} thumbnailImg={props.thumbnailImg || thumbnailImg} />
      )}
      {props.hasIcon && <FancyCardIcon />}
      <FancyCardContentWrapper>
        <FancyCardHeader title={props.title} />
        <FancyCardContent content={excerpt} />
        <FancyCardFooter linkText={props.linkText} />
      </FancyCardContentWrapper>
    </FancyCardContainer>
  );
}
