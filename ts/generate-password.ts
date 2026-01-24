import type { PasswordSettings } from "./types.js";

import { lowercase, numbers, symbols, uppercase } from "./utils.js";

/**
 * Generates a random password based on the form data.
 * @param form - The form containing the password generation settings.
 * @return The generated password.
 */
export const generatePassword = (form: HTMLFormElement): PasswordSettings => {
  const data = new FormData(form);
  let characterLength = 0;
  const characterTypes = new Set<string>();
  for (const [key, value] of data.entries()) {
    if (key === "character-length") characterLength = Number(value);
    else if (key === "characters") characterTypes.add(String(value));
  }
  const passwordSettings: PasswordSettings = {
    password: "",
    length: characterLength,
    usesUppercase: false,
    usesLowercase: false,
    usesNumbers: false,
    usesSymbols: false
  };
  if (characterLength) {
    const characterSet: string[] = [];
    for (const characterType of characterTypes) {
      if (characterType === "lowercase") {
        characterSet.push(...lowercase);
        passwordSettings.usesLowercase = true;
      } else if (characterType === "uppercase") {
        characterSet.push(...uppercase);
        passwordSettings.usesUppercase = true;
      } else if (characterType === "numbers") {
        characterSet.push(...numbers);
        passwordSettings.usesNumbers = true;
      } else if (characterType === "symbols") {
        characterSet.push(...symbols);
        passwordSettings.usesSymbols = true;
      }
    }
    if (characterSet.length) {
      let password = "";
      for (let i = 1; i <= characterLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
      }
      passwordSettings.password = password;
    }
  }
  return passwordSettings;
};
