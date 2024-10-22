import spotLightImg from "@/src/assets/spotlight-img-min.jpg";
import { cn } from "@/src/utils/cn";
import { Eyebrow } from "@/stories/Eyebrow/Eyebrow";
import { Heading } from "@/stories/Heading/Heading";
import { Spacer } from "@/stories/Spacer/Spacer";
import { TextContent } from "@/stories/TextContent/TextContent";
import * as React from "react";
import { ForwardedRef, forwardRef } from "react";

interface SpotlightApi {
  children: React.ReactNode | React.ReactNode[] | string;
  eyebrowText?: string;
  headingText?: string;
  imageSrc?: string;
  imageDesc?: string;
}

interface SpotlightContainerApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

interface SpotlightContentWrapperApi extends SpotlightContainerApi {}

interface SpotlightImgContainerApi extends SpotlightContainerApi {}

interface SpotlightContentContainerApi extends SpotlightContainerApi {}

interface SpotlightContentApi extends SpotlightContainerApi {}

const SPOTLIGHT_CLASSES = {
  element: cn([
    "group/spotlight",
    "spotlight",
    "relative",
    "shadow-xl",
    "shadow-theme-light",
    "overflow-hidden",
    "dark:shadow-theme-dark",
  ]),
};

const SPOTLIGHT_CONTENT_WRAPPER_CLASSES = {
  element: cn(["group/spotlight", "spotlight-content-wrapper", "grid", "grid-cols-1", "md:grid-cols-2"]),
};

const SPOTLIGHT_IMG_CONTAINER_CLASSES = {
  element: cn(["group/spotlight", "spotlight-img-container", "h-full", "w-full", "relative", "overflow-hidden"]),
};

const SPOTLIGHT_IMG_CLASSES = {
  element: cn([
    "group/spotlight",
    "spotlight-img",
    "block",
    "h-full",
    "w-full",
    "object-cover",
    "object-center",
    "scale-100",
    "transition",
    "delay-50",
    "duration-500",
    "ease-in-out-cubic",
    "blur-sm",
    "group-hover/spotlight:blur-none",
    "group-hover/spotlight:scale-105",
  ]),
};

const SPOTLIGHT_CONTENT_CONTAINER_CLASSES = {
  element: cn([
    "group/spotlight",
    "spotlight-content-container",
    "flex",
    "flex-col",
    "justify-center",
    "py-12",
    "md:py-20",
    "lg:py-26",
    "bg-spotlight",
    "transition",
    "transition-all",
    "duration-500",
    "ease-in-out-cubic",
    "dark:bg-spotlight-dark",
  ]),
};

const SPOTLIGHT_CONTENT_CLASSES = {
  element: cn([
    "group/spotlight",
    "spotlight-content",
    "flex",
    "flex-col",
    "justify-center",
    "px-8",
    "transition",
    "transition-all",
    "duration-500",
    "ease-in-out-cubic",
    "md:px-12",
    "lg:px-18",
    "xl:px-20",
  ]),
};

const SpotlightContainer = forwardRef((props: SpotlightContainerApi, ref: ForwardedRef<HTMLDivElement>) => {
  const { children } = props;
  return (
    <div className={`${SPOTLIGHT_CLASSES["element"]}`} ref={ref}>
      {children}
    </div>
  );
});

function SpotlightContentWrapper({ children }: SpotlightContentWrapperApi) {
  return <div className={`${SPOTLIGHT_CONTENT_WRAPPER_CLASSES["element"]}`}>{children}</div>;
}

function SpotlightImgContainer({ children }: SpotlightImgContainerApi) {
  return <div className={`${SPOTLIGHT_IMG_CONTAINER_CLASSES["element"]}`}>{children}</div>;
}

function SpotlightContentContainer({ children }: SpotlightContentContainerApi) {
  return <div className={`${SPOTLIGHT_CONTENT_CONTAINER_CLASSES["element"]}`}>{children}</div>;
}

function SpotlightContent({ children }: SpotlightContentApi) {
  return <div className={`${SPOTLIGHT_CONTENT_CLASSES["element"]}`}>{children}</div>;
}

function Spotlight({ children, ...rest }: SpotlightApi) {
  const { eyebrowText, headingText, imageDesc, imageSrc } = rest;

  return (
    <SpotlightContainer>
      <SpotlightContentWrapper>
        <SpotlightImgContainer>
          <img alt={imageDesc} className={`${SPOTLIGHT_IMG_CLASSES["element"]}`} src={imageSrc || spotLightImg} />
        </SpotlightImgContainer>
        <SpotlightContentContainer>
          <SpotlightContent>
            <Eyebrow content={eyebrowText} />
            <div className="mb-6 lg:mb-8" />
            <Heading size="xl">{headingText}</Heading>
            <Spacer size="sm" />
            <TextContent size="2xl">{children}</TextContent>
          </SpotlightContent>
        </SpotlightContentContainer>
      </SpotlightContentWrapper>
    </SpotlightContainer>
  );
}

export { Spotlight, SpotlightApi };
