import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import * as React from "react";

export interface LogoApi {
  size: "sm" | "md" | "lg";
}

export function Logo({ size }: LogoApi) {
  const mm = gsap.matchMedia();

  const [logoSize, setLogoSize] = useState<LogoApi["size"] | "md">("md");
  const [logoText, setLogoText] = useState<string | null>(null);

  useEffect(() => {
    setLogoSize(size);
  }, [logoSize]);

  useGSAP(() => {
    mm.add("screen and (max-width: 640px)", () => {
      setLogoText("Vanessa C.");
    });
    mm.add("screen and (min-width: 641px)", () => {
      setLogoText("Vanessa Coles");
    });
  }, [logoText]);

  return (
    <div
      className={`inline-flex items-center justify-center ${logoSize === "sm" ? "text-md" : logoSize === "lg" ? "text-2xl" : "text-xl"}`}
    >
      <span className="inline-block font-logo">{logoText}</span>
    </div>
  );
}
