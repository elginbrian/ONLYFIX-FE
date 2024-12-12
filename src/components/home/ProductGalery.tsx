import { Ellipsis } from "lucide-react";
import React from "react";

const ProductGalery: React.FC = () => {
  return (
    <div className="mb-4 mx-10">
      <div className="flex gap-x-[28px] flex-wrap">
        <div className="flex flex-col gap-y-[28px]">
          <div className="relative w-[284px] h-[284px] bg-[#f7f7f7] rounded-[25px] overflow-hidden group flex items-center justify-center">
            {/* Gambar */}
            <img src="/galery.png" alt="Galery" className="z-10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

            {/* Teks dan Ikon dengan Animasi */}
            <div className="absolute bottom-[-50px] w-full flex justify-between items-center px-8 z-20 group-hover:bottom-4 transition-all duration-500 ease-in-out">
              <p className="font-libre text-white font-medium text-base">Perabotan Rumah Tangga</p>
              <Ellipsis color="white" />
            </div>
          </div>

          <div className="relative w-[284px] h-[284px] bg-[#f7f7f7] rounded-[25px] overflow-hidden group flex items-center justify-center">
            {/* Gambar */}
            <img src="/galery.png" alt="Galery" className="z-10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

            {/* Teks dan Ellipsis muncul dari bawah */}
            <div className="absolute bottom-[-50px] w-full flex justify-between items-center px-8 z-20 group-hover:bottom-4 transition-all duration-500 ease-in-out">
              <p className="font-libre text-white font-medium text-base mx-[20px]">Perabotan Rumah Tangga</p>
              <Ellipsis color="white" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-[501.96px] h-[502px] bg-[#f7f7f7] rounded-[21.06px] overflow-hidden group flex items-center justify-center">
            {/* Gambar */}
            <img src="/galery.png" alt="Galery" className="z-10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

            {/* Teks dan Ellipsis muncul dari bawah */}
            <div className="absolute bottom-[-50px] w-full flex justify-between items-center px-6 z-20 group-hover:bottom-6 transition-all duration-500 ease-in-out">
              <p className="font-libre text-white font-medium text-lg mx-[20px]">Perabotan Rumah Tangga</p>
              <Ellipsis color="white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-[30px]">
            <div className="flex flex-row gap-x-[30px] flex-wrap lg:flex-nowrap gap-y-[28px]">
              <div className="relative w-full h-full aspect-square lg:w-[179px] lg:h-[179px] bg-[#f7f7f7] rounded-2xl overflow-hidden group flex items-center justify-center">
                {/* Gambar */}
                <img src="/galery.png" alt="" className="z-10" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

                {/* Teks dan Ellipsis muncul dari bawah */}
                <div className="absolute bottom-[-30px] w-full flex justify-between items-center px-8 z-20 group-hover:bottom-10 transition-all duration-500 ease-in-out">
                  <p className="font-libre text-white font-medium text-sm">Kulkas</p>
                  <Ellipsis color="white" />
                </div>
              </div>
              <div className="relative h-full w-full aspect-square lg:w-[179px] lg:h-[179px] bg-[#f7f7f7] rounded-2xl overflow-hidden group flex items-center justify-center">
                {/* Gambar */}
                <img src="/galery.png" alt="" className="z-10" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

                {/* Teks dan Ellipsis muncul dari bawah */}
                <div className="absolute bottom-[-30px] w-full flex justify-between items-center px-8 z-20 group-hover:bottom-10 transition-all duration-500 ease-in-out">
                  <p className="font-libre text-white font-medium text-sm">Kulkas</p>
                  <Ellipsis color="white" />
                </div>
              </div>
            </div>
            <div className="relative w-[377.13px] h-[387.01px] bg-[#f7f7f7] rounded-[33.20px] overflow-hidden group flex items-center justify-center">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

              {/* Gambar */}
              <img src="/galery.png" alt="Galery" className="z-10" />

              {/* Teks dan Ellipsis muncul dari bawah */}
              <div className="absolute bottom-[-50px] w-full flex justify-between items-center px-8 z-20 group-hover:bottom-10 transition-all duration-500 ease-in-out">
                <p className="font-libre text-white font-medium text-lg">Perabotan Rumah Tangga</p>
                <Ellipsis color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalery;