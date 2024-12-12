import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Product from "@/components/home/Product";
import Service from "@/components/home/Service";
import Testimoni from "@/components/home/Testimoni";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-[100%] bg-white text-black">
      <Navbar />
      <Hero />
      <Service />
      <Testimoni />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
