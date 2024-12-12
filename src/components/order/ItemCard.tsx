import React from "react";

export interface ItemCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div
      className="min-w-[703px] lg:min-w-[703px] md:min-w-[703px] sm:min-w-[500px] h-[421px] bg-neutral-100 rounded-[20px] justify-center items-center inline-flex"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[86.51px] h-[83.56px] relative flex-col justify-start items-start flex">
        <div className="text-white font-bold text-xl">{title}</div>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
