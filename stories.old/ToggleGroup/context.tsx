import { ComponentPropsWithRef, createContext, useMemo } from "react";
import * as React from "react";

interface ToggleGroupContextApi {
  value: string | null;
  onChange: (value: string) => void;
}

type ToggleGroupRootBaseApi = {
  children: React.ReactNode | React.ReactNode[] | string;
  value: ToggleGroupContextApi["value"];
  onChange: ToggleGroupContextApi["onChange"];
};

type ToggleGroupRootApi = ToggleGroupRootBaseApi & Omit<ComponentPropsWithRef<"div">, keyof ToggleGroupRootBaseApi>;

const ToggleGroupContext = createContext({
  value: null,
  onChange: (value: string) => {},
});

function ToggleGroupRoot({ children, value, onChange, ...rest }: ToggleGroupRootApi) {
  const providerValue = useMemo(() => ({ value, onChange }), [value, onChange]);

  return (
    <ToggleGroupContext.Provider value={providerValue}>
      <div {...rest}>{children}</div>
    </ToggleGroupContext.Provider>
  );
}

export { ToggleGroupContext, ToggleGroupContextApi };
