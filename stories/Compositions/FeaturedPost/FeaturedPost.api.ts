/**
 * @interface FeaturedPostApi
 */
export interface FeaturedPostApi {
  content: string;
  contentLength?: number;
  hasThumbnail?: boolean;
  imageAlt?: string;
  imageSrc?: string;
  title: string;
  topic: string;
}