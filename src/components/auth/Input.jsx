import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Anda bisa menyesuaikan dengan icon mata yang Anda inginkan

const Input = ({ label, placeholder, Icon, isPassword = false }) => {
  const [showPassword, setShowPassword] = useState(false); // State untuk mengubah visibilitas password

  // Fungsi untuk toggle visibilitas password
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
          {/* Menambahkan border di div pembungkus */}
          <input
            type={isPassword && !showPassword ? "password" : "text"} // Menentukan tipe input jika password
            placeholder={placeholder}
            className="py-2 pr-3 w-full focus:outline-none bg-transparent"
          />
        </div>

        {/* Menempatkan ikon di dalam input dengan posisi absolute */}

        {/* Jika isPassword true, menambahkan ikon mata di kanan untuk toggle password visibility */}
        {isPassword && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
