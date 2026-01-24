import type { PasswordSettings, PasswordStrength } from "./types.js";

import { lowercase, numbers, symbols, uppercase } from "./utils.js";

/**
 * Evaluates the strength of the password.
 * @param passwordSettings - The password settings to evaluate.
 * @return One of the following levels: "too-weak", "weak", "medium", "strong".
 */
export const evaluatePasswordStrength = (passwordSettings: PasswordSettings): PasswordStrength => {
  const { length, usesUppercase, usesLowercase, usesNumbers, usesSymbols } = passwordSettings;
  let alphabetSize = 0;
  if (usesUppercase) alphabetSize += uppercase.length;
  if (usesLowercase) alphabetSize += lowercase.length;
  if (usesNumbers) alphabetSize += numbers.length;
  if (usesSymbols) alphabetSize += symbols.length;
  const entropy = Math.log2(alphabetSize ** length);
  if (entropy < 28) return "too-weak";
  if (entropy < 50) return "weak";
  if (entropy < 70) return "medium";
  return "strong";
};
