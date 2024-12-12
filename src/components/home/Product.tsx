import React from "react";
import ProductGalery from "./ProductGalery";

const Product: React.FC = () => {
  return (
    <div className="mt-20 text-center flex flex-col justify-center mx-[110px]">
      <div className="mb-10">
        <h1 className="text-[40px] text-black font-medium">
          Gausah bingung kalo barangnya <span className="text-[#00ADF1]">rusak..</span>
        </h1>
        <p className="text-[23px]">Nih Lihat udah banyak banget barang yang dibenerin !</p>
      </div>
      <ProductGalery />

      <div className="mt-20 flex justify-center mb-20">
        <button className="px-[56px] py-4 rounded-[47.27px] font-semibold text-white bg-[#00adf1]">Mau Dibenerin juga?</button>
      </div>
    </div>
  );
};

export default Product;
