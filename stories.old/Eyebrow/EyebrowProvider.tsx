import { EyebrowApiProvider } from "./Eyebrow";
import { styles } from "./Eyebrow.styles";

/**
 * EyebrowProvider
 * @param {EyebrowApiProvider} props - The props for the Eyebrow container component.
 */
export function EyebrowProvider(props: EyebrowApiProvider) {
  return (
    <div className={styles.provider} ref={props.ref} {...props}>
      {props.children}
    </div>
  );
}
