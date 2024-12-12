import React from "react";

const Portofolio: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-x-[43px] items-center">
        <div className="h-auto bg-neutral-100 rounded-2xl px-[18.48px] py-[18.48px]">
          <div className="flex gap-[18.83px] justify-center">
            <div className="w-fit">
              <div className="w-[184.77px] h-28 sm:w-40 sm:h-40 bg-white rounded-[25px] mb-4 flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
              <div className="w-[114.09px] h-[114.09px] px-0 py-0 sm:w-32 sm:h-32 bg-white rounded-[25px] flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
            </div>
            <div className="">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-[25px] mb-4 flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-[25px] flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
            </div>
            <div>
              <div className="w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-[25px]  mb-4 flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
              <div className="w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-[25px]  flex items-center justify-center">
                <img src="/galery.png" alt="Gallery" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm text-center lg:text-left">
          <h3 className="font-bold text-[#232323] text-lg sm:text-xl md:text-2xl mb-2">Barang Elektronik</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#232323]">Berbagai macam peralatan elektronik mulai dari kulkas, laptop, hp, mesin cuci, hingga water heater</p>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
