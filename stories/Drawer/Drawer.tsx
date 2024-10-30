import { cn } from "@/src/utils/cn";
import { ForwardedRef, forwardRef } from "react";
import * as React from "react";

interface DrawerBaseApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClasses?: string;
  id: string;
}

const elemStyles = {
  base: cn([]),
};

const Drawer = forwardRef(function Drawer({ id, ...rest }: DrawerBaseApi, ref: ForwardedRef<HTMLDivElement>) {
  const { children, extraClasses } = rest;

  return (
    <aside className={`${elemStyles.base} ${extraClasses || ""}`} id={id} ref={ref} {...rest}>
      {children}
    </aside>
  );
});

export { Drawer };
