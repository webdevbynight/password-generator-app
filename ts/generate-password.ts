/**
 * Generates a random password based on the form data.
 * @param form - The form containing the password generation settings.
 * @return The generated password.
 */
export const generatePassword = (form: HTMLFormElement): string => {
  const data = new FormData(form);
  let characterLength = 0;
  const characterTypes = new Set<string>();
  for (const [key, value] of data.entries()) {
    if (key === "character-length") characterLength = Number(value);
    else if (key === "characters") characterTypes.add(String(value));
  }
  if (characterLength) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase = lowercase.map(letter => letter.toUpperCase());
    const numbers = "0123456789".split("");
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>/?".split("");
    const characterSet: string[] = [];
    for (const characterType of characterTypes) {
      if (characterType === "lowercase") characterSet.push(...lowercase);
      else if (characterType === "uppercase") characterSet.push(...uppercase);
      else if (characterType === "numbers") characterSet.push(...numbers);
      else if (characterType === "symbols") characterSet.push(...symbols);
    }
    if (characterSet.length) {
      let password = "";
      for (let i = 1; i <= characterLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
      }
      return password;
    }
    return "";
  }
  return "";
};
