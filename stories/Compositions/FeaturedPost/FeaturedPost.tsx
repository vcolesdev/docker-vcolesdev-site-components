import defaultImg from "@/src/assets/spotlight-img-min.jpg";
import { useCreateExcerpt } from "@/src/hooks/use-create-excerpt";
import type { FeaturedPostApi } from "@/stories/Compositions/FeaturedPost/FeaturedPost.api";
import {
  FeaturedPostContainer,
  FeaturedPostContent,
  FeaturedPostFooter,
  FeaturedPostHeader,
  FeaturedPostLink,
  FeaturedPostThumbnail,
  FeaturedPostTopic,
} from "@/stories/Compositions/FeaturedPost/FeaturedPost.components";
import * as React from "react";

/**
 * FeaturedPost
 * @param props FeaturedPostApi
 */
export function FeaturedPost(props: FeaturedPostApi) {
  const excerpt = useCreateExcerpt(props.content, props.contentLength || 100);

  return (
    <FeaturedPostLink>
      <FeaturedPostContainer>
        {props.hasThumbnail && (
          <FeaturedPostThumbnail
            imageAlt={props.imageAlt || "Post Thumbnail"}
            imageSrc={props.imageSrc || defaultImg}
          />
        )}
        <FeaturedPostTopic topic={props.topic || "TypeScript"} />
        <FeaturedPostHeader title={props.title} />
        <FeaturedPostContent content={excerpt} />
        <FeaturedPostFooter />
      </FeaturedPostContainer>
    </FeaturedPostLink>
  );
}
