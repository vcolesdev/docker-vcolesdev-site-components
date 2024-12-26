import { cn } from "@/src/utils/cn";
import * as React from "react";
import { ForwardedRef, forwardRef } from "react";

interface NavApi {
  ariaLabel?: string;
  children: React.ReactNode | React.ReactNode[];
  containerClasses?: string;
  id: string;
  navClasses?: string;
}

const styles = {
  element: cn(["nav-container", "relative", "my-6", "md:my-0"]),
};

const Nav = forwardRef(function Nav({ children, ...rest }: NavApi, ref: ForwardedRef<HTMLDivElement>) {
  const { ariaLabel, ...props } = rest;

  const containerClasses = props.containerClasses || "";
  const navClasses = props.navClasses || "";

  return (
    <div className={`${styles.element} ${containerClasses}`} ref={ref}>
      <nav aria-label={ariaLabel} className={`nav ${navClasses}`} id={props.id} role="navigation">
        {children}
      </nav>
    </div>
  );
});

export { Nav, NavApi };
