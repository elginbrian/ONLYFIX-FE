"use client";
import { ChevronDown, Menu } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // State for dropdown visibility

  return (
    <div className="border-b border-b-[#B6B6B6] p-0 bg-white">
      <nav className="flex justify-between items-center px-8 py-6">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex gap-3 items-center">
            <img src="/logo_2.png" alt="Logo Image" className="h-10 w-auto" />
            <div className="text-center flex items-center">
              <span
                className="font-gardenia"
                style={{
                  color: "#00aef0",
                  opacity: "0.95",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Only
              </span>
              <span
                className="font-gardenia"
                style={{
                  color: "#7fd7f8",
                  opacity: "0.95",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Fix
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-6 items-center">
          <div className="relative flex gap-x-1">
            <label htmlFor="" className="font-medium cursor-pointer text-black" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Kategori
            </label>
            <ChevronDown size={24} className="text-black" />
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-lg p-2 w-60 text-black">
                <ul>
                  <li>
                    <Link href="/technician" className="block py-2 px-4 hover:bg-gray-200">
                      Semua Kategori
                    </Link>
                  </li>
                  <li>
                    <Link href="/technician/carpenter" className="block py-2 px-4 hover:bg-gray-200">
                      Perabotan
                    </Link>
                  </li>
                  <li>
                    <Link href="/technician/electrician" className="block py-2 px-4 hover:bg-gray-200">
                      Kelistrikan
                    </Link>
                  </li>
                  <li>
                    <Link href="/technician/builder" className="block py-2 px-4 hover:bg-gray-200">
                      Bangunan
                    </Link>
                  </li>
                  <li>
                    <Link href="/technician/plumber" className="block py-2 px-4 hover:bg-gray-200">
                      Saluran Air
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="h-10 px-6 py-2 bg-white rounded-full border-2 border-[#83d4f4] flex items-center justify-center">
            <span className="text-black text-sm font-medium font-['Libre Franklin']">
              <Link href="/register">Daftar</Link>
            </span>
          </div>
          <div className="h-10 px-6 py-2 bg-[#00adf1] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold font-['Libre Franklin']">
              <Link href="/login">Masuk</Link>
            </span>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <Menu size={32} />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-8 bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:hidden">
            <div className="flex gap-x-1">
              <label htmlFor="" className="font-medium">
                Kategori
              </label>
              <ChevronDown size={24} />
            </div>
            <div className="h-10 px-6 py-2 bg-white rounded-full border-2 border-[#83d4f4] flex items-center justify-center">
              <span className="text-black text-sm font-medium font-['Libre Franklin']">
                <Link href="/register">Daftar</Link>
              </span>
            </div>
            <div className="h-10 px-6 py-2 bg-[#00adf1] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold font-['Libre Franklin']">
                <Link href="/login">Masuk</Link>
              </span>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
