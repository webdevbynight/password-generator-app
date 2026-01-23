/**
 * Displays a “Copied” message next to the button.
 * @param button - The button element where to display the message.
 */
export const displayCopiedMessage = (button: HTMLButtonElement): void => {
  const svg = button.querySelector("svg");
  const copiedMessageElement = document.createElement("span");
  copiedMessageElement.classList.add("copied");
  copiedMessageElement.textContent = "Copied";
  button.insertBefore(copiedMessageElement, svg);
};
