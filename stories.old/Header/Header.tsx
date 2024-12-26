import { useScrollTrigger } from "@/src/hooks/useScrollTrigger";
import { cn } from "@/src/utils/cn";
import * as React from "react";
import { useEffect } from "react";

import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { NavLinks } from "../NavLinks/NavLinks";
import { TablerIcon } from "../TablerIcon/TablerIcon";
import { ToggleButton } from "../ToggleGroup/ToggleGroup";
import { ToggleGroup } from "../ToggleGroup/ToggleGroup";

interface HeaderApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClasses?: string;
  id?: string;
}

const styles = {
  element: cn([
    "group/header",
    "header",
    "block",
    "md:flex",
    "md:space-between",
    "md:items-center",
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
      "md:flex",
      "md:content-center",
      "md:items-center",
      "top-0",
      "left-0",
      "md:h-[100px]",
      "backdrop-blur-md",
      "max-w-full",
      "w-full",
      "shadow-none",
      "z-100",
    ]),
    scrolled: cn(["group/header", "h-[82]", "bg-[rgba(25,25,25,0.8)]", "shadow-light", "z-100", "dark:shadow-dark"]),
  },
  content: cn([
    "md:flex",
    "md:items-center",
    "md:justify-between",
    "max-w-screen-xl",
    "mx-auto",
    "pe-8",
    "ps-0",
    "h-full",
    "w-full",
  ]),
};

const toggleButtons = {
  container: cn(["inline-flex", "p-1", "rounded-[0.5rem]", "bg-[#f4d1cb]", "dark:bg-dark--elevated"]),
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
      toggleClassname: styles.container.scrolled,
      toggleTargets: ".header-container",
    });

  const initHeaderScrollTrigger = () =>
    useScrollTrigger({
      trigger: header.current!,
      start: "top -100px",
      end: 99999,
      toggleClassname: styles.scrolled,
      toggleTargets: ".header",
    });

  useEffect(() => {
    initContainerScrollTrigger();
    initHeaderScrollTrigger();
  }, [container, header]);

  return (
    <div className={`${styles.container.element}`} ref={container}>
      <header className={styles.element} ref={header}>
        <div className={styles.content}>
          <div>
            <Logo size="md" />
          </div>
          <Nav ariaLabel="Primary Nav" id="primary-nav">
            <NavLinks items={["Home", "About", "Services", "Projects", "Writings", "Contact"]} />
          </Nav>
        </div>
        <div>
          <ToggleGroup>
            <div className={toggleButtons.container}>
              <ToggleButton className={`${toggleButtons.element} ${toggleButtons.first}`} value="light">
                <TablerIcon currentIcon="IconSun" size={20} stroke={2} />
              </ToggleButton>
              <ToggleButton className={`${toggleButtons.element} ${toggleButtons.second}`} value="dark">
                <TablerIcon currentIcon="IconMoon" size={20} stroke={2} />
              </ToggleButton>
            </div>
          </ToggleGroup>
        </div>
      </header>
    </div>
  );
}

export { Header, HeaderApi };
