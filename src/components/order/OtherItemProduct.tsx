import React from "react";

type OtherItemProductProps = {
  imageUrl?: string;
};

const OtherItemProduct: React.FC<OtherItemProductProps> = ({ imageUrl }) => {
  return (
    <div
      className="w-[130px] h-[130px] rounded-[20px] border border-[#dadada]"
      style={{
        backgroundImage: `url(${imageUrl || "https://placehold.co/130x130"})`, // Use provided image or fallback
      }}
    />
  );
};

export default OtherItemProduct;
