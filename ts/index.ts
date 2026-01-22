document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("password-generator");
  if (form) {
    const rangeInput = form.querySelector<HTMLInputElement>("input[type=range]");
    if (rangeInput) {
      rangeInput.addEventListener("input", () => {
        // Update the `--value` custom property (for Safari and Blink-based browsers to display the gradient as a progress track correctly)
        rangeInput.style.setProperty("--value", rangeInput.value);
      });
    }
  }
});
