/**
 * Displays the generated password in the form.
 * @param form - The form containing the password generation settings.
 * @param password - The generated password.
 */
export const displayGeneratedPassword = (form: HTMLFormElement, password: string): void => {
  const generatedPasswordElement = form.querySelector<HTMLInputElement>("input#generated-password");
  if (generatedPasswordElement) generatedPasswordElement.value = password;
};
