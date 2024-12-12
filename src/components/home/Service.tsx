import React from "react";
import ServiceCard from "./ServiceCard";

const Service: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:mx-[110px] my-8">
      <h1 className="text-[#00adf1] text-xl sm:text-2xl lg:text-[40px] font-medium text-center lg:text-left mb-10 lg:mb-20">
        Semua Beres dengan <span className="text-black">satu klik</span> aja.{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ServiceCard icon={"/icon_teknisi.png"} text={"Akses langsung ke berbagai teknisi profesional"} />
        <ServiceCard icon={"/Icon Pelayanan.png"} text={"Pelayanan yang transparan & fleksibel"} />
        <ServiceCard icon={"/Icon Keamanan.png"} text={"Terjaminnya keamanan & kualitas"} />
      </div>

      <div className="mt-10 mx-auto flex flex-col items-center">
        <button className="bg-[#00ADF1] px-6 py-3 text-base sm:text-lg rounded-[47.27px] text-white hover:bg-[#007bb3] transition font-semibold">Bergabung</button>
        <p className="text-slate-500 text-sm sm:text-base mt-2">Tunggu apa lagi ?</p>
      </div>
    </div>
  );
};

export default Service;
