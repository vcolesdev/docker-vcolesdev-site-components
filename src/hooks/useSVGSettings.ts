import { useEffect, useRef } from "react";

interface SVGSettingsApi {
  fill?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  viewBox?: string;
  width?: string;
  xmlns?: string;
  [key: string]: string;
}

const SVG_SETTINGS = {
  fill: "none",
  height: "24",
  stroke: "currentColor",
  strokeWidth: "2",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg",
} as SVGSettingsApi;

function useSVGSettings(settings: SVGSettingsApi) {
  const svgSettings = useRef<SVGSettingsApi | null>(null);

  useEffect(() => {
    svgSettings.current = SVG_SETTINGS;
  }, [svgSettings]);

  return { ...svgSettings.current } as SVGSettingsApi;
}

export { SVG_SETTINGS, useSVGSettings };
export type { SVGSettingsApi };
