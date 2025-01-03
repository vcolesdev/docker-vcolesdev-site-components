import type { FeaturedPostApi } from "@/stories/Compositions/FeaturedPost/FeaturedPost.api";
import { classnames } from "@/stories/Compositions/FeaturedPost/FeaturedPost.classes";
import { TablerIcon } from "@/stories/TablerIcon/TablerIcon";

/**
 * FeaturedPostFooter
 */
export const FeaturedPostFooter = () => {
  return (
    <footer className={classnames.footer}>
      <a href="#" className={classnames.link.text}>
        <span>Read More</span>
        <span className={classnames.link.icon}>
          <TablerIcon color="currentColor" currentIcon="IconArrowNarrowRight" size={24} stroke={2} />
        </span>
      </a>
    </footer>
  );
};

/**
 * FeaturedPostHeader
 * @param title
 */
export const FeaturedPostHeader = ({ title }: { title: FeaturedPostApi["title"] }) => {
  return (
    <header>
      <h3 className={classnames.title}>{title || "This is an Example Post Title."}</h3>
    </header>
  );
};

/**
 * FeaturedPostThumbnail
 * @param imageSrc
 * @param imageAlt
 */
export const FeaturedPostThumbnail = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: FeaturedPostApi["imageSrc"];
  imageAlt: FeaturedPostApi["imageAlt"];
}) => {
  return (
    <div className={classnames.thumbnail}>
      <img className={classnames.thumbnailImg} src={imageSrc} alt={imageAlt} />
    </div>
  );
};

/**
 * FeaturedPostTopic
 * @param topic
 */
export const FeaturedPostTopic = ({ topic }: { topic: FeaturedPostApi["topic"] }) => {
  return (
    <div className={classnames.topic.wrapper}>
      <span className={classnames.topic.text}>{topic}</span>
    </div>
  );
};

/**
 * FeaturedPostContainer
 * @param children
 */
export const FeaturedPostContainer = ({ children }: { children: React.ReactNode }) => {
  return <article className={classnames.root}>{children}</article>;
};

/**
 * FeaturedPostLink
 * @param children
 */
export const FeaturedPostLink = ({ children }: { children: React.ReactNode }) => {
  return <a href="/">{children}</a>;
};

/**
 * FeaturedPostContent
 * @param content
 */
export const FeaturedPostContent = ({ content }: { content: string }) => {
  return <div className={classnames.content}>{content}</div>;
};
