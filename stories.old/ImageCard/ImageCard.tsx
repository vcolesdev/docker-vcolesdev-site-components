import { cn } from "@/src/utils/cn";
import { caption } from "framer-motion/m";
import * as React from "react";
import { ForwardedRef, forwardRef } from "react";

import { Spacer } from "../Spacer/Spacer";

interface ImageCardContainerApi {
  children: React.ReactNode | React.ReactNode[];
}

interface ImageCardApi {
  caption?: string;
  alt?: string;
  hasCaption?: boolean;
  id?: string;
  src: string;
}

interface ImageCardWithCaptionApi extends ImageCardApi {
  caption: string;
}

const imageClasses = {
  container: cn([
    "group/image-card",
    "inline-flex",
    "flex-col",
    "relative",
    "top-0",
    "left-0",
    "opacity-90",
    "scale-100",
    "cursor-pointer",
    "transition",
    "delay-75",
    "duration-500",
    "translate-y-0",
    "ease-in-out-cubic",
    "hover:translate-y-[-4px]",
    "hover:opacity-100",
    "hover:scale-105",
  ]),
  imgContainer: cn([
    "group/image-card",
    "overflow-hidden",
    "max-w-4xl",
    "rounded-lg",
    "shadow-md",
    "shadow-theme-light",
    "overflow-hidden",
    "transition",
    "delay-75",
    "duration-500",
    "translate-y-0",
    "hover:shadow-2xl",
    "hover:shadow-theme-light",
    "ease-in-out-cubic",
    "dark:shadow-theme-dark",
    "dark:hover:shadow-theme-dark",
  ]),
  element: cn([
    "group/image-card",
    "object-cover",
    "w-full",
    "h-full",
    "transform",
    "scale-100",
    "transition",
    "duration-500",
    "ease-in-out-cubic",
    "group-hover/image-card:scale-105",
  ]),
  caption: cn([
    "pt-4",
    "ms-3",
    "uppercase",
    "font-bold",
    "text-sm",
    "tracking-wider",
    "text-tree-bark",
    "transition",
    "duration-500",
    "ease-in-out-cubic",
    "dark:text-sky",
    "group-hover/image-card:text-melon",
    "group-hover/image-card:dark:text-rose",
  ]),
};

function ImageCardContainer({ children }: ImageCardContainerApi) {
  return <div className={imageClasses.container}>{children}</div>;
}

const ImageContainer = forwardRef(({ children, ...rest }: ImageCardContainerApi, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <figure className={imageClasses.imgContainer} ref={ref}>
      {children}
    </figure>
  );
});

const ImageCard = forwardRef(({ src, ...rest }: ImageCardApi, ref: ForwardedRef<HTMLImageElement>) => {
  const { alt, caption, hasCaption, id } = rest;

  return (
    <ImageCardContainer>
      <ImageContainer>
        <img alt={alt} className={imageClasses.element} id={id} src={src} ref={ref} {...rest} />
      </ImageContainer>
      {hasCaption && <figcaption className={imageClasses.caption}>{caption}</figcaption>}
      <Spacer size="md" />
    </ImageCardContainer>
  );
});

export { ImageCard, ImageCardContainer, ImageCardApi };
