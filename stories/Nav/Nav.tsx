import * as React from "react";
import { ForwardedRef, forwardRef } from "react";

interface NavApi {
  ariaLabel?: string;
  children: React.ReactNode | React.ReactNode[];
  containerClasses?: string;
  id: string;
  navClasses?: string;
}

const Nav = forwardRef(function Nav({ children, ...rest }: NavApi, ref: ForwardedRef<HTMLDivElement>) {
  const { ariaLabel, ...props } = rest;

  const containerClasses = props.containerClasses || "";
  const navClasses = props.navClasses || "";

  return (
    <div className={`nav-container relative ${containerClasses}`} ref={ref}>
      <nav aria-label={ariaLabel} className={`nav ${navClasses}`} id={props.id} role="navigation">
        {children}
      </nav>
    </div>
  );
});

export { Nav, NavApi };
