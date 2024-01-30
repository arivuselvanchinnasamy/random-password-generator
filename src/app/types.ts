export interface PasswordOptions {
    length: number;
    includeLowerCase: boolean;
    includeUpperCase: boolean;
    includeDigits: boolean;
    includeSpecialChars: boolean;
    [key: string]: number | boolean; // Index signature
  }