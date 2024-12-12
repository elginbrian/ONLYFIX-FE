"use client";
import { ChevronDown, Menu } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-b-[#B6B6B6] p-0">
      <nav className="flex justify-between items-center mx-8 my-6">
        {/* Logo Section */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-6 items-center">
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
