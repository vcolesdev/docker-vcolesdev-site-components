import { TablerIcon, TablerIconName } from "@/stories/TablerIcon/TablerIcon";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

export interface EyebrowApi {
  eyeIconName?: TablerIconName;
  eyeIconSize?: number;
  ref?: ForwardedRef<HTMLDivElement>;
  content?: React.ReactNode | React.ReactNode[] | string;
}

export interface EyebrowApiProvider {
  children: React.ReactNode | React.ReactNode[] | string;
  ref?: ForwardedRef<HTMLDivElement>;
}

function useEyebrow() {
  const [eyebrowContent, setEyebrowContent] = useState<React.ReactNode | React.ReactNode[] | string | null>(null);
  const [eyebrowIconName, setEyebrowIconName] = useState<TablerIconName | null>(null);
  const [eyebrowIconSize, setEyebrowIconSize] = useState<number | null>(null);

  return {
    state: {
      eyebrowContent,
      eyebrowIconName,
      eyebrowIconSize,
    },
    actions: {
      setEyebrowContent,
      setEyebrowIconName,
      setEyebrowIconSize,
    },
  };
}

const EyebrowProvider = ({ children, ...rest }: EyebrowApiProvider) => {
  const { ref } = rest;

  return (
    <div
      className="flex font-body text-sm uppercase leading-wide font-bold text-tree-bark dark:text-baby-blue"
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
};

const Eyebrow = forwardRef(function Eyebrow({ content, ...rest }: EyebrowApi, ref: ForwardedRef<HTMLDivElement>) {
  const { state, actions } = useEyebrow();
  const { eyebrowContent } = state;

  useEffect(() => {
    actions.setEyebrowContent(content);
  }, [eyebrowContent]);

  return (
    <EyebrowProvider ref={ref} {...rest}>
      <span className="inline-block">{content}</span>
    </EyebrowProvider>
  );
});

function EyebrowIconStart({ content, ...rest }: EyebrowApi) {
  const { eyeIconName, eyeIconSize } = rest;

  const { state, actions } = useEyebrow();
  const { eyebrowIconName, eyebrowIconSize, eyebrowContent } = state;

  useEffect(() => {
    actions.setEyebrowIconName(eyeIconName);
    actions.setEyebrowIconSize(eyeIconSize);
    actions.setEyebrowContent(content);
  }, [eyebrowIconSize, eyebrowContent, eyebrowIconName]);

  return (
    <EyebrowProvider>
      <div className="inline-block me-2">
        <TablerIcon color="currentColor" currentIcon={eyebrowIconName} size={eyebrowIconSize} stroke={1.5} />
      </div>
      <span className="inline-block">{eyebrowContent}</span>
    </EyebrowProvider>
  );
}

function EyebrowIconEnd({ content, ...rest }: EyebrowApi) {
  const { eyeIconName, eyeIconSize } = rest;

  const { state, actions } = useEyebrow();
  const { eyebrowIconName, eyebrowIconSize, eyebrowContent } = state;

  useEffect(() => {
    actions.setEyebrowIconName(eyeIconName);
    actions.setEyebrowIconSize(eyeIconSize);
    actions.setEyebrowContent(content);
  }, [eyebrowIconName, eyebrowIconSize, eyebrowContent]);

  return (
    <EyebrowProvider>
      <span className="inline-block">{eyebrowContent}</span>
      <div className="inline-block ms-2">
        <TablerIcon color="currentColor" currentIcon={eyebrowIconName} size={eyebrowIconSize} stroke={1.5} />
      </div>
    </EyebrowProvider>
  );
}

function EyebrowIconOnly({ content, ...rest }: EyebrowApi) {
  const { eyeIconName, eyeIconSize } = rest;

  const { state, actions } = useEyebrow();
  const { eyebrowIconName, eyebrowIconSize, eyebrowContent } = state;

  useEffect(() => {
    actions.setEyebrowIconName(eyeIconName);
    actions.setEyebrowIconSize(eyeIconSize);
    actions.setEyebrowContent(content);
  }, [eyebrowIconName, eyebrowIconSize, eyebrowContent]);

  return (
    <EyebrowProvider>
      <div className="inline-block">
        <TablerIcon color="currentColor" currentIcon={eyebrowIconName} size={eyebrowIconSize} stroke={1.5} />
      </div>
    </EyebrowProvider>
  );
}

export { Eyebrow, EyebrowIconStart, EyebrowIconEnd, EyebrowIconOnly };
