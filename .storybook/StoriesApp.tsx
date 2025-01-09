import { ReactNode, useEffect } from "react";
import * as React from "react";

import useStoriesApp from "./hooks/app/useStoriesApp";

interface StoriesAppProps {
  children: ReactNode | ReactNode[];
  isDarkTheme: boolean;
}

/**
 * StoriesApp component
 * @param children
 * @param isDarkTheme
 * @constructor
 */
export default function StoriesApp({ children, isDarkTheme }: StoriesAppProps) {
  const { globalStyles } = useStoriesApp(isDarkTheme);

  useEffect(() => {}, [isDarkTheme]);

  console.log("isDarkTheme", isDarkTheme);

  const styles = {
    //backgroundColor: globalStyles.bgColor,
    color: globalStyles.textColor,
  };

  return (
    <div className="stories-app" style={styles}>
      {children}
    </div>
  );
}
