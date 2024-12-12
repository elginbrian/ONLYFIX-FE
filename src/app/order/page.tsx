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

export interface UlasanType {
  name: string;
  date: string;
  image: string;
  rating: number;
  title: string;
  subtitle: string;
}

export interface ServicesType {
  [key: string]: string[];
}

const Order: React.FC = () => {
  const ulasans: UlasanType[] = [
    {
      name: "Jhon Smith",
      date: "25 Nov 2025",
      image:
        "https://s3-alpha-sig.figma.com/img/6bf5/5f68/4f1b8cbafc410510163096313873a58a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIIJAWZdAt92fMa6Y3haCnVqwLfSP6CcnEDLgQDxgIBC7YG9E7YZISOqaD4DbPLWHzqs~0phj6ogEcwbW2lCDacKSBaFJ7qJR5PURk0mLeXIBJL8bFe1cFSTbfQSpqN0InY07T1NSY1nGJTK9Wh2JsC4TgD1YPupCWRC6rM46JaDx6Vnh6wsU56MZ-uWPlZAezI39V67jZMQHCtLhmusmftiklM44i-OYwF6OMGgLSKi9l~56IKxgMZonWuiDywwJy23k66uOoup0Cr5alGn1FxZcO3SZHDtZzNTS5caX1GJpYHDYS9XnwnIL7z707BCZuJw8CUHwf4CQPp8KKtGqg__",
      rating: 3,
      title: "Kayaknya tukang masih belajar",
      subtitle:
        "Hasilnya kurang memuaskan kayaknya tukangnya masih belajar atau belum pengalaman. Pengerjaannya lama, dan pintunya malah gak sejajar sekarang. Harap ke depannya pihak aplikasi lebih selektif memilih tukang atau kasih pelatihan dulu biar hasilnya lebih maksimal. Sayang banget kalau pelayanan begini terus, padahal idenya bagus!",
    },
    {
      name: "Andrio Gelario",
      date: "12 Dec 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/dd28/a692/db6f857124c8fc03af2ce947ab707794?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeRB4JToDGuPEfCrqKhNPgcIOCvEXw8Nwz17j1l-12evYFOUvAOKJXjzBu7Qe2z0CDeNs8Hujl9zqceugYycmS0IWZyw9RzW4GZSCe9ZOlaELPxll3Mzd~Sqhzd9s8jyBm2CJZUF9bjyJ3dgeHjrI46I~z5IEpZqY6JDLzSH6suqqXP-GE5gtYBqfmCt85T3Q~UHBu39nVPnWKnpcjvHK8Zlv1XM2fwf3ufLuTPzZ1r5rVP~MlxaUQGHppEraOjF0AVExfXZNhLmeuqLBfGQ7siR864j-uIhpPKSHmmNA7Xll9FZe2NeOAhljo0PIfiAhyxYP1PQ2QP~WtObeHFaNg__",
      rating: 4,
      title: "AC kamar saya jadi lebih dingin",
      subtitle:
        "Hasilnya luar biasa! Udara jadi lebih dingin, dan AC gak berisik lagi seperti sebelumnya. Pengerjaannya cepat dan rapi, plus tukangnya ramah banget. Kerja di rumah sekarang jauh lebih nyaman dan produktif.",
    },
    {
      name: "Jony Gerald",
      date: "25 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/6bf5/5f68/4f1b8cbafc410510163096313873a58a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIIJAWZdAt92fMa6Y3haCnVqwLfSP6CcnEDLgQDxgIBC7YG9E7YZISOqaD4DbPLWHzqs~0phj6ogEcwbW2lCDacKSBaFJ7qJR5PURk0mLeXIBJL8bFe1cFSTbfQSpqN0InY07T1NSY1nGJTK9Wh2JsC4TgD1YPupCWRC6rM46JaDx6Vnh6wsU56MZ-uWPlZAezI39V67jZMQHCtLhmusmftiklM44i-OYwF6OMGgLSKi9l~56IKxgMZonWuiDywwJy23k66uOoup0Cr5alGn1FxZcO3SZHDtZzNTS5caX1GJpYHDYS9XnwnIL7z707BCZuJw8CUHwf4CQPp8KKtGqg__",
      rating: 4,
      title: "Tukang ramah banget",
      subtitle:
        "Pengalaman pakai aplikasi ini sangat memuaskan! Tukangnya datang tepat waktu, sopan, dan ramah banget. Saat memperbaiki keran yang bocor, dia juga menjelaskan apa yang harus diganti dan kasih tips biar gak cepat rusak lagi.",
    },
  ];

  const services: ServicesType = {
    "Perbaikan perabotan rumah tangga": [
      "Perbaikan perabotan rumah tangga (kursi, meja, lemari, dan lainnya)",
      "Pemasangan dan perbaikan rak, lemari, dan furnitur lainnya",
      "Perawatan perabotan kayu (pengamplasan, pengecatan ulang, dan perbaikan)",
      "Servis dan pembersihan perabotan besi dan logam",
      "Penyesuaian dan perbaikan engsel, pegangan, dan bagian lain dari perabotan",
      "Pembongkaran dan perakitan furnitur baru",
      "Pemasangan perabotan sesuai desain interior",
      "Perawatan dan pembersihan alat-alat rumah tangga (seperti mesin cuci, kulkas, dan peralatan lainnya)",
    ],
  };

  const whyChoseus: string[] = ["Pengalaman lebih dari 10 tahun dalam servis perabotan rumah tangga", "Layanan cepat dan profesional", "Harga yang kompetitif dan transparan", "Komitmen terhadap kualitas dan kepuasan pelanggan"];

  const otherService: string[] = ["Konsultasi desain dan penataan interior rumah", "Penanganan perabotan dengan material khusus (kayu, rotan, plastik, dll.)", "Pembersihan dan pemeliharaan alat dapur dan furnitur outdoor"];

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="mt-4 mx-[109px] lg:mx-[109px] sm:mx-[40px] md:mx-[50] ">
        <div className="flex flex-row gap-2 mb-[44px]">
          <span className="text-[#757575]">Beranda</span>
          <span className="text-[#757575]">/</span>
          <span className="text-[#757575]">Nama Kategori</span>
          <span className="text-[#757575]">/</span>

          <span className="text-black">Nama Sub Kategori</span>
        </div>
        <div className="flex items-center gap-x-[70px] flex-wrap lg:flex-nowrap">
          <div className="min-w-full sm:min-w-[500px] md:min-w-[700px] lg:min-w-[650px] ">
            <ItemCarousel />
          </div>
          <div className="min-w-[330px] max-w-[550px] md:w-[350px]">
            <ItemCard imageUrl="https://via.placeholder.com/703x421" title="Perbaikan Perabotan Rumah Tangga" description="Layanan perbaikan untuk berbagai jenis perabotan rumah tangga." />
          </div>
        </div>

        <div className="flex justify-between gap-8 mt-14 mb-[50px] flex-wrap md:flex-nowrap">
          <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[650px]">
            <div className="font-[500] text-[30px] text-[#333] leading-[50px]">Perbaikan Perabotan Rumah Tangga</div>
            <div className="text-base font-[500] leading-6 text-[#4F4F4F] mt-[15px]">
              Mulai dari <span className="text-[#E84A5F]">Rp 500.000</span>
            </div>
            <div className="mt-6 text-[#4F4F4F] text-sm font-[500]">Termasuk di dalam harga ini:</div>
            <div className="flex gap-5 mt-4 flex-wrap lg:flex-nowrap">
              <div className="flex gap-5 mt-4 flex-wrap lg:flex-nowrap">
                {Object.keys(services).map((service) => (
                  <div key={service}>
                    <ListItem items={services[service]} />
                  </div>
                ))}
              </div>
            </div>
            <OrderButton />

            <div className="mt-[30px]">
              <div className="font-bold text-[20px] text-[#E84A5F]">Gratis Transportasi & Maintenance</div>
            </div>

            <About otherService={otherService} whyChoseus={whyChoseus} />

            <Contact />
          </div>

          <div className="w-[280px] h-[480px] flex justify-center items-center bg-[#F8F8F8] rounded-xl">
            <div>
              <div className="text-center font-bold text-[18px]">Joko Samudro</div>
              <div className="text-center font-[500] text-[16px] mt-[10px]">Pengalaman 8 tahun</div>
              <div className="flex justify-center gap-1 mt-3">
                <Star />
                <span className="font-[500] text-[15px] text-[#4F4F4F]">4.5</span>
              </div>
              <div className="text-center mt-[20px]">
                <button className="bg-[#F5A623] text-white w-full py-[10px] rounded-lg">Hubungi</button>
              </div>
            </div>
          </div>
        </div>

        <Portofolio />

        <div className="mt-[80px]">
          <div className="text-[24px] text-[#E84A5F] font-bold">Ulasan</div>
          <div className="flex gap-4 mt-6">
            {ulasans.map((ulasan, index) => (
              <Ulasan key={index} data={ulasan} />
            ))}
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="text-[24px] text-[#E84A5F] font-bold">Layanan Terkait</div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {otherService.map((service, idx) => (
              <OtherItem key={idx} data={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
