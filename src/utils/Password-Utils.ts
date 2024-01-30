import { PasswordOptions } from "@/app/types";

export const DEFAULT_PW_LENGTH = 12;
export const PW_MIN_LENGTH = 6;
export const PW_MAX_LENGTH = 32;

 // Define character sets based on options
export const DIGITS = '0123456789';
export const LOWERCASE_LETTERS = 'wqertyuiopasdfghjklzxcvbnm';
export const ALLOWED_SPECIAL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
export const UPPERCASE_LETTERS = 'WQERTYUIOPASDFGHJKLZXCVBNM';

export const getRandomCharacter = (characters: string) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
};

export const shufflePassword = (password: string) => {
    const passwordArray = password.split('');
    let randomIndex: number,
      currentIndex = password.length;
  
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [passwordArray[currentIndex], passwordArray[randomIndex]] = [
        passwordArray[randomIndex],
        passwordArray[currentIndex],
      ];
    }
  
    return passwordArray.join('');
};

export const generateRandomPassword = (options: PasswordOptions): string => {
    const {
      length,
      includeLowerCase,
      includeUpperCase,
      includeDigits,
      includeSpecialChars
    } = options;

    let allChars = '';
    let pwd = '';
    // Include selected character sets
    if (includeLowerCase) {
        allChars += LOWERCASE_LETTERS;
        pwd = getRandomCharacter(LOWERCASE_LETTERS);
    }

    if (includeUpperCase) {
        allChars += UPPERCASE_LETTERS;
        pwd = getRandomCharacter(UPPERCASE_LETTERS);
    }

    if (includeDigits) {
        allChars += DIGITS;
        pwd = getRandomCharacter(DIGITS);
    }
    
    if (includeSpecialChars) {
        allChars += ALLOWED_SPECIAL_CHARS;
        pwd = getRandomCharacter(ALLOWED_SPECIAL_CHARS);
    }
  
    // Check if there are any character sets selected
    if (allChars.length === 0) {
      throw new Error('Please select at least one character set.');
    }
    
    while (pwd.length < Number(length)) {
        pwd += getRandomCharacter(allChars);
    }
    return shufflePassword(pwd);
  };