import { useSectionIntro } from "./useSectionIntro";

/**
 * Combines the state and actions of the hooks relating to the SectionIntro component.
 * @hook useSectionIntroApi
 */
function useSectionIntroApi() {
  const { state, actions } = useSectionIntro();
  const { state: eyeState, actions: eyeActions } = useSectionIntroHasEyebrow();

  return {
    state: { ...state, ...eyeState },
    actions: { ...actions, ...eyeActions },
  };
}

export { useSectionIntroApi };
