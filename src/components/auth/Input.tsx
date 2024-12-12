import React, { useState, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  label: string;
  placeholder: string;
  Icon?: ReactNode; // Optional icon passed as a ReactNode
  isPassword?: boolean; // Optional flag for password input
}

const Input: React.FC<InputProps> = ({ label, placeholder, Icon, isPassword = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="mb-1 font-bold">
        {label}
      </label>
      <div className="relative border border-gray-300 rounded-full w-full py-2 flex items-center px-4">
        <div className="flex items-center gap-3">
          {Icon}
          <input
            type={isPassword && !showPassword ? "password" : "text"} // Determine input type based on password visibility
            placeholder={placeholder}
            className="py-2 pr-3 w-full focus:outline-none bg-transparent"
          />
        </div>

        {/* Add eye icon for toggling password visibility when isPassword is true */}
        {isPassword && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
