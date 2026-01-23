import { displayCopiedMessage } from "./display-copied-message.js";

export const copyPasswordToClipboard = async (field: HTMLInputElement, button: HTMLButtonElement): Promise<void> => {
  try {
    await navigator.clipboard.writeText(field.value);
    displayCopiedMessage(button);
  } catch (error) {
    console.error("Failed to copy password to clipboard", error);
  }
};
