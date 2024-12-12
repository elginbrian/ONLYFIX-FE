import React from "react";
import { Star, StarHalf } from "lucide-react"; // Import lucide-react icons

interface LayananTerkaitProps {
  image: string;
  title: string;
  price: string;
  rating: number; // Rating as a number (e.g., 4.5 for 4 stars and 1 half)
  reviewsCount: number; // Number of reviews
  userImage: string;
  userName: string;
}

function LayananTerkait({ image, title, price, rating, reviewsCount, userImage, userName }: LayananTerkaitProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="max-w-[261px] w-full sm:max-w-[261px] sm:w-80%">
      <img className="h-[181.09px] rounded-[18px]" src={image} alt="Layanan Terkait" />
      <p className="text-black text-base font-medium font-['Libre Franklin'] leading-normal mt-[20px]">{title}</p>
      <p className="text-[#0682b3] text-base font-medium font-['Libre Franklin'] leading-normal mt-2">{price}</p>
      {/* Displaying stars dynamically */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={`full-${index}`} color="#fecb4b" fill="#fecb4b" />
        ))}
        {halfStar && <StarHalf color="#fecb4b" fill="#fecb4b" />}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={`empty-${index}`} color="#fecb4b" fill="none" />
        ))}
        <p className="opacity-50 text-black text-sm font-semibold font-['Libre Franklin'] leading-tight">({reviewsCount})</p>
      </div>
      <div className="flex mt-[21px] gap-2 items-center">
        <img className="w-[35.83px] h-[35.83px] rounded-full" src={userImage} alt={userName} />
        <p className="text-black">{userName}</p>
      </div>
    </div>
  );
}

export default LayananTerkait;
