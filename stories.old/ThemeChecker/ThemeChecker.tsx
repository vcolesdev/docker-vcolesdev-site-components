import { ThemeContext } from "@/src/context/ThemeContext";
import { useContext, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

const ThemeChecker = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <div>
      <p>
        Current Theme: <code>{theme}</code>
      </p>
    </div>
  );
};

export { ThemeChecker };
