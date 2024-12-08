import React from "react";

const ItemCard = React.memo(() => {
  return (
    <div
      className="min-w-[703px] lg:min-w-[703px] md:min-w-[703px]  sm:min-w-[500px] h-[421px] bg-neutral-100 rounded-[20px] justify-center items-center inline-flex"
      style={{
        backgroundImage: "url(https://placehold.co/600x400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[86.51px] h-[83.56px] relative flex-col justify-start items-start flex"></div>
    </div>
  );
});

export default ItemCard;
