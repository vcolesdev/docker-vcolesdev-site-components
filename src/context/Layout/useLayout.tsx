import { useReducer, useState } from "react";

import { Layout, initLayout, layoutReducer } from "./reducer";

/**
 * Hook for handing layout states.
 * @hook useLayout
 */
export function useLayout() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [layout, dispatch] = useReducer(layoutReducer, initLayout);

  /**
   * Handle the initial layout based on the window width.
   * @function handleInitLayout
   */
  function handleInitLayout() {
    // Set the initial layout based on the window width.
    if (innerWidth < 768) {
      handleSmLayout();
      console.log("Initialize small layout");
    } else if (innerWidth >= 768 && innerWidth < 1024) {
      handleMdLayout();
      console.log("Initialize medium layout");
    } else if (innerWidth >= 1024 && innerWidth < 1400) {
      handleLgLayout();
      console.log("Initialize large layout");
    } else {
      handleFullLayout();
      console.log("Initialize full layout");
    }
  }

  /**
   * Handle the layout for small screens.
   * @function handleSmLayout
   */
  function handleSmLayout() {
    setInnerWidth(window.innerWidth);
    dispatch({
      type: "UPDATE_LAYOUT_SM",
      payload: {
        size: "sm",
        breakpoint: 768 as Layout["breakpoint"],
        viewportWidth: innerWidth,
      },
    });
  }

  /**
   * Handle the layout for medium screens.
   * @function handleMdLayout
   */
  function handleMdLayout() {
    setInnerWidth(window.innerWidth);
    dispatch({
      type: "UPDATE_LAYOUT_MD",
      payload: {
        size: "md",
        breakpoint: 1024 as Layout["breakpoint"],
        viewportWidth: innerWidth,
      },
    });
  }

  /**
   * Handle the layout for large screens.
   * @function handleLgLayout
   */
  function handleLgLayout() {
    setInnerWidth(window.innerWidth);
    dispatch({
      type: "UPDATE_LAYOUT_LG",
      payload: {
        size: "lg",
        breakpoint: 1400 as Layout["breakpoint"],
        viewportWidth: innerWidth,
      },
    });
  }

  /**
   * Handle the layout for full screens.
   * @function handleFullLayout
   */
  function handleFullLayout() {
    setInnerWidth(window.innerWidth);
    dispatch({
      type: "UPDATE_LAYOUT_FULL",
      payload: {
        size: "full",
        breakpoint: 1920 as Layout["breakpoint"],
        viewportWidth: innerWidth,
      },
    });
  }

  return {
    dispatch,
    layout,
    fn: {
      handleInitLayout,
      handleSmLayout,
      handleMdLayout,
      handleLgLayout,
      handleFullLayout,
    },
  };
}
