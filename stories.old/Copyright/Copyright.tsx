import * as React from "react";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

import { TextContent } from "../TextContent/TextContent";

interface CopyrightApi {
  name: string;
}

const Copyright = forwardRef(function Copyright({ ...props }: CopyrightApi, ref: ForwardedRef<HTMLDivElement>) {
  const { name } = props;

  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, [currentYear]);

  return (
    <TextContent element="div" size="sm" ref={ref}>
      <span className="font-semibold">
        &copy; {currentYear} {name}, All Rights Reserved
      </span>
    </TextContent>
  );
});

export { Copyright, CopyrightApi };
