/**
 * @interface FancyCardApi
 */
export interface FancyCardApi {
  content: string;
  hasIcon?: boolean;
  hasThumbnail?: boolean;
  imageAlt?: string;
  linkText: string;
  thumbnailImg?: string;
  title: string;
}
