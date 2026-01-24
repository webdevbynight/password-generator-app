export type PasswordSettings = {
  password: string;
  length: number;
  usesUppercase: boolean;
  usesLowercase: boolean;
  usesNumbers: boolean;
  usesSymbols: boolean;
};
export type PasswordStrength = "too-weak" | "weak" | "medium" | "strong";
