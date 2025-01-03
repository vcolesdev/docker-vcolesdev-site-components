import { classnames } from "@/stories/Compositions/FeaturedSectionIntro/FeaturedSectionIntro.classes";
import { Button, ButtonApi } from "@/stories/Controls/Button/Button";
import { IconButton } from "@/stories/Controls/IconButton/IconButton";
import { TablerIconName } from "@/stories/TablerIcon/TablerIcon";
import { Eyebrow, EyebrowWithIcon } from "@/stories/Typography/Eyebrow/Eyebrow";
import { EyebrowWithIconApi } from "@/stories/Typography/Eyebrow/Eyebrow.api";
import { Heading } from "@/stories/Typography/Heading/Heading";
import { HeadingSizes } from "@/stories/Typography/Heading/Heading.api";
import { Spacer } from "@/stories/Typography/Spacer/Spacer";
import { Text } from "@/stories/Typography/Text/Text";

/**
 * @interface FeaturedSectionIntroFeaturesApi
 */
export interface FeaturedSectionIntroFeaturesApi {
  hasCta?: boolean;
  hasCtaIcon?: boolean;
  hasDescription?: boolean;
  hasEyebrow?: boolean;
  hasEyebrowIcon?: boolean;
}

/**
 * @interface FeaturedSectionIntroCtaApi
 */
export interface FeaturedSectionIntroCtaApi {
  icon?: TablerIconName;
  iconPos?: "start" | "end";
  size?: ButtonApi["size"];
  variant?: ButtonApi["variant"];
  text: string;
}

/**
 * @interface FeaturedSectionIntroEyebrowApi
 */
export interface FeaturedSectionIntroEyebrowApi {
  icon?: EyebrowWithIconApi["iconName"];
  iconPos?: EyebrowWithIconApi["iconPos"];
  text: string;
}

/**
 * @interface FeaturedSectionIntroApi
 */
export interface FeaturedSectionIntroApi {
  // cta
  ctaIcon?: TablerIconName;
  ctaIconPos?: "start" | "end";
  ctaSize?: ButtonApi["size"];
  ctaVariant?: ButtonApi["variant"];
  ctaText: string;
  // description
  description?: string;
  // eyebrow
  eyebrowIcon?: EyebrowWithIconApi["iconName"];
  eyebrowIconPos?: EyebrowWithIconApi["iconPos"];
  eyebrowText?: string;
  // conditional
  hasCta?: boolean;
  hasCtaIcon?: boolean;
  hasDescription?: boolean;
  hasEyebrow?: boolean;
  hasEyebrowIcon?: boolean;
  // title
  title: string;
  titleSize?: HeadingSizes;
}

/**
 * FeaturedSectionIntroCta
 * @param props FeaturedSectionIntroCtaApi
 * @param hasIcon
 */
const FeaturedSectionIntroCta = (
  props: FeaturedSectionIntroCtaApi,
  hasIcon: FeaturedSectionIntroFeaturesApi["hasCtaIcon"]
) => {
  return hasIcon ? (
    <div className="mt-10">
      <IconButton
        iconName={props.icon}
        iconPos={props.iconPos}
        iconSize={32}
        size={props.size || "default"}
        variant={props.variant || "default"}
      >
        {props.text}
      </IconButton>
    </div>
  ) : (
    <div className="mt-10">
      <Button size={props.size || "default"} variant={props.variant || "default"}>
        {props.text}
      </Button>
    </div>
  );
};

/**
 * FeaturedSectionIntroEyebrow
 * @param props FeaturedSectionIntroEyebrowApi
 * @param hasIcon
 */
const FeaturedSectionIntroEyebrow = (
  props: FeaturedSectionIntroEyebrowApi,
  hasIcon: FeaturedSectionIntroFeaturesApi["hasEyebrowIcon"]
) => {
  return hasIcon ? (
    <EyebrowWithIcon
      iconName={props.icon || "IconDevicesPc"}
      iconColor="currentColor"
      iconPos={props.iconPos || "start"}
      iconSize={24}
      iconStroke={2}
    >
      <span className={props.iconPos === "start" ? "me-2" : "ms-2"}>{props.text}</span>
    </EyebrowWithIcon>
  ) : (
    <Eyebrow>{props.text}</Eyebrow>
  );
};

/**
 * FeaturedSectionIntro
 * @param props FeaturedSectionIntroApi
 */
export function FeaturedSectionIntro(props: FeaturedSectionIntroApi) {
  return (
    <div>
      {props.hasEyebrow && props.hasEyebrowIcon ? (
        <FeaturedSectionIntroEyebrow icon={props.eyebrowIcon} iconPos={props.eyebrowIconPos} text={props.eyebrowText} />
      ) : (
        props.hasEyebrow && <FeaturedSectionIntroEyebrow text={props.eyebrowText} />
      )}
      <Spacer size="xs" />
      <Heading level={3} size={props.titleSize || "lg"}>
        {props.title}
      </Heading>
      {props.hasDescription && (
        <>
          <Spacer size="sm" />
          <Text size="lg">{props.description}</Text>
        </>
      )}
      {props.hasCta && props.hasCtaIcon ? (
        <FeaturedSectionIntroCta
          text={props.ctaText}
          icon={props.ctaIcon || "IconBook"}
          iconPos={props.ctaIconPos || "end"}
          size={props.ctaSize || "default"}
          variant={props.ctaVariant || "default"}
        />
      ) : (
        props.hasCta && <FeaturedSectionIntroCta text={props.ctaText} />
      )}
    </div>
  );
}
