/**
 * Updates the character length displayed in the UI.
 * @param input - The `input` element updating the character length.
 */
export const updateCharacterLength = (input: HTMLInputElement): void => {
  input.addEventListener("input", () => {
    const { value } = input;
    const characterLengthElement = input.parentElement?.querySelector(".character-length-number");
    if (characterLengthElement) characterLengthElement.textContent = value;

    // Update the `--value` custom property (for Safari and Blink-based browsers to display the gradient as a progress track correctly)
    input.style.setProperty("--value", value);
  });
};
