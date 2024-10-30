enum Breakpoints {
  SM = 768,
  MD = 1024,
  LG = 1440,
  FULL = 1920,
}

type Breakpoint = Breakpoints | null;
type LayoutSize = "sm" | "md" | "lg" | "full" | null;

type UPDATE_LAYOUT_SM = "UPDATE_LAYOUT_SM";
type UPDATE_LAYOUT_MD = "UPDATE_LAYOUT_MD";
type UPDATE_LAYOUT_LG = "UPDATE_LAYOUT_LG";
type UPDATE_LAYOUT_FULL = "UPDATE_LAYOUT_FULL";

interface Layout {
  size: LayoutSize | null;
  breakpoint: Breakpoint | null;
  viewportWidth: number | null;
}

interface UpdateLayoutSM {
  type: UPDATE_LAYOUT_SM;
  payload: Layout;
}

interface UpdateLayoutMD {
  type: UPDATE_LAYOUT_MD;
  payload: Layout;
}

interface UpdateLayoutLG {
  type: UPDATE_LAYOUT_LG;
  payload: Layout;
}

interface UpdateLayoutFULL {
  type: UPDATE_LAYOUT_FULL;
  payload: Layout;
}

type LayoutActions = UpdateLayoutSM | UpdateLayoutMD | UpdateLayoutLG | UpdateLayoutFULL;

const initLayout: Layout = {
  size: null,
  breakpoint: null,
  viewportWidth: null,
};

const layoutReducer = (layout: Layout = initLayout, action: LayoutActions): Layout => {
  switch (action.type) {
    case "UPDATE_LAYOUT_SM":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_MD":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_LG":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_FULL":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    default:
      return layout;
  }
};

export { Layout, LayoutActions, layoutReducer, initLayout };
