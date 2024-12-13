"use client";
import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import ItemCarousel from "@/components/order/ItemCarousel";
import ListItem from "@/components/order/ListItem";
import OrderButton from "@/components/order/OrderButton";
import Ulasan from "@/components/order/Ulasan";
import OtherItem from "@/components/order/OtherItem";
import Portofolio from "@/components/order/Portfolio";
import Contact from "@/components/order/Contact";
import ItemCard from "@/components/order/ItemCard";
import About from "@/components/order/About";
import Navbar from "@/components/common/Navbar";

function Order() {
  const ulasans = [
    {
      name: "Jhon Smith",
      date: "25 nov 2025",
      image:
        "https://s3-alpha-sig.figma.com/img/6bf5/5f68/4f1b8cbafc410510163096313873a58a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIIJAWZdAt92fMa6Y3haCnVqwLfSP6CcnEDLgQDxgIBC7YG9E7YZISOqaD4DbPLWHzqs~0phj6ogEcwbW2lCDacKSBaFJ7qJR5PURk0mLeXIBJL8bFe1cFSTbfQSpqN0InY07T1NSY1nGJTK9Wh2JsC4TgD1YPupCWRC6rM46JaDx6Vnh6wsU56MZ-uWPlZAezI39V67jZMQHCtLhmusmftiklM44i-OYwF6OMGgLSKi9l~56IKxgMZonWuiDywwJy23k66uOoup0Cr5alGn1FxZcO3SZHDtZzNTS5caX1GJpYHDYS9XnwnIL7z707BCZuJw8CUHwf4CQPp8KKtGqg__",
      rating: 3,
      title: "kayaknya masnya masih belajar",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus.",
    },
    {
      name: "Andrio Gelario",
      date: "12, Dec 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/dd28/a692/db6f857124c8fc03af2ce947ab707794?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeRB4JToDGuPEfCrqKhNPgcIOCvEXw8Nwz17j1l-12evYFOUvAOKJXjzBu7Qe2z0CDeNs8Hujl9zqceugYycmS0IWZyw9RzW4GZSCe9ZOlaELPxll3Mzd~Sqhzd9s8jyBm2CJZUF9bjyJ3dgeHjrI46I~z5IEpZqY6JDLzSH6suqqXP-GE5gtYBqfmCt85T3Q~UHBu39nVPnWKnpcjvHK8Zlv1XM2fwf3ufLuTPzZ1r5rVP~MlxaUQGHppEraOjF0AVExfXZNhLmeuqLBfGQ7siR864j-uIhpPKSHmmNA7Xll9FZe2NeOAhljo0PIfiAhyxYP1PQ2QP~WtObeHFaNg__",
      rating: 4,
      title: "kayaknya masnya masih belajar",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus.",
    },
    {
      name: "Jhon Smith",
      date: "25 nov 2025",
      image:
        "https://s3-alpha-sig.figma.com/img/6bf5/5f68/4f1b8cbafc410510163096313873a58a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIIJAWZdAt92fMa6Y3haCnVqwLfSP6CcnEDLgQDxgIBC7YG9E7YZISOqaD4DbPLWHzqs~0phj6ogEcwbW2lCDacKSBaFJ7qJR5PURk0mLeXIBJL8bFe1cFSTbfQSpqN0InY07T1NSY1nGJTK9Wh2JsC4TgD1YPupCWRC6rM46JaDx6Vnh6wsU56MZ-uWPlZAezI39V67jZMQHCtLhmusmftiklM44i-OYwF6OMGgLSKi9l~56IKxgMZonWuiDywwJy23k66uOoup0Cr5alGn1FxZcO3SZHDtZzNTS5caX1GJpYHDYS9XnwnIL7z707BCZuJw8CUHwf4CQPp8KKtGqg__",
      rating: 4,
      title: "kayaknya masnya masih belajar",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus.",
    },
  ];

  const services = [
    "Perbaikan perabotan rumah tangga (kursi, meja, lemari, dan lainnya)",
    "Pemasangan dan perbaikan rak, lemari, dan furnitur lainnya",
    "Perawatan perabotan kayu (pengamplasan, pengecatan ulang, dan perbaikan)",
    "Servis dan pembersihan perabotan besi dan logam",
    "Penyesuaian dan perbaikan engsel, pegangan, dan bagian lain dari perabotan",
    "Pembongkaran dan perakitan furnitur baru",
    "Pemasangan perabotan sesuai desain interior",
    "Perawatan dan pembersihan alat-alat rumah tangga (seperti mesin cuci, kulkas, dan peralatan lainnya)",
  ];

  const whyChoseus = ["Pengalaman lebih dari 10 tahun dalam servis perabotan rumah tangga", "Layanan cepat dan profesional", "Harga yang kompetitif dan transparan", "Komitmen terhadap kualitas dan kepuasan pelanggan"];

  const otherService = ["Konsultasi desain dan penataan interior rumah", "Penanganan perabotan dengan material khusus (kayu, rotan, plastik, dll.)", "Pembersihan dan pemeliharaan alat dapur dan furnitur outdoor"];

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="mt-4 mx-[109px] lg:mx-[109px] sm:mx-[40px] md:mx-[50]">
        {/* Breadcrumb */}
        <div className="flex flex-row gap-2 mb-[44px]">
          <span className="text-[#757575]">Beranda</span>
          <span className="text-[#757575]">/</span>
          <span className="text-[#757575]">Nama Kategori</span>
          <span className="text-[#757575]">/</span>

          <span className="text-black">Nama Sub Kategori</span>
        </div>
        {/* Kontainer Slider */}
        <div className="flex items-center gap-x-[70px] flex-wrap lg:flex-nowrap">
          <div className="min-w-full sm:min-w-[500px] md:min-w-[730px]">
            <ItemCarousel />
            <OtherItem />
          </div>

          <div className="">
            <p>Layanan perbaikan untuk perabotan rumah tangga, seperti perbaikan kecil pada perabotan atau pemasangan perabotan sederhana.</p>
            <div className="w-full h-[0px] border border-black mt-[25px] mb-[15px]"></div>
            <p className="text-[#696969] text-[11px] font-normal">MULAI DARI</p>
            <p className="w-[391.62px] text-black text-[21px] font-semibold font-['Libre Franklin'] leading-[21px]">Rp 500.000</p>
            <div className="w-[391.62px] text-black text-[11px] font-normal font-['Libre Franklin'] leading-[21px] mt-[19px]">
              ✔️ Analisis kerusakan perabotan
              <br />
              ✔️ Perbaikan perabotan ringan
              <br />
              ✔️ Penyesuaian dan pemasangan bagian furnitur sederhana
              <br />
              ✔️ Pemeliharaan dasar untuk memperpanjang umur perabotan
            </div>
            <OrderButton />

            <div className="w-[418.92px] h-[180px] relative rounded-[22px] border border-[#d9d9d9] mt-[24px]">
              <div className="left-[16px] top-[24px] absolute justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 relative">
                  <img src="/icon-delivery.png" alt="" />
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-black text-[15px] font-medium font-['Libre Franklin'] leading-normal">Gratis Biaya Transportasi</div>
                  <div className="text-black text-[11px] font-medium font-['Libre Franklin'] underline leading-[18px]">Khusus untuk jangkauan {"<"} 10 km dari kami</div>
                </div>
              </div>
              <div className="left-[16px] top-[106px] absolute justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 relative">
                  <img src="/Icon-return.png" alt="" />
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-black text-[15px] font-medium font-['Libre Franklin'] leading-normal">Gratis Perawatan Secara Berkala</div>
                  <div>
                    <span className="text-black text-[11px] font-medium font-['Libre Franklin'] leading-[18px]">Peralatanmu akan kami tinjau 30 hari sekali. </span>
                    <span className="text-black text-[11px] font-medium font-['Libre Franklin'] underline leading-[18px]">Detail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About otherService={otherService} services={services} whyChoseus={whyChoseus} />
        <h1 className="font-bold text-black mb-[33px]">Kenali joko</h1>
        <div className="flex gap-x-[50px] mb-[66px]">
          <img
            className="w-[141.27px] h-[141.27px] rounded-full"
            src="https://s3-alpha-sig.figma.com/img/dd28/a692/db6f857124c8fc03af2ce947ab707794?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeRB4JToDGuPEfCrqKhNPgcIOCvEXw8Nwz17j1l-12evYFOUvAOKJXjzBu7Qe2z0CDeNs8Hujl9zqceugYycmS0IWZyw9RzW4GZSCe9ZOlaELPxll3Mzd~Sqhzd9s8jyBm2CJZUF9bjyJ3dgeHjrI46I~z5IEpZqY6JDLzSH6suqqXP-GE5gtYBqfmCt85T3Q~UHBu39nVPnWKnpcjvHK8Zlv1XM2fwf3ufLuTPzZ1r5rVP~MlxaUQGHppEraOjF0AVExfXZNhLmeuqLBfGQ7siR864j-uIhpPKSHmmNA7Xll9FZe2NeOAhljo0PIfiAhyxYP1PQ2QP~WtObeHFaNg__"
            alt=""
          />
          <div>
            <h4 className="font-bold">Joko Samudro</h4>
            <p className="text-[#696969]">Tukang Servis Perabotan Rumah Tangga, Pemasangan, dan Perawatan</p>
            <div className="flex">
              <Star fill="black" color="black" />
              <p className="font-bold text-black">4.9</p>
              <p className="text-[#696969]">(71)</p>
            </div>
            <button className="border-2 border-[#444444] w-[154.6px] h-[39.98px] rounded-[26.65px] mt-3">Hubungi Saya</button>
          </div>
        </div>
        <Contact />
        <h3 className="text-black font-bold mb-6 text-lg sm:text-xl md:text-2xl">Portofolio Saya</h3>
        <Portofolio />
        <br />
        <h3 className="text-black font-bold mb-[41px] text-[23px]">Ulasan</h3>
        {ulasans.map((item, index) => (
          <div className="mb-[40px]">
            <Ulasan data={item} />
          </div>
        ))}
        <button className="rounded-3xl border bg-white px-[68px] py-[14px] mb-[100px] font-['Libre Franklin']">Lihat Semua Ulasan</button>
        <div className="flex gap-x-[20px] items-center mb-[32px]">
          <div className="w-[19.37px] h-[38.73px] relative">
            <div className="w-[19.37px] h-[38.73px] left-0 top-0 absolute bg-[#00adf1] rounded-[5px]" />
          </div>
          <div className="text-neutral-800 text-[23px] font-semibold font-['Libre Franklin'] leading-tight">Layanan Terkait</div>
        </div>
        {/* layanan terkait */}

        <div className="mb-[96px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* <LayananTerkait image={"/1.png"} />
        <LayananTerkait image={"/2.png"} />
        <LayananTerkait image={"/3.png"} />
        <LayananTerkait image={"/4.png"} /> */}
        </div>
      </div>
    </div>
  );
}

export default Order;
