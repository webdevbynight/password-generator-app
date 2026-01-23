import { updateCharacterLength } from "./update-character-length.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("password-generator");
  if (form) {
    const rangeInput = form.querySelector<HTMLInputElement>("input[type=range]");
    if (rangeInput) {
      updateCharacterLength(rangeInput);
    }
  }
});
