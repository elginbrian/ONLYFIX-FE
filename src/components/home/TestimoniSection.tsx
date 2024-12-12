"use client";
import { useRef } from "react";
import TestimoniCard from "./TestimoniCard";
import { ChevronRight } from "lucide-react";

const TestimoniSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-20 relative">
      <div className="flex gap-20 overflow-x-auto scrollbar-hide" ref={containerRef}>
        <TestimoniCard />
        <TestimoniCard />
        <TestimoniCard />
        <TestimoniCard />
      </div>
      <button onClick={scrollRight} className="h-[64px] w-[64px] absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#00adf1] text-white p-2 rounded-full flex items-center justify-center">
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default TestimoniSection;
