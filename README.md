# Password Generator

Generate strong and secure passwords with this free online password generator. Customize the length and character sets to enhance your online security.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built Using](#built-using)
- [Usage](#usage)
  - [Installation](#installation)
  - [Usage Example](#usage-example)
- [Configuration](#configuration)
  - [Password Options](#password-options)
- [Deployment](#deployment)
 

## Introduction

This password generator is a tool designed for developers and individuals who want to create strong and unique passwords. It allows customization of password length and character sets, providing flexibility to meet specific security requirements.

## Features

- Generate random passwords with various character sets.
- Customize password length.
- Minimalist user interface for ease of use.

## Built Using
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com)

## Usage

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/arivuselvanchinnasamy/random-password-generator.git
```
### Usage Example
1. Navigate to the project directory:
```bash
cd your-password-generator
```
2. Install the dependencies:
```bash
npm install
```
3. Run the application:
```bash
npm run dev
```
4. The app should now be up and running at http://localhost:3000 🚀

5. Choose the password length, and any one or all of these options Include Lowercase letters, Include Uppercase letters, Include Digits, Include Special Characters on the page in order to Generate Password.

## Configuration
### Password Options
Adjust the password generation options by modifying the passwordOptions object in the code. The following options are available:

- length: The length of the generated password.
- includeLowerCase: Include lowercase letters in the password.
- includeUpperCase: Include uppercase letters in the password.
- includeDigits: Include digits in the password.
- includeSpecialChars: Include special characters in the password.

#### Example:
``` javascript
const passwordOptions = {
  length: 12,
  includeLowerCase: true,
  includeUpperCase: true,
  includeDigits: true,
  includeSpecialChars: true,
};
```
## Deployment
Deployed using Vercel. https://random-password-generator-flax.vercel.app/ 🚀
