import { displayGeneratedPassword } from "./display-generated-password.js";
import { generatePassword } from "./generate-password.js";
import { updateCharacterLength } from "./update-character-length.js";

document.addEventListener("DOMContentLoaded", () => {
  const passwordGeneratorForm = document.forms.namedItem("password-generator");
  if (passwordGeneratorForm) {
    const rangeInput = passwordGeneratorForm.querySelector<HTMLInputElement>("input[type=range]");
    if (rangeInput) updateCharacterLength(rangeInput);
    passwordGeneratorForm.addEventListener("submit", event => {
      event.preventDefault();
      const password = generatePassword(passwordGeneratorForm);
      displayGeneratedPassword(passwordGeneratorForm, password);
    });
  }
});
