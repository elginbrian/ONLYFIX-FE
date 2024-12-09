import { Star } from "lucide-react";
import React from "react";

function Ulasan({ data }) {
  const getStarColor = (index) => {
    if (index < data.rating) {
      return "#fecb4b"; // Bintang berwarna kuning
    }
    return "gray"; // Bintang berwarna abu-abu jika rating lebih rendah dari index
  };

  return (
    <div>
      <div className="w-full bg-white rounded-[18px] px-[30px] py-[20px] border">
        <div className="flex justify-between mb-[20px]">
          <div className="flex gap-3">
            <img
              className="w-14 h-14 rounded-full"
              src={data.image}
              alt=""
            />
            <div>
              <p className="text-[#111928] text-base font-medium font-['Libre Franklin'] leading-normal">
                Jhon Smith
              </p>
              <p className="text-[#637381] text-sm font-normal font-['Libre Franklin'] leading-snug">
                25, Nov 2025
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <p>Rating : {data.rating}</p>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                color={getStarColor(index)}
                fill={getStarColor(index)}
              />
            ))}
          </div>
        </div>
        <hr className="mb-[30px]" />
        <h3 className="text-black font-semibold">{data.title}</h3>
        <br />
        <p className="text-[#637381] text-base font-normal font-['Libre Franklin'] leading-normal">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
}

export default Ulasan;
