import React, { useRef } from "react";
import OtherItemProduct from "./OtherItemProduct";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ServicesType } from "@/app/order/page";

interface OtherItemProps {
  data: string;
}
const OtherItem: React.FC<OtherItemProps> = (data) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-[27px] mb-[112px] relative max-w-[703px] mx-auto">
      {/* Tombol Left */}
      <button onClick={scrollLeft} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        <ChevronLeft color="black" />
      </button>

      {/* Kontainer Item */}
      <div className="flex gap-[30px] overflow-x-hidden scrollbar-hide" ref={containerRef}>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
        <div className="flex-shrink-0">
          <OtherItemProduct />
        </div>
      </div>

      {/* Tombol Right */}
      <button onClick={scrollRight} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        <ChevronRight color="black" />
      </button>
    </div>
  );
};

export default OtherItem;
