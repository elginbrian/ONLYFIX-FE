import React from "react";
import InputPayment from "./InputPayment";

function FormOrder() {
  return (
    <div className="w-[553px]">
      <InputPayment
        prop={{
          label: "Nama Lengkap",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />
      <InputPayment
        prop={{ label: "Nama Perusahaan", placeholder: "Masukan Teks" }}
      />
      <InputPayment
        prop={{
          label: "Alamat",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />
      <InputPayment
        prop={{
          label: "Kota",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />

      <InputPayment
        prop={{
          label: "Kode Pos",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />

      <InputPayment
        prop={{
          label: "Nomer Telepon",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />
      <InputPayment
        prop={{
          label: "Alamat Email",
          placeholder: "Masukan Teks",
          mandatory: true,
        }}
      />

      
    </div>
  );
}

export default FormOrder;
