import { Dispatch, ReactNode, createContext, useEffect } from "react";

import { Layout, LayoutActions } from "./reducer";
import { useLayout } from "./useLayout";

const LayoutContext = createContext<Layout | null>(null);
const LayoutDispatchContext = createContext<Dispatch<LayoutActions> | null>(null);

interface LayoutProvider {
  children: ReactNode | ReactNode[];
}

/**
 * The layout provider component.
 * @param children
 */
function LayoutProvider({ children }: LayoutProvider) {
  const { layout, dispatch, fn } = useLayout();

  useEffect(() => {
    fn.handleInitLayout();
  }, []);

  return (
    <LayoutContext.Provider value={layout}>
      <LayoutDispatchContext.Provider value={dispatch}>{children}</LayoutDispatchContext.Provider>
    </LayoutContext.Provider>
  );
}

export { LayoutContext, LayoutDispatchContext, LayoutProvider };
