import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemCarousel() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const items = [
    <ItemCard key="1" imageUrl="/Title_1.jpg" title="" description="" />,
    <ItemCard key="2" imageUrl="/Title_2.jpg" title="" description="" />,
    <ItemCard key="3" imageUrl="/Title_3.jpg" title="" description="" />,
  ];
  const infiniteItems = [...items, ...items, ...items];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -703, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 703, behavior: "smooth" });
    }
  };

  const handleInfiniteScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      scrollContainerRef.current.scrollLeft = scrollWidth / 3 - clientWidth;
    }
    if (scrollLeft <= 1) {
      scrollContainerRef.current.scrollLeft = scrollWidth / 3;
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth / 3;

      scrollContainerRef.current.addEventListener("scroll", handleInfiniteScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleInfiniteScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[703px] h-[421px] mx-auto">
      {}
      <button
        onClick={handleScrollLeft}
        aria-label="Scroll to the left"
        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white border text-black rounded-full w-[40px] h-[40px] flex justify-center items-center shadow-lg"
        style={{ zIndex: 10 }}
      >
        <ChevronLeft />
      </button>

      {}
      <div
        className="flex flex-row h-full overflow-x-hidden mx-auto relative md:w-full md:gap-5 sm:gap-5 lg:gap-0"
        ref={scrollContainerRef}
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {infiniteItems}
      </div>

      {}
      <button
        onClick={handleScrollRight}
        aria-label="Scroll to the right"
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white border text-black rounded-full w-[40px] h-[40px] flex justify-center items-center shadow-lg"
        style={{ zIndex: 10 }}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ItemCarousel;
