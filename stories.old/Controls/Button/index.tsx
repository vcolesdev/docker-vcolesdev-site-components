import { Button as MuiButton } from "@mui/base/Button";
import { useButton } from "@mui/base/useButton";
import * as React from "react";
import { useRef } from "react";

import type { ButtonProps } from "./Button.api";
import { useButtonApi, useMuiBaseButton } from "./hooks";

/**
 * MuiBaseButton
 * @param {ButtonProps} props
 */
function MuiBaseButton({ props }: { props: ButtonProps }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { children, disabled, style } = props;
  const { backdropStyles, buttonStyles, contentWrapperStyles } = useMuiBaseButton();
  const { buttonClasses } = useButtonApi(props);
  const { getRootProps } = useButton({ ...props, rootRef: ref });

  return (
    <MuiButton className={buttonClasses} disabled={disabled} style={style} {...getRootProps()}>
      <div className={contentWrapperStyles}>{children}</div>
      <span className={`${backdropStyles}`} />
    </MuiButton>
  );
}

/**
 * Button
 * @param {ButtonProps} props
 */
const Button = (props: ButtonProps) => {
  return <MuiBaseButton props={props} />;
};

export { Button, MuiBaseButton };
