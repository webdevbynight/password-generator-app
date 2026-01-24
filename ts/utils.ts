import type { PasswordStrength } from "./types.js";

export const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
export const uppercase = lowercase.map(letter => letter.toUpperCase());
export const numbers = "0123456789".split("");
export const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>/?".split("");
export const strengths: Record<PasswordStrength, string> = {
  "too-weak": "Too weak!",
  weak: "Weak",
  medium: "Medium",
  strong: "Strong"
};
