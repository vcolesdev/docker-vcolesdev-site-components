import { api } from "../Button.api";

function useMuiBaseButton() {
  const { styles } = api;
  const buttonStyles = styles.root;
  const backdropStyles = styles.backdrop.root;
  const contentWrapperStyles = styles.contentWrapper;

  return {
    buttonStyles,
    backdropStyles,
    contentWrapperStyles,
  };
}

export { useMuiBaseButton };
