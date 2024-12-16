"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import ItemCard from "./ItemCard";
import Link from "next/link";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mx-4 sm:mx-8 lg:mx-[171px] my-8 sm:my-[55px] lg:pt-[111px] bg-[url('/image.png')] bg-cover bg-center bg-no-repeat lg:h-[656.72px] py-4 px-2 sm:h-[657px] rounded-[20px] sm:rounded-[31px] text-center font-libre">
      <div className="pt-8 sm:pt-12 md:pt-[10px] px-4">
        <span className="block text-white text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[75.72px] font-semibold leading-[30px] sm:leading-[42px] md:leading-[56px] lg:leading-[72px] xl:leading-[82px]">
          Gampang cari <span className="text-[#132663]"> teknisi</span>,
        </span>
        <span className="block text-white text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[75.72px] font-semibold leading-[30px] sm:leading-[42px] md:leading-[56px] lg:leading-[72px] xl:leading-[82px]">
          gak perlu ribet!
        </span>
      </div>

      <div className="w-full sm:w-[626px] h-[66px] px-6 sm:px-9 py-6 bg-white rounded-[40px] flex justify-start items-center gap-2.5 mx-auto mt-6 sm:mt-[33px]">
        <input
          type="text"
          className="text-[#b8b8b8] text-sm sm:text-base md:text-lg font-semibold font-['Libre Franklin'] leading-[18px] focus:outline-none w-full"
          placeholder=" Mau benerin apaan bang?"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Link href={`/technician/find?query=${encodeURIComponent(searchQuery)}`}>
          <div className="bg-[#00ADF1] rounded-full p-2 translate-x-4">
            <Search color="white" />
          </div>
        </Link>
      </div>

      <div className="mt-10 items-center sm:mt-[90px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-4 sm:gap-6 px-4 sm:px-8 lg:px-[268px]">
        <Link href="technician/carpenter">
          <ItemCard icon="/desk_lamp.png" text="Perabotan" />
        </Link>

        <Link href="technician/electrician">
          <ItemCard icon="/listrik.png" text="Kelistrikan" />
        </Link>

        <Link href="technician/builder">
          <ItemCard icon="/electronic.png" text="Bangunan" />
        </Link>

        <Link href="technician/plumber">
          <ItemCard icon="/keran.png" text="Saluran air" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
