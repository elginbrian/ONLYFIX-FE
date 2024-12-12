import { Star } from "lucide-react";
import React from "react";

const TestimoniCard: React.FC = () => {
  return (
    <div>
      <div className="w-[388px] h-[344px] relative">
        <div className="w-[388px] h-[344px] left-0 top-0 absolute bg-white rounded-3xl border border-[#d9d9d9]" />
        <div className="h-[26px] left-[32px] top-[48px] absolute justify-start items-center gap-3 inline-flex">
          <div className="w-[26px] h-[26px] relative">
            <Star fill="#FECC4C" color="#FECC4C" />
          </div>
          <div className="w-[26px] h-[26px] relative">
            <Star fill="#FECC4C" color="#FECC4C" />
          </div>
          <div className="w-[26px] h-[26px] relative">
            <Star fill="#FECC4C" color="#FECC4C" />
          </div>
          <div className="w-[26px] h-[26px] relative">
            <Star fill="#FECC4C" color="#FECC4C" />
          </div>
          <div className="w-[26px] h-[26px] relative">
            <Star fill="#D9D9D9" color="#D9D9D9" />
          </div>
        </div>
        <div className="w-[323px] left-[32px] top-[90px] absolute text-black text-[17px] font-normal font-['Libre Franklin'] leading-[30px]">
          “Saya sangat puas dengan pelayanan dari OnlyFix! Tukangnya datang tepat waktu dan sangat profesional. AC di rumah saya langsung dingin lagi setelah diperbaiki.”
        </div>
        <div className="left-[32px] top-[234px] absolute text-black text-xl font-bold font-['Libre Franklin'] leading-tight">Marni Sityaningsih</div>
        <div className="left-[32px] top-[266px] absolute text-[#a7a7a7] text-[17px] font-normal font-['Libre Franklin'] leading-[18px]">Ibu Rumah Tangga</div>
      </div>
    </div>
  );
};

export default TestimoniCard;
