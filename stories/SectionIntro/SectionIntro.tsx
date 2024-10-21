import { Eyebrow, EyebrowIconEnd, EyebrowIconStart } from "@/stories/Eyebrow/Eyebrow";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect } from "react";

import type { SectionIntroApi } from "./SectionIntro.api";
import { SectionIntroProvider } from "./SectionIntroProvider";
import { SectionIntroContent, SectionIntroCta, SectionIntroHeader } from "./parts";
import { useSectionIntro, useSectionIntroEyebrow } from "./useSectionIntro";

/**
 * Section Intro
 * @param children
 * @component SectionIntro
 */
const SectionIntro = forwardRef(function SectionIntro(
  { ...props }: SectionIntroApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { children } = props;
  return <SectionIntroProvider ref={ref}>{children}</SectionIntroProvider>;
});

/**
 * Section Intro with Header
 * @param children
 * @param rest - SectionIntroApi
 * @component SectionIntroWithHeader
 */
function SectionIntroWithHeader({ children, ...rest }: SectionIntroApi) {
  const { textSize, titleContent, titleSize } = rest;

  const { state, actions } = useSectionIntro();
  const { sIntroTitleContent, sIntroTextSize, sIntroTitleSize } = state;

  useEffect(() => {
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);
  }, [sIntroTextSize, sIntroTitleContent, sIntroTitleSize]);

  return (
    <SectionIntro {...rest}>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
    </SectionIntro>
  );
}

/**
 * Section Intro with CTA
 * @param children
 * @param rest - SectionIntroApi
 * @component SectionIntroWithCta
 */
