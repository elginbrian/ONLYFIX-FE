import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#f7f7f7] px-6 sm:px-10 lg:px-20 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col">
          <div className="flex gap-3 items-center">
            <img src="/logo_2.png" alt="Logo Image" className="h-10 w-auto" />
            <div className="text-center flex items-center">
              <span className="text-[#00aef0] text-opacity-[0.95] text-[24px] font-bold font-gardenia">Only</span>
              <span className="text-[#7fd7f8] text-opacity-[0.95] text-[24px] font-bold font-gardenia">Fix</span>
            </div>
          </div>
          <p className="text-base sm:text-lg mt-4">
            Anda tukang tapi kepengen nambah-nambahin kerjaan? <br /> Gaslah tunggu apalagi!
          </p>
          <div className="flex flex-col">
            <div className="h-16 px-4 sm:px-6 py-2 bg-white rounded-full mt-2 flex items-center">
              <input type="text" className="text-gray-400 text-base sm:text-lg font-semibold focus:outline-none w-full" placeholder="Masukan Email Anda?" />
            </div>
          </div>
          <button className="h-16 w-full sm:w-52 mt-5 px-6 py-3 bg-[#00adf1] rounded-full flex justify-center items-center">
            <span className="text-white text-base sm:text-lg font-bold">Bergabung</span>
          </button>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-10">
          <div>
            <h1 className="font-bold text-black text-base sm:text-lg">Pelanggan</h1>
            <div className="mt-4">
              <a href="">Buat Akun </a>
            </div>
            <div className="mt-4">
              <a href="">Pilih Kategori </a>
            </div>
            <div className="mt-4">
              <a href="">Rekomendasi Tukang</a>
            </div>
            <div className="mt-4">
              <a href="">Faq</a>
            </div>
            <div className="mt-4">
              <a href="">Testimoni</a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-black text-base sm:text-lg">Tukang</h1>
            <div className="mt-4">
              <a href="">Buat Akun </a>
            </div>
            <div className="mt-4">
              <a href="">Pilih Kategori </a>
            </div>
            <div className="mt-4">
              <a href="">Rekomendasi Tukang</a>
            </div>
            <div className="mt-4">
              <a href="">Faq</a>
            </div>
            <div className="mt-4">
              <a href="">Testimoni</a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black text-base sm:text-lg">Ikuti kami di Instagram</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl bg-cover bg-no-repeat bg-[url('/1.png')]" />
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl bg-cover bg-no-repeat bg-[url('/2.png')]" />
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl bg-cover bg-no-repeat bg-[url('/3.png')]" />
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl bg-cover bg-no-repeat bg-[url('/4.png')]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
