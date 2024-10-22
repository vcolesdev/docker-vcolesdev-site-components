import { useScrollTrigger } from "@/src/hooks/useScrollTrigger";
import { cn } from "@/src/utils/cn";
import { Logo } from "@/stories/Logo/Logo";
import { Nav } from "@/stories/Nav/Nav";
import { NavLinks } from "@/stories/NavLinks/NavLinks";
import { TablerIcon } from "@/stories/TablerIcon/TablerIcon";
import { ToggleButton } from "@/stories/ToggleGroup/ToggleGroup";
import { ToggleGroup } from "@/stories/ToggleGroup/ToggleGroup";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect } from "react";

interface HeaderApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClasses?: string;
  id?: string;
}

const HEADER_CLASSES = {
  element: cn([
    "group/header",
    "header",
    "flex",
    "space-between",
    "items-center",
    "mx-auto",
    "px-6",
    "w-full",
    "transition",
    "duration-400",
    "ease-in-out-cubic",
  ]),
  scrolled: cn(["max-w-[90%]"]),
  container: {
    element: cn([
      "group/header",
      "header-container",
      "flex",
      "content-center",
      "items-center",
      "top-0",
      "left-0",
      "h-[100px]",
      "backdrop-blur-md",
      "max-w-full",
      "w-full",
      "shadow-none",
      "z-100",
    ]),
    scrolled: cn(["group/header", "h-[82]", "bg-[rgba(25,25,25,0.8)]", "shadow-light", "z-100", "dark:shadow-dark"]),
  },
  content: cn([
    "flex",
    "max-w-screen-xl",
    "mx-auto",
    "pe-8",
    "ps-0",
    "items-center",
    "justify-between",
    "h-full",
    "w-full",
  ]),
};

const TOGGLE_BUTTONS = {
  element: cn([
    "bg-transparent",
    "text-tree-bark",
    "shadow-sm",
    "hover:bg-transparent",
    "hover:text-melon",
    "focus:text-melon",
    "focus:ring-melon",
    "focus:ring-[2px]",
    "focus:ring-offset-1",
    "dark:focus:ring-[1.5px]",
    "dark:bg-transparent",
    "dark:hover:bg-transparent",
    "dark:hover:text-white",
    "dark:focus:bg-slate-800",
    "dark:focus:text-white",
    "dark:focus:ring-sky",
  ]),
  first: cn(["rounded-tr-none", "rounded-br-none"]),
  second: cn(["rounded-tr-none", "rounded-tl-none", "rounded-br-none", "rounded-bl-none"]),
  third: cn(["rounded-tl-none", "rounded-bl-none"]),
};

function Header({ children, ...rest }: HeaderApi) {
  const container = React.useRef<HTMLDivElement>(null);
  const header = React.useRef<HTMLDivElement>(null);

  const initContainerScrollTrigger = () =>
    useScrollTrigger({
      trigger: container.current!,
      start: "top -100px",
      end: 99999,
      toggleClassname: HEADER_CLASSES.container.scrolled,
      toggleTargets: ".header-container",
    });

  const initHeaderScrollTrigger = () =>
    useScrollTrigger({
      trigger: header.current!,
      start: "top -100px",
      end: 99999,
      toggleClassname: HEADER_CLASSES.scrolled,
      toggleTargets: ".header",
    });

  useEffect(() => {
    initContainerScrollTrigger();
    initHeaderScrollTrigger();
  }, [container, header]);

  return (
    <div className={`${HEADER_CLASSES.container.element}`} ref={container}>
      <header className={`${HEADER_CLASSES["element"]}`} ref={header}>
        <div className={`${HEADER_CLASSES["content"]}`}>
          <div>
            <Logo size="md" />
          </div>
          <Nav ariaLabel="Primary Nav" id="primary-nav">
            <NavLinks items={["Home", "About", "Projects", "Writings"]} />
          </Nav>
        </div>
        <div>
          <ToggleGroup>
            <div className="inline-flex p-1 rounded-[0.5rem] bg-[#f4d1cb] dark:bg-dark--elevated">
              <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.first}`} value="light">
                <TablerIcon currentIcon="IconSun" size={20} stroke={2} />
              </ToggleButton>
              <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.second}`} value="dark">
                <TablerIcon currentIcon="IconMoon" size={20} stroke={2} />
              </ToggleButton>
              <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.third}`} value="system">
                <TablerIcon currentIcon="IconDevicesPc" size={20} stroke={2} />
              </ToggleButton>
            </div>
          </ToggleGroup>
        </div>
      </header>
    </div>
  );
}

export { Header, HeaderApi };
