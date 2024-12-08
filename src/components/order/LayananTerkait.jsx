import React from "react";
import { Star, StarHalf } from "lucide-react"; // Import lucide-react icons

function LayananTerkait({ image }) {
  return (
    <div className="max-w-[261px] w-full sm:max-w-[261px] sm:w-80%">
      <img
        className="h-[181.09px] rounded-[18px]"
        src={image}
        alt="Layanan Terkait"
      />
      <p className="text-black text-base font-medium font-['Libre Franklin'] leading-normal mt-[20px]">
        Saya bisa benerin saluran laptop
      </p>
      <p className="text-[#0682b3] text-base font-medium font-['Libre Franklin'] leading-normal mt-2">
        Rp 280.000
      </p>
      {/* Menambahkan 5 bintang dengan 1 bintang setengah */}
      <div className="flex gap-1 mt-2">
        <Star color="#fecb4b" fill="#fecb4b" />
        <Star color="#fecb4b" fill="#fecb4b" />
        <Star color="#fecb4b" fill="#fecb4b" />
        <Star color="#fecb4b" fill="#fecb4b" />
        <StarHalf color="#fecb4b" fill="#fecb4b" />
        <p className="opacity-50 text-black text-sm font-semibold font-['Libre Franklin'] leading-tight">
          (65)
        </p>
      </div>
      <div className="flex mt-[21px] gap-2 items-center">
        <img
          className="w-[35.83px] h-[35.83px] rounded-full"
          src="https://s3-alpha-sig.figma.com/img/dd28/a692/db6f857124c8fc03af2ce947ab707794?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeRB4JToDGuPEfCrqKhNPgcIOCvEXw8Nwz17j1l-12evYFOUvAOKJXjzBu7Qe2z0CDeNs8Hujl9zqceugYycmS0IWZyw9RzW4GZSCe9ZOlaELPxll3Mzd~Sqhzd9s8jyBm2CJZUF9bjyJ3dgeHjrI46I~z5IEpZqY6JDLzSH6suqqXP-GE5gtYBqfmCt85T3Q~UHBu39nVPnWKnpcjvHK8Zlv1XM2fwf3ufLuTPzZ1r5rVP~MlxaUQGHppEraOjF0AVExfXZNhLmeuqLBfGQ7siR864j-uIhpPKSHmmNA7Xll9FZe2NeOAhljo0PIfiAhyxYP1PQ2QP~WtObeHFaNg__"
          alt=""
        />
        <p className="text-black">Andrio Gelario</p>
      </div>
    </div>
  );
}

export default LayananTerkait;
