import { ReactNode, useEffect } from "react";

//import ThemeProvider from "./ThemeProvider";
import { ThemeProvider } from "../../src/context/ThemeContext";

/**
 * ThemeWrapper
 * @param children
 * @constructor
 */
export default function ThemeWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  // Run once.
  useEffect(() => {}, []);
  // Return the ThemeProvider.
  return <ThemeProvider>{children}</ThemeProvider>;
}
