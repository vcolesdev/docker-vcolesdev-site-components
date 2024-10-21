import { addons } from "@storybook/preview-api";
import { useEffect } from "react";

/**
 * Get the addons channel.
 * @hook useGetAddonsChannel
 */
export default function useAddonsChannel() {
  const channel = addons.getChannel();
  useEffect(() => {}, [channel]);
  return channel;
}
