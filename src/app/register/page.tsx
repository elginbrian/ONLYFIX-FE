"use client";
import { CircleUserRound, Mail, User } from "lucide-react";
import React from "react";
import Link from "next/link";
import Input from "@/components/auth/Input";
import Navbar from "@/components/common/Navbar";

const Register: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="text-center">
        <div className="flex gap-x-[88px] lg:flex-row flex-col">
          {/* Bagian yang hanya tampil di desktop */}
          <div className="lg:min-w-[712.72px] lg:block hidden h-screen relative bg-[url('/auth_page.png')] flex flex-col items-start">
            <div className="w-[440.36px] text-white text-[85px] font-semibold font-['Libre Franklin'] leading-[80px] mt-[200px] text-start ml-16">
              Selamat
              <br />
              datang!
            </div>
            <div className="text-white text-[23px] font-normal font-libre leading-[80.92px] text-start  ml-16">Kelengkapan akunnya dimasukin dulu.</div>
            <img src="/icon_white.png" className="ml-16 mt-[168px]" alt="" />
          </div>

          {/* Bagian yang tampil di semua ukuran layar (responsif) */}
          <div className="text-start w-[80%] lg:w-[523px] md:mx-[20px] md:w-[80%] sm:w-[80%] pt-4">
            <h1 className="text-black font-medium text-[40px] font-['Libre Franklin']">Daftar</h1>
            <p>
              Udah punya akun ya? sini tinggal{" "}
              <span className="underline">
                <Link href="/login">Masuk</Link>
              </span>
              .
            </p>
            <div className="mb-[35px] mt-[28px]">
              <Input label={"Nama Lengkap"} placeholder={"Masukan Nama"} Icon={<img src="/user.png" className="h-6 w-auto" />} />
            </div>

            <div className="mb-[35px]">
              <Input label={"E-Mail"} placeholder={"Masukan E-Mail"} Icon={<img src="/email.png" className="h-6 w-auto" />} />
            </div>
            <div className="mb-[35px]">
              <Input label={"Password"} isPassword={true} placeholder={"Masukan Password"} Icon={<img src="/password.png" className="h-6 w-auto" />} />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="saveInfo" className="peer hidden" />
              <label
                htmlFor="saveInfo"
                className="flex items-center justify-center h-4 w-4 border border-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white text-transparent cursor-pointer transition-colors"
              >
                ✓
              </label>
              <span className="ml-3 text-gray-700 text-sm font-medium cursor-pointer">Ingat Saya</span>
            </div>
            <button className="w-full bg-[#00adf1] py-4 px-3 rounded-[47px] mt-5 text-white text-center">
              <div className=" text-center text-white text-xl font-bold font-['Libre Franklin'] w-full">daftar</div>
            </button>
            <div className="w-full lg:w-[521.78px] text-justify text-black/40 text-[15px] font-medium font-['Libre Franklin'] leading-tight mt-20">
              Dengan bergabung, Anda setuju dengan Persyaratan Layanan OnlyFix. Silahkan membaca Kebijakan Privasi untuk mengetahui bagaimana cara kami mengolah data pribadi Anda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
