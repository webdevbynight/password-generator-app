import type { PasswordStrength } from "./types.js";

import { strengths } from "./utils.js";

export const displayPasswordStrength = (form: HTMLFormElement, strength: PasswordStrength): void => {
  const strengthElement = form.querySelector(".strength dd");
  if (strengthElement) {
    strengthElement.className = `level-${strength}`;
    strengthElement.textContent = strengths[strength];
  }
};
