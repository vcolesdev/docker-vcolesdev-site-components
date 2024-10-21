import useChannelListener from "./useChannelListener";
import { darkModeEvent } from "../theme/events";
import { useEffect, useState } from "react";
import * as React from "react";

type DarkModeChannelOptsListener = React.Dispatch<React.SetStateAction<boolean | undefined>>;

/**
 * Get the dark mode channel options.
 * @param listener
 */
const getDarkModeChannelOpts = (listener: DarkModeChannelOptsListener) => ({
  eventName: darkModeEvent.eventName,
  listener: listener,
  updateEventName: darkModeEvent.updateEventName,
});

/**
 * Hook to get the current dark mode status and listen for changes.  Uses the addons channel and storybook-dark-mode addon.
 * @hook useDarkModeChannel
 */
export default function useDarkModeChannel() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  const darkModeChannelOpts = getDarkModeChannelOpts(setIsDarkMode);

  useChannelListener(darkModeChannelOpts);
  useEffect(() => {}, [isDarkMode]);

  return {
    isDarkMode,
    setIsDarkMode,
  };
}
