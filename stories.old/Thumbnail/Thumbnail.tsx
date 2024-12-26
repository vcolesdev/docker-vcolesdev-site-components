import testImage from "@/assets/spotlight-img-min.jpg";
import { cn } from "@/src/utils/cn";
import { ForwardedRef, forwardRef } from "react";
import * as React from "react";

interface ThumbnailApi {
  altText: string;
  extraClasses?: string;
  handleClick?: () => void;
  hasOverlay?: boolean;
  id?: string;
  overlayContent?: string;
  src: string;
}

interface ThumbnailOverlayApi {
  content?: string | React.ReactNode | JSX.Element | null;
  extraClasses?: string;
}

const elementStyles = {
  element: cn([
    "group/thumbnail",
    "relative",
    "cursor-pointer",
    "rounded-lg",
    "overflow-hidden",
    "opacity-80",
    "scale-100",
    "transition-all",
    "ease-in-out-cubic",
    "duration-300",
    "hover:opacity-100",
    "hover:scale-105",
    "hover:shadow-xl",
    "hover:shadow-theme-light",
    "active:scale-100",
    "dark:hover:shadow-theme-dark",
  ]),
  contentWrapper: cn(["group/thumbnail"]),
  fullSize: {
    container: cn(["group/thumbnail", "hidden", "z-[10]", "relative", "absolute"]),
    image: cn(["group/thumbnail", "block", "w-full", "h-full", "object-cover"]),
  },
  overlay: cn([
    "group/thumbnail",
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "font-body",
    "text-white",
    "text-xl",
    "font-semibold",
    "bg-black",
    "opacity-0",
    "transition-all",
    "ease-in-out-cubic",
    "duration-300",
    "hover:opacity-80",
  ]),
  thumb: cn(["block", "w-full", "h-full", "object-cover"]),
};

function ThumbnailOverlay({ content, ...props }: ThumbnailOverlayApi) {
  return (
    <div className={`${elementStyles.overlay} ${props.extraClasses}`}>
      <div>{content || "Click Me"}</div>
    </div>
  );
}

const Thumbnail = forwardRef(function Thumbnail({ src, ...props }: ThumbnailApi, ref: ForwardedRef<HTMLDivElement>) {
  const { altText, extraClasses, handleClick, id, ...rest } = props;

  return (
    <div
      id={id}
      className={`${elementStyles.element} ${extraClasses}`}
      onClick={handleClick}
      ref={ref}
      role="presentation"
    >
      {/* Image */}
      <div className={elementStyles.contentWrapper}>
        <img alt={altText || ""} className={elementStyles.thumb} src={src || testImage} />
      </div>
      {/* Overlay */}
      {rest.hasOverlay && <ThumbnailOverlay content={rest.overlayContent} />}
      {/* FullSize Image */}
      <div className={elementStyles.fullSize.container}>
        <img alt={altText || ""} className={elementStyles.fullSize.image} src={src || testImage} />
      </div>
    </div>
  );
});

export { Thumbnail, ThumbnailApi };
