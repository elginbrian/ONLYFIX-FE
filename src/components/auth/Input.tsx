import React, { useState, ReactNode, ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  label: string;
  placeholder: string;
  Icon?: ReactNode; // Optional icon passed as a ReactNode
  isPassword?: boolean; // Optional flag for password input
  name: string; // Name attribute for input
  value: string; // Value of the input
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
}

const Input: React.FC<InputProps> = ({ label, placeholder, Icon, isPassword = false, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={name} className="mb-1 font-bold">
        {label}
      </label>
      <div className="relative border border-gray-300 rounded-full w-full py-2 flex items-center px-4">
        <div className="flex items-center gap-3">
          {Icon}
          <input
            type={isPassword && !showPassword ? "password" : "text"} // Toggle type for password field
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="py-2 pr-3 w-full focus:outline-none bg-transparent"
          />
        </div>

        {/* Add eye icon for toggling password visibility */}
        {isPassword && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
            {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
