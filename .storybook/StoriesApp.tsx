import { ReactNode, useEffect } from "react";

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

  return (
    <div
      className="stories-app"
      style={{
        //backgroundColor: globalStyles.bgColor,
        color: globalStyles.textColor,
      }}
    >
      {children}
    </div>
  );
}
