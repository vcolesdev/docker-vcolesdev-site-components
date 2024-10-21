interface FocusTrapApi {
  elem: HTMLElement | Element;
  event: KeyboardEvent;
}

/**
 * Handle tab key press to control focus within the specified element.
 * @param elem
 * @param event
 */
function focusTrap({ elem, event }: FocusTrapApi) {
  const isTabKey = event.key === "Tab";
  const isShiftKey = event.shiftKey;
  const els = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

  const focusedEls = elem.querySelectorAll(els);
  const activeEl = document.activeElement as HTMLElement;

  const first = focusedEls?.[0] as HTMLElement;
  const last = focusedEls?.[focusedEls.length - 1] as HTMLElement;

  if (!isTabKey) return;
  if (isShiftKey && activeEl === first) {
    event.preventDefault();
    last.focus();
  } else if (!isShiftKey && activeEl === last) {
    event.preventDefault();
    first.focus();
  }

  return;
}

export { focusTrap };
