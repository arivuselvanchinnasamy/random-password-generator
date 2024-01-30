"use client"
import { useState } from "react";
import Checkbox from "./Checkbox";
import GeneratedPasswordField from "./GeneratedPasswordField";
import Header from "./Header";
import Slider from "./Slider";
import { PasswordOptions } from "@/app/types";
import { DEFAULT_PW_LENGTH, generateRandomPassword } from "@/utils/Password-Utils";
import { checkboxInputs } from "@/app/InputFields";

const PasswordGeneratorForm = () => {
    const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
        includeLowerCase: false,
        includeUpperCase: false,
        includeDigits: false,
        includeSpecialChars: false,
        length: DEFAULT_PW_LENGTH,
      });
    
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    
    const handlePasswordOptionsChange = (
        newOptions: Partial<PasswordOptions>
      ) => {
        try {
          const updatedOptions = {
            ...passwordOptions,
            ...newOptions,
          } as PasswordOptions;
          setPasswordOptions(updatedOptions);
          setError(null); // Clear any previous errors
        } catch (error) {
          if (error instanceof Error && "message" in error) {
            setError(error.message as string);
          } else {
            setError("An unknown error occurred.");
          }
        }
    };
    
    const handleGeneratePassword = () => {
        if (
          !passwordOptions.includeLowerCase &&
          !passwordOptions.includeUpperCase &&
          !passwordOptions.includeDigits &&
          !passwordOptions.includeSpecialChars
        ) {
          setError("Please select at least one character set.");
          return;
        }
        const newPassword = generateRandomPassword(passwordOptions);
        setGeneratedPassword(newPassword);
        setError(null); // Clear any previous errors
    };
    return (
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-200 shadow-md py-10 px-16">
            <Header title="Password Generator" />
            <hr className="mb-6" />
            {generatedPassword && <GeneratedPasswordField value={generatedPassword} />}

            <div className="mb-6">
                <Slider
                    value={passwordOptions.length}
                    onChange={(value) => handlePasswordOptionsChange({ length: value })}
                />
            </div>
            {checkboxInputs.map((input) => (
                <Checkbox
                    key={input.key}
                    label={input.label}
                    type={input.type}
                    checked={passwordOptions[input.key]}
                    onChange={() =>
                    handlePasswordOptionsChange({
                        [input.key]: !passwordOptions[input.key],
                    })
                    }
                />
            ))}
            <div className="mb-6 items-center text-center">
                <button
                    onClick={handleGeneratePassword}
                    className="bg-blue-500 text-white px-2 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Generate Password
                </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
      );
}
 
export default PasswordGeneratorForm;