import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

interface LogoApi {
  size: "sm" | "md" | "lg";
}

function Logo({ size }: LogoApi) {
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
      className={`inline-flex items-center justify-center font-cursive ${logoSize === "sm" ? "text-md" : logoSize === "lg" ? "text-2xl" : "text-xl"}`}
    >
      <span className="inline-block font-logo">{logoText}</span>
    </div>
  );
}

export { Logo };
