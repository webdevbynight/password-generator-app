import { copyPasswordToClipboard } from "./copy-password-to-clipboard.js";
import { displayGeneratedPassword } from "./display-generated-password.js";
import { displayPasswordStrength } from "./display-password-strength.js";
import { evaluatePasswordStrength } from "./evaluate-password-strength.js";
import { generatePassword } from "./generate-password.js";
import { removeCopiedMessage } from "./remove-copied-message.js";
import { updateCharacterLength } from "./update-character-length.js";

document.addEventListener("DOMContentLoaded", () => {
  const passwordGeneratorForm = document.forms.namedItem("password-generator");
  if (passwordGeneratorForm) {
    const rangeInput = passwordGeneratorForm.querySelector<HTMLInputElement>("input[type=range]");
    const generatedPasswordInput = passwordGeneratorForm.querySelector<HTMLInputElement>("#generated-password");
    const copyButton = passwordGeneratorForm.querySelector<HTMLButtonElement>("#generated-password ~ button");
    if (rangeInput) updateCharacterLength(rangeInput);
    passwordGeneratorForm.addEventListener("submit", event => {
      event.preventDefault();
      removeCopiedMessage(passwordGeneratorForm);
      const passwordSettings = generatePassword(passwordGeneratorForm);
      const { password } = passwordSettings;
      displayGeneratedPassword(passwordGeneratorForm, password);
      const passwordStrength = evaluatePasswordStrength(passwordSettings);
      displayPasswordStrength(passwordGeneratorForm, passwordStrength);
    });
    if (generatedPasswordInput && copyButton) {
      copyButton.addEventListener("click", async () => await copyPasswordToClipboard(generatedPasswordInput, copyButton));
    }
  }
});
