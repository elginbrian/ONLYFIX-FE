"use client";
import React, { useState, useEffect } from "react";

import { Droplets, Refrigerator } from "lucide-react";
import FormOrder from "@/components/payment/FormOrder";
import Navbar from "@/components/common/Navbar";

function Payment() {
  const [totalPrice, setTotalPrice] = useState(550000); // Initial total value

  useEffect(() => {
    // Add your logic here to dynamically adjust the total price
    // For example, you might update the totalPrice based on selected items or discounts
  }, [totalPrice]);

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="mt-4 mx-[109px] lg:mx-[109px] sm:mx-[40px] md:mx-[50] mb-[84px]">
        {/* Breadcrumb */}
        <div className="flex flex-row gap-2  mb-[42px]">
          <span className="text-[#757575]">Beranda</span>
          <span className="text-[#757575]">/</span>
          <span className="text-[#757575]">Nama Kategori</span>
          <span className="text-[#757575]">/</span>
          <span className="text-[#757575]">Nama Sub Kategori</span>
          <span className="text-[#757575]">/</span>
          <span className="text-black">Pembayaran</span>
        </div>
        <h1 className="font-bold text-black text-4xl mb-[48px]">Billing Details</h1>
        <div className="flex gap-[90px] justify-between md:flex-wrap sm:flex-wrap lg:flex-nowrap ">
          <FormOrder />
          <div className="w-[553px] border rounded-lg px-[25px] py-[35px] h-fit">
            {/* Itemized List */}
            <div className="flex justify-between mb-[30px]">
              <div className="flex gap-2">
                <img src="/kulkas.png" />
                <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">Perbaikan Kulkas</span>
              </div>
              <span className="text-black text-base font-normal font-['Libre Franklin'] leading-normal">Rp 350.000</span>
            </div>
            <div className="flex justify-between mb-[30px]">
              <div className="flex gap-2">
                <img src="/keran_2.png" />
                <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">Perbaikan Saluran Air</span>
              </div>
              <span className="text-black text-base font-normal font-['Libre Franklin'] leading-normal">Rp 350.000</span>
            </div>
            <div className="flex justify-between mb-[30px]">
              <div className="flex">
                <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">Subtotal:</span>
              </div>
              <span className="text-black text-base font-normal font-['Libre Franklin'] leading-normal">Rp {totalPrice}</span>
            </div>
            {/* Other Calculations */}
            <div className="flex justify-between mb-[30px]">
              <div className="flex">
                <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">Pengiriman:</span>
              </div>
              <span className="text-black text-base font-normal font-['Libre Franklin'] leading-normal">Gratis</span>
            </div>
            <hr className="mb-[30px]" />
            <div className="flex justify-between mb-[30px]">
              <div className="flex">
                <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">Total:</span>
              </div>
              <span className="text-black text-base font-normal font-['Libre Franklin'] leading-normal">Rp {totalPrice}</span>
            </div>
            {/* Payment Method and Buttons */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start space-y-2">
                <label className="flex items-start space-x-2">
                  <input type="radio" name="paymentMethod" value="tunai" className="form-radio h-5 w-5 text-black border-black checked:bg-black checked:border-black focus:ring-0" />
                  <span className="text-black">Tunai</span>
                </label>
                <label className="flex items-start space-x-2">
                  <input type="radio" name="paymentMethod" value="bank" className="form-radio h-5 w-5 text-black border-black" />
                  <span className="text-black">Bank</span>
                </label>
              </div>
              <div className="flex gap-4">
                <img src="/image 30.png" alt="" className=" object-contain" />
                <img src="/image 31.png" alt="" className=" object-contain" />
                <img src="/image 32.png" alt="" className=" object-contain" />
                <img src="/image 33.png" alt="" className=" object-contain" />
              </div>
            </div>
            <div className="flex gap-[20px] mt-[30px]">
              <button className="w-[300px] h-14  rounded-[50px] border border-[#808080]">
                <p className="font-bold">Kode Promo</p>
              </button>
              <button className="w-[300px] h-14  rounded-[50px] border border-[#808080] bg-[#00adf1]">
                <p className="text-white font-bold">Terapkan Promo</p>
              </button>
            </div>
            <button className="w-[200px] h-14  rounded-[50px] border border-[#808080] mt-5  bg-[#00adf1]">
              <p className="text-white font-bold">Buat Pesanan</p>
            </button>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="saveInfo" className="peer hidden" />
          <label
            htmlFor="saveInfo"
            className="flex items-center justify-center h-6 w-6 border border-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white text-transparent cursor-pointer transition-colors"
          >
            ✓
          </label>
          <span className="ml-3 text-gray-700 text-sm font-medium cursor-pointer">Simpan Informasi</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
