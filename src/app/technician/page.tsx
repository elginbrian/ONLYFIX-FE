"use client";
import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import { getAllTechnicians } from "@/services/technician-service";
import { Technician } from "@/types/technician-type";
import { TechnicianCard } from "@/components/technician/TechnicianCard";
import Link from "next/link";
import { Search } from "lucide-react";

const HalamanTeknisi: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const data = await getAllTechnicians();
        console.log("Data teknisi yang diambil:", data);
        setTechnicians(data);
      } catch (error) {
        console.error("Gagal mengambil data teknisi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnicians();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
      <Navbar />

      <div className="mx-4 sm:mx-8 lg:mx-[171px] my-8 sm:my-[55px] bg-[url('/image.png')] bg-cover bg-center bg-no-repeat lg:h-[250px] sm:h-[250px] py-4 px-2 rounded-[20px] sm:rounded-[31px] text-center font-libre flex items-center justify-center">
        <div className="pt-8 sm:pt-12 md:pt-[10px] px-4">
          <span className="block text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-semibold leading-[26px] sm:leading-[32px] md:leading-[36px] lg:leading-[44px] xl:leading-[52px]">
            Temukan <span className="text-[#132663]"> teknisi</span> yang tepat untuk Anda!
          </span>
        </div>
      </div>

      <div className="w-full sm:w-[626px] h-[66px] px-6 sm:px-9 py-6 bg-white rounded-[40px] flex justify-start items-center gap-2.5 mx-auto mt-4 sm:mt-[20px] border border-gray-300">
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

      <div className="container mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-700">Memuat teknisi...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {technicians && technicians.length > 0 ? technicians.map((technician) => <TechnicianCard key={technician.technician_id} technician={technician} />) : <p className="text-center text-gray-700">Tidak ada teknisi yang tersedia.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default HalamanTeknisi;
