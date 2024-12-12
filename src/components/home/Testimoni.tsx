import { Search } from "lucide-react";
import React from "react";
import TestimoniSection from "./TestimoniSection";

const Testimoni: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-[80px] px-4 sm:px-8 lg:mx-[110px]">
      <h1 className="text-[#00adf1] text-xl sm:text-2xl lg:text-[40px] font-medium text-center lg:text-left">Ini Kata Mereka,</h1>
      <p className="text-base sm:text-lg lg:text-[23px] text-center lg:text-left mt-2 lg:mt-4">Yakin masih ragu mau nukang bareng OnlyFix?</p>

      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center sm:justify-end gap-4 sm:gap-6 items-center">
        <button className="w-full sm:w-auto h-12 sm:h-[66px] px-6 sm:px-9 py-3 sm:py-6 bg-[#00adf1] rounded-lg sm:rounded-[40px] inline-flex items-center justify-center gap-2">
          <div className="text-white text-sm sm:text-lg font-bold font-['Libre Franklin']">Cari Tukang</div>
          <Search color="white" size={20} />
        </button>
        <button className="w-full sm:w-auto h-12 sm:h-[66px] px-6 sm:px-9 py-3 sm:py-6 bg-white rounded-lg sm:rounded-[36.55px] border-2 border-[#83d4f4] inline-flex items-center justify-center">
          <div className="text-black text-sm sm:text-lg font-normal font-['Libre Franklin']">Daftar</div>
        </button>
      </div>

      <div className="mt-6 sm:mt-10">
        <TestimoniSection />
      </div>
    </div>
  );
};

export default Testimoni;
