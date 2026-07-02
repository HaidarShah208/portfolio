/** Selectors treated as interactive hover targets for cursor scaling. */
export const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not(:disabled)",
  "[role='button']:not([aria-disabled='true'])",
  "input:not([type='hidden']):not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  "label[for]",
  "[data-cursor='hover']",
  ".cursor-pointer",
].join(", ");

/**
 * Returns true when the element (or ancestor) is interactive.
 */
export function isInteractiveTarget(element) {
  if (!element || !(element instanceof Element)) return false;
  return Boolean(element.closest(INTERACTIVE_SELECTOR));
}

/**
 * Walks up the DOM to find the nearest interactive element.
 */
export function findInteractiveTarget(element) {
  if (!element || !(element instanceof Element)) return null;
  return element.closest(INTERACTIVE_SELECTOR);
}

export default isInteractiveTarget;
