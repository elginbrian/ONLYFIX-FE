import React from "react";

const ItemCard = React.memo(({ image, title, description }) => {
  return (
    <div
      className="min-w-[703px] lg:min-w-[703px] md:min-w-[703px] sm:min-w-[500px] h-[421px] bg-neutral-100 rounded-[20px] justify-center items-center inline-flex"
      style={{
        backgroundImage: `url(${image || "https://placehold.co/600x400"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-start p-6 bg-black bg-opacity-40 rounded-[20px] text-white w-full h-full">
        <h2 className="font-bold text-xl mb-4">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <button className="bg-[#00adf1] text-white px-4 py-2 rounded-[8px]">Learn More</button>
      </div>
    </div>
  );
});

export default ItemCard;
