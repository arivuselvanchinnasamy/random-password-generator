import { useState } from 'react';
import { FiClipboard } from 'react-icons/fi'; // Adjust the import based on the specific React Icons package you're using

const GeneratedPasswordField = ({ value }:any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700">Generated Password</label>
      <div className="relative rounded-md border border-gray-300 bg-gray-100 p-2 flex items-center">
        <input
          type="text"
          readOnly
          value={value}
          className="flex-grow w-full outline-none focus:outline-none bg-gray-100"
        />
        <button
          onClick={handleCopyToClipboard}
          className="ml-2 p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <FiClipboard className="text-blue-500" />
        </button>
        {isCopied && <span className="absolute top-0 right-0 bg-green-500 text-white p-1 rounded">Copied!</span>}
      </div>
    </div>
  );
};

export default GeneratedPasswordField;