import useAddonsChannel from "./useAddonsChannel";
import { useEffect } from "react";

interface Listener {
  (...args: any[]): void;
}

interface ChannelListenerOptions {
  eventName: string;
  listener: Listener;
  updateEventName: string;
}

/**
 * Listen for events on the addons channel.
 * @param options
 */
export default function useChannelListener(options: ChannelListenerOptions) {
  const channel = useAddonsChannel();
  const { eventName, listener, updateEventName } = options;

  /**
   * Add, remove, and update channel listeners.
   */
  const addChannelListener = () => channel.on(eventName, listener);
  const removeChannelListener = () => channel.removeListener(eventName, listener);
  const onUpdateChannel = () => channel.emit(updateEventName);

  // Add our channel listener
  useEffect(() => {
    addChannelListener();
    return () => removeChannelListener();
  }, [channel, eventName, listener]);

  return {
    addChannelListener,
    onUpdateChannel,
    removeChannelListener,
  };
}
