import { cn } from "@/src/utils/cn";
import { FancyCardApi } from "@/stories/Compositions/FancyCard/FancyCard.api";
import { classnames } from "@/stories/Compositions/FancyCard/FancyCard.classes";
import { TablerIcon } from "@/stories/TablerIcon/TablerIcon";
import * as React from "react";

/**
 * FancyCardIcon
 * @param props - FancyCardIconApi
 */
export const FancyCardIcon = () => {
  return (
    <div className={classnames.icon}>
      <TablerIcon color="currentColor" currentIcon="IconCode" size={24} stroke={2} />
    </div>
  );
};

/**
 * FancyCardThumbnail
 * @param imageAlt
 * @param thumbnailImg
 */
export const FancyCardThumbnail = ({
  imageAlt,
  thumbnailImg,
}: {
  imageAlt: FancyCardApi["imageAlt"];
  thumbnailImg: FancyCardApi["thumbnailImg"];
}) => {
  return (
    <div className={classnames.thumbnail.container}>
      <div className={classnames.thumbnail.icon}>
        <TablerIcon color="currentColor" currentIcon="IconCode" size={24} stroke={2} />
      </div>
      <div className={classnames.thumbnail.overlay} />
      <img
        alt={imageAlt || "Presentational image"}
        className={classnames.thumbnail.image}
        src={thumbnailImg || thumbnailImg}
      />
    </div>
  );
};

/**
 * FancyCardFooter
 * @param linkText
 */
export const FancyCardFooter = ({ linkText }: { linkText: FancyCardApi["linkText"] }) => {
  return (
    <footer>
      <a className={classnames.linkText} href="/">
        <span>{linkText}</span>
        <span className={classnames.linkIcon}>
          <TablerIcon color="currentColor" currentIcon="IconArrowBadgeRight" size={24} stroke={2} />
        </span>
      </a>
    </footer>
  );
};

/**
 * FancyCardHeader
 * @param title
 * @returns
 */
export const FancyCardHeader = ({ title }: { title: FancyCardApi["title"] }) => {
  return (
    <header>
      <h4 className={classnames.title}>{title}</h4>
    </header>
  );
};

/**
 * FancyCardContent
 * @param content
 */
export const FancyCardContent = ({ content }: { content: FancyCardApi["content"] }) => {
  return (
    <article>
      <p>{content || "Default content."}</p>
    </article>
  );
};

/**
 * FancyCardContainer
 * @param children
 */
export const FancyCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={classnames.root}>{children}</div>;
};

/**
 * FancyCardContentWrapper
 * @param children
 */
export const FancyCardContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={classnames.content}>{children}</div>;
};
