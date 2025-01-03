/**
 * Creates an excerpt from a string of content.
 * @hook useCreateExcerpt
 * @param content
 * @param maxLength
 * @param trailingIndicator
 */
export function useCreateExcerpt(content: string, maxLength: number = 150, trailingIndicator: string = "..."): string {
  if (content.length <= maxLength) {
    return content;
  }

  const truncatedContent = content.slice(0, maxLength).trim();
  const lastSpaceIndex = truncatedContent.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    return truncatedContent.slice(0, lastSpaceIndex) + trailingIndicator;
  } else {
    return truncatedContent + trailingIndicator;
  }
}
