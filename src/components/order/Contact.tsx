import React from "react";
import { Mail } from "lucide-react";

// Item component to display label, icon, and text
interface ItemProps {
  label: string;
  icon: React.ReactNode;
  text: string;
}

function Item({ label, icon, text }: ItemProps) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <div className="flex mt-1 mx-0 justify-start gap-1">
        {icon}
        <p className="font-bold text-[#444444]">{text}</p>
      </div>
    </div>
  );
}

// Contact component
interface ContactProps {
  // You can define more props if needed, but in this case, it's just rendering static information
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="w-full max-w-[995.54px] h-auto relative rounded-[29.35px] border border-[#d9d9d9] mb-[20px] p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-[28px] py-4">
        {/* Column 1 */}
        <div className="flex flex-col">
          <Item icon={<img src="/locations.png" className="object-contain" alt="Location Icon" />} label={"Dari"} text={"Malang"} />
          <br />
          <Item icon={<img src="/jam.png" className="object-contain" alt="Clock Icon" />} label={"Waktu response rata-rata"} text={"1 Jam"} />
          <br />
          <Item icon={<img src="/headphon.png" className="object-contain" alt="Headphone Icon" />} label={"Telah Membantu"} text={"156 Pelanggan"} />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <Item icon={<img src="/pelanggan.png" className="object-contain" alt="Customer Icon" />} label={"Anggota sejak"} text={"Des 2020"} />
          <br />
          <Item icon={<img src="/ketersedian.png" alt="Availability Icon" className="object-contain" />} label={"Waktu response rata-rata"} text={"13.00 - 14.00"} />
        </div>

        {/* Column 3 */}
        <div className="w-full h-[160px] bg-[#f7f7f7] rounded-2xl p-[27px]">
          <div className="text-lg font-semibold text-[#696969]">Kontak</div>
          <div className="text-justify text-[#5f5f5f] text-[10px] font-medium font-libre leading-[9.84px] mb-[12px]">Lorem ipsum</div>
          <div className="text-sm text-[#5f5f5f] mb-4 flex flex-row items-center gap-1">
            <img src="/wait.png" className="object-contain" alt="Wait Icon" />
            <span>Lorem ipsum dolor sit amet</span>
          </div>
          <div className="flex gap-x-[5.25px]">
            <button className="w-full bg-[#3be35a] text-white py-2 px-4 rounded-full mb-2">
              <div className="flex items-center gap-2">
                <img className="h-6" src="/wa.png" alt="WhatsApp Icon" />
                <span className="text-[10px] font-semibold">WhatsApp</span>
              </div>
            </button>
            <button className="w-full bg-white text-[#D9D9D9] py-2 px-4 rounded-full mb-2 border border-[#D9D9D9]">
              <div className="flex items-center gap-2">
                <Mail color="#A6A6A6" size={20} />
                <span className="text-[#A6A6A6] text-[10px] font-semibold">Email</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border border-[#D9D9D9]"></div>

      {/* Description Section */}
      <div className="px-4 py-4 text-justify">
        <p className="text-sm md:text-base mb-4">
          Halo, saya adalah tukang servis berpengalaman dengan lebih dari sepuluh tahun pengalaman di bidang perbaikan dan pemeliharaan perabotan rumah tangga. Saya menawarkan layanan servis profesional untuk berbagai jenis perabotan rumah
          tangga, termasuk perbaikan dan pemasangan furnitur, perawatan kayu, logam, dan plastik, serta perbaikan alat-alat rumah tangga seperti mesin cuci dan kulkas.
        </p>
        <p className="text-sm md:text-base mb-4">
          Saya berkomitmen untuk memberikan layanan terbaik dengan kualitas yang terjamin dan harga yang bersaing. Apapun kebutuhan perabotan rumah tangga Anda, saya siap membantu menyelesaikannya dengan cepat dan efisien. Saya juga
          memiliki keahlian dalam desain interior dan penataan furnitur, sehingga Anda bisa mendapatkan tampilan rumah yang rapi dan fungsional.
        </p>
        <p className="text-sm md:text-base">Jangan ragu untuk menghubungi saya. Saya siap membantu menyelesaikan masalah perabotan rumah tangga Anda!</p>
      </div>
    </div>
  );
};

export default Contact;
