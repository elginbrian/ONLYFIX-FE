"use client";
import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/auth/Input";
import Navbar from "@/components/common/Navbar";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "@/services/auth-service";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.warning("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser(formData);
      toast.success("Login successful!");
      router.push("/");
    } catch (err: any) {
      toast.error(err.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="text-center bg-white text-black">
        <div className="flex gap-x-[88px] lg:flex-row flex-col">
          {/* Bagian yang hanya tampil di desktop */}
          <div className="lg:min-w-[712.72px] lg:block hidden h-screen relative bg-[url('/auth_page.png')] flex flex-col items-start">
            <div className="w-[440.36px] text-white text-[85px] font-semibold font-['Libre Franklin'] leading-[80px] mt-[200px] text-start ml-16">
              Ketemu
              <br />
              Lagi nih!
            </div>
            <div className="text-white text-[23px] font-normal font-libre leading-[80.92px] text-start ml-16">Tolong dimasukin lagi yaa kelengkapannya.</div>
            <img src="/icon_white.png" className="ml-16 mt-[168px]" alt="" />
          </div>

          {/* Bagian yang tampil di semua ukuran layar (responsif) */}
          <div className="text-start w-[80%] lg:w-[523px] md:mx-[20px] md:w-[80%] sm:w-[80%] pt-4">
            <h1 className="text-black font-medium text-[40px] font-['Libre Franklin']">Masuk</h1>
            <p>
              Kalau belum punya akun harus{" "}
              <span className="underline">
                <Link href="/register">Daftar</Link>
              </span>{" "}
              dulu!.
            </p>
            <div className="mb-[35px] mt-[28px]">
              <Input label={"E-Mail"} name="email" value={formData.email} onChange={handleChange} placeholder={"Masukan E-Mail"} Icon={<img src="/email.png" className="h-5 w-auto" />} />
            </div>
            <div className="mb-[35px]">
              <Input isPassword={true} label={"Password"} name="password" value={formData.password} onChange={handleChange} placeholder={"Masukan Password"} Icon={<img src="/password.png" className="h-6 w-auto" />} />
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

            <button type="submit" className="w-full bg-[#00adf1] py-4 px-3 rounded-[47px] mt-5 text-white text-center" disabled={loading} onClick={handleSubmit}>
              <div className="text-center text-white text-xl font-bold font-['Libre Franklin'] w-full">{loading ? "Masuk..." : "Masuk"}</div>
            </button>

            <div className="w-full lg:w-[521.78px] text-justify text-black/40 text-[15px] font-medium font-['Libre Franklin'] leading-tight mt-20">
              Dengan bergabung, Anda setuju dengan Persyaratan Layanan OnlyFix. Silahkan membaca Kebijakan Privasi untuk mengetahui bagaimana cara kami mengolah data pribadi Anda.
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
