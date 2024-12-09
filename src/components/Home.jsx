import React from "react";
import Hero from "./home/Hero";
import Service from "./home/Service";
import Testimoni from "./home/Testimoni";
import Product from "./home/Product";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-[100%]">
      <Hero />
      <Service />
      <Testimoni />
      <Product />
    </div>
  );
};

export default Home;
