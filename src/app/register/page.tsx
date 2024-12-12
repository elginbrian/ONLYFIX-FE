"use client";
import { CircleUserRound, Mail, User } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/auth/Input";
import Navbar from "@/components/common/Navbar";
import { registerUser } from "@/services/auth-service";
import { RegisterData } from "@/types/auth-type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    if (!formData.username || !formData.email || !formData.password || !formData.password_confirmation) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser(formData);
      toast.success("Registration successful! You can now log in.");
      setFormData({ username: "", email: "", password: "", password_confirmation: "" });
    } catch (err: any) {
      toast.error(err.message || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="text-center">
        <div className="flex gap-x-[88px] lg:flex-row flex-col">
          {/* Desktop-only section */}
          <div className="lg:min-w-[712.72px] lg:block hidden h-screen relative bg-[url('/auth_page.png')] flex flex-col items-start">
            <div className="w-[440.36px] text-white text-[85px] font-semibold font-['Libre Franklin'] leading-[80px] mt-[200px] text-start ml-16">
              Selamat
              <br />
              datang!
            </div>
            <div className="text-white text-[23px] font-normal font-libre leading-[80.92px] text-start ml-16">Kelengkapan akunnya dimasukin dulu.</div>
            <img src="/icon_white.png" className="ml-16 mt-[168px]" alt="" />
          </div>

          {/* Responsive form section */}
          <div className="text-start w-[80%] lg:w-[523px] md:mx-[20px] md:w-[80%] sm:w-[80%] pt-4">
            <h1 className="text-black font-medium text-[40px] font-['Libre Franklin']">Daftar</h1>
            <p>
              Udah punya akun ya? sini tinggal{" "}
              <span className="underline">
                <Link href="/login">Masuk</Link>
              </span>
              .
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <Input label="Nama Lengkap" name="username" value={formData.username} onChange={handleChange} placeholder="Masukan Nama" Icon={<img src="/user.png" className="h-6 w-auto" />} />
              <Input label="E-Mail" name="email" value={formData.email} onChange={handleChange} placeholder="Masukan E-Mail" Icon={<img src="/email.png" className="h-5 w-auto" />} />
              <Input label="Password" name="password" isPassword value={formData.password} onChange={handleChange} placeholder="Masukan Password" Icon={<img src="/password.png" className="h-6 w-auto" />} />
              <Input
                label="Konfirmasi Password"
                name="password_confirmation"
                isPassword
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Konfirmasi Password"
                Icon={<img src="/password.png" className="h-6 w-auto" />}
              />

              <button type="submit" className="w-full bg-[#00adf1] py-4 px-3 rounded-[47px] mt-5 text-white text-center" disabled={loading}>
                {loading ? "Mendaftar..." : "Daftar"}
              </button>
            </form>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="saveInfo" className="peer hidden" />
              <label
                htmlFor="saveInfo"
                className="flex items-center justify-center h-4 w-4 border border-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white text-transparent cursor-pointer transition-colors"
              >
                ✓
              </label>
              <span className="ml-3 text-gray-700 text-sm font-medium cursor-pointer">Ingat Saya</span>
            </div>
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

export default Register;
