import React from "react";
import ListItem from "./ListItem";

interface AboutProps {
  // services: string[];
  otherService: string[];
  whyChoseus: string[];
}

const About: React.FC<AboutProps> = ({ otherService, whyChoseus }) => {
  return (
    <div className="mb-[113px] max-w-[1219px] text-justify">
      <h3 className="font-bold text-black mb-[10px]">Tentang Gig Ini</h3>
      <p>
        Apakah Anda membutuhkan jasa tukang untuk memperbaiki perabotan rumah tangga yang rusak? Atau mungkin Anda ingin melakukan pemeliharaan rutin agar perabotan tetap dalam kondisi terbaik? Anda berada di tempat yang tepat! Dengan
        pengalaman lebih dari sepuluh tahun dalam bidang perbaikan dan pemeliharaan perabotan rumah tangga, saya siap membantu Anda dengan berbagai layanan servis untuk kebutuhan rumah tangga Anda.
      </p>

      <div className="mt-[30px]"></div>
      {/* <h5 className="font-bold text-black mt-[30px]">Layanan yang kami tawarkan</h5>
      {services.length > 0 && <ListItem items={services} />} */}

      <h5 className="font-bold text-black">Kami juga menyediakan jasa tambahan seperti:</h5>
      {otherService.length > 0 && <ListItem items={otherService} />}

      <h5 className="font-bold text-black">Kenapa Memilih Kami:</h5>
      {whyChoseus.length > 0 && <ListItem items={whyChoseus} />}

      <br />
      <p className="text-[#444444]">Hubungi saya terlebih dahulu sebelum memesan. Saya ingin mendengar kebutuhan Anda dan memberikan solusi yang tepat!</p>
    </div>
  );
};

export default About;
