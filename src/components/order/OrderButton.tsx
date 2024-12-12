import { ChevronRight, Heart } from "lucide-react";
import React from "react";
import Link from "next/link"; 

type OrderButtonProps = {};

const OrderButton: React.FC<OrderButtonProps> = () => {
  return (
    <div className="flex mt-[20px] gap-3">
      <Link href="/payment" passHref>
        <button className="w-fit h-[43.64px] px-[52.80px] py-[11px] bg-[#00adf1] rounded-[22px] justify-center items-center gap-[11px] inline-flex" aria-label="Go to payment page">
          <span className="text-[#f9f9f9] text-base font-bold font-['Libre Franklin'] leading-relaxed flex gap-2">
            Pesan <ChevronRight color="white" />
          </span>
        </button>
      </Link>

      <button className="w-fit h-[43.64px] px-[52.80px] py-[11px] rounded-[22px] border-2 border-[#d9d9d9] justify-center items-center gap-[11px] inline-flex" aria-label="Contact seller">
        <span className="text-[#696969] text-base font-medium font-['Libre Franklin'] leading-relaxed">Hubungi saya</span>
      </button>

      <button className="rounded-full border border-[#696969] h-[43px] w-[43px] flex items-center justify-center" aria-label="Add to favorites">
        <Heart color="#696969" />
      </button>
    </div>
  );
};

export default OrderButton;
