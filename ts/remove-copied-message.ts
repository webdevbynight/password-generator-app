/**
 * Removes the “Copied” message from the form.
 * @param form - The form element containing the copied message elements.
 */
export const removeCopiedMessage = (form: HTMLFormElement): void => {
  const copiedElements = form.querySelectorAll(".copied");
  for (const copiedElement of copiedElements) {
    copiedElement.remove();
  }
};