function SectionIntroWithCta({ children, ...rest }: SectionIntroApi) {
  const { ctaText, ctaVariant, textSize } = rest;

  const { state, actions } = useSectionIntro();
  const { sIntroCtaText, sIntroCtaVariant, sIntroTextSize } = state;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTextSize(textSize);
  }, [sIntroCtaText, sIntroCtaVariant, sIntroTextSize]);

  return (
    <SectionIntro {...rest}>
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

/**
 * Section Intro Full
 * @param children
 * @param rest - SectionIntroApi
 * @component SectionIntroFull
 */
function SectionIntroFull({ children, ...rest }: SectionIntroApi) {
  const { ctaText, ctaVariant, titleContent, titleSize, textSize } = rest;

  const { state, actions } = useSectionIntro();
  const { sIntroCtaText, sIntroCtaVariant, sIntroTitleContent, sIntroTitleSize, sIntroTextSize } = state;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);
  }, [sIntroCtaText, sIntroCtaVariant, sIntroTitleContent, sIntroTitleSize, sIntroTextSize]);

  return (
    <SectionIntro {...rest}>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

function SectionIntroWithHeaderEye({ children, ...rest }: SectionIntroApi) {
  const { eyebrowText, textSize, titleContent, titleSize } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroTitleContent, sIntroTextSize, sIntroTitleSize } = state;
  const { sIntroEyebrowText } = eyeState;

  useEffect(() => {
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [sIntroTextSize, sIntroTitleContent, sIntroTitleSize, sIntroEyebrowText]);

  return (
    <SectionIntro {...rest}>
      <div>
        <Eyebrow content={sIntroEyebrowText} />
      </div>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
    </SectionIntro>
  );
}

function SectionIntroWithCtaEye({ children, ...rest }: SectionIntroApi) {
  const { ctaText, ctaVariant, eyebrowText, eyebrowIconName, eyebrowIconSize, textSize } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroCtaText, sIntroCtaVariant, sIntroTextSize } = state;
  const { sIntroEyebrowText } = eyeState;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [sIntroCtaText, sIntroCtaVariant, sIntroTextSize, sIntroEyebrowText]);

  return (
    <SectionIntro {...rest}>
      <div>
        <Eyebrow content={sIntroEyebrowText} />
      </div>
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

function SectionIntroFullEye({ children, ...rest }: SectionIntroApi) {
  const { ctaText, ctaVariant, eyebrowText, titleContent, titleSize, textSize } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroCtaText, sIntroCtaVariant, sIntroTitleContent, sIntroTitleSize, sIntroTextSize } = state;
  const { sIntroEyebrowText } = eyeState;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [sIntroCtaText, sIntroCtaVariant, sIntroTitleContent, sIntroTitleSize, sIntroTextSize, sIntroEyebrowText]);

  return (
    <SectionIntro {...rest}>
      <div>
        <Eyebrow content={sIntroEyebrowText} />
      </div>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

function SectionIntroWithHeaderEyeIcon({ children, ...rest }: SectionIntroApi) {
  const { eyebrowText, eyebrowIconName, eyebrowIconPos, eyebrowIconSize, textSize, titleContent, titleSize } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroTitleContent, sIntroTextSize, sIntroTitleSize } = state;
  const { sIntroEyebrowIconName, sIntroEyebrowIconPos, sIntroEyebrowIconSize, sIntroEyebrowText } = eyeState;

  useEffect(() => {
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowIconName(eyebrowIconName);
    eyeActions.setSIntroEyebrowIconPos(eyebrowIconPos);
    eyeActions.setSIntroEyebrowIconSize(eyebrowIconSize);
    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [
    sIntroTextSize,
    sIntroTitleContent,
    sIntroEyebrowIconName,
    sIntroEyebrowIconPos,
    sIntroEyebrowIconSize,
    sIntroEyebrowText,
    sIntroTitleSize,
  ]);

  return (
    <SectionIntro {...rest}>
      <div>
        {sIntroEyebrowIconPos === "start" && (
          <EyebrowIconStart
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
        {sIntroEyebrowIconPos === "end" && (
          <EyebrowIconEnd
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
      </div>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
    </SectionIntro>
  );
}

function SectionIntroWithCtaEyeIcon({ children, ...rest }: SectionIntroApi) {
  const { ctaText, ctaVariant, eyebrowText, eyebrowIconName, eyebrowIconPos, eyebrowIconSize, textSize } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroCtaText, sIntroCtaVariant, sIntroTextSize } = state;
  const { sIntroEyebrowIconName, sIntroEyebrowIconPos, sIntroEyebrowIconSize, sIntroEyebrowText } = eyeState;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowIconName(eyebrowIconName);
    eyeActions.setSIntroEyebrowIconPos(eyebrowIconPos);
    eyeActions.setSIntroEyebrowIconSize(eyebrowIconSize);
    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [
    sIntroCtaText,
    sIntroCtaVariant,
    sIntroTextSize,
    sIntroEyebrowIconName,
    sIntroEyebrowIconSize,
    sIntroEyebrowText,
  ]);

  return (
    <SectionIntro {...rest}>
      <div>
        {sIntroEyebrowIconPos === "start" && (
          <EyebrowIconStart
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
        {sIntroEyebrowIconPos === "end" && (
          <EyebrowIconEnd
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
      </div>
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

function SectionIntroFullEyeIcon({ children, ...rest }: SectionIntroApi) {
  const {
    ctaText,
    ctaVariant,
    eyebrowText,
    eyebrowIconName,
    eyebrowIconPos,
    eyebrowIconSize,
    titleContent,
    titleSize,
    textSize,
  } = rest;

  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroEyebrow();

  const { sIntroCtaText, sIntroCtaVariant, sIntroTitleContent, sIntroTitleSize, sIntroTextSize } = state;
  const { sIntroEyebrowText, sIntroEyebrowIconName, sIntroEyebrowIconPos, sIntroEyebrowIconSize } = eyeState;

  useEffect(() => {
    actions.setSIntroCtaText(ctaText);
    actions.setSIntroCtaVariant(ctaVariant);
    actions.setSIntroTitleContent(titleContent);
    actions.setSIntroTitleSize(titleSize);
    actions.setSIntroTextSize(textSize);

    eyeActions.setSIntroEyebrowIconName(eyebrowIconName);
    eyeActions.setSIntroEyebrowIconPos(eyebrowIconPos);
    eyeActions.setSIntroEyebrowIconSize(eyebrowIconSize);
    eyeActions.setSIntroEyebrowText(eyebrowText);
  }, [
    sIntroCtaText,
    sIntroCtaVariant,
    sIntroEyebrowIconName,
    sIntroEyebrowIconPos,
    sIntroEyebrowIconSize,
    sIntroEyebrowText,
    sIntroTitleContent,
    sIntroTitleSize,
    sIntroTextSize,
  ]);

  return (
    <SectionIntro {...rest}>
      <div>
        {sIntroEyebrowIconPos === "start" && (
          <EyebrowIconStart
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
        {sIntroEyebrowIconPos === "end" && (
          <EyebrowIconEnd
            content={sIntroEyebrowText}
            eyeIconName={sIntroEyebrowIconName}
            eyeIconSize={sIntroEyebrowIconSize}
          />
        )}
      </div>
      <SectionIntroHeader titleContent={sIntroTitleContent} titleSize={sIntroTitleSize} />
      <SectionIntroContent textSize={sIntroTextSize}>{children}</SectionIntroContent>
      <SectionIntroCta ctaText={sIntroCtaText} ctaVariant={sIntroCtaVariant} />
    </SectionIntro>
  );
}

export {
  SectionIntro,
  SectionIntroWithHeader,
  SectionIntroWithCta,
  SectionIntroFull,
  SectionIntroWithHeaderEye,
  SectionIntroWithCtaEye,
  SectionIntroFullEye,
  SectionIntroWithHeaderEyeIcon,
  SectionIntroWithCtaEyeIcon,
  SectionIntroFullEyeIcon,
};
