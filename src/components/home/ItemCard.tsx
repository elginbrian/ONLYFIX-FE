import React from "react";

interface ItemCardProps {
  icon: string; 
  text: string; 
}

const ItemCard: React.FC<ItemCardProps> = ({ icon, text }) => {
  return (
    <div className="w-full md:w-[156.08px] h-[139.82px] px-[30.11px] py-[26.19px] bg-white/40 rounded-[22.26px] shadow border-2 border-white backdrop-blur-[7px] text-start flex flex-col justify-between">
      <img className="w-fit h-fit" src={icon} alt="Icon" />
      <div className="w-[115.04px] h-[26.59px] text-white text-[15px] font-semibold font-['Libre Franklin'] text-start">{text}</div>
    </div>
  );
};

export default ItemCard;
