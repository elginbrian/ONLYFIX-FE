import React from "react";
import InputPayment from "./InputPayment";

// Define the interface for each input field
interface InputField {
  label: string;
  placeholder: string;
  mandatory?: boolean;
  id: string; // id is now required
}

function FormOrder() {
  // Define the fields with the required id
  const fields: InputField[] = [
    { id: "fullName", label: "Nama Lengkap", placeholder: "Masukan Teks", mandatory: true },
    { id: "companyName", label: "Nama Perusahaan", placeholder: "Masukan Teks" },
    { id: "address", label: "Alamat", placeholder: "Masukan Teks", mandatory: true },
    { id: "city", label: "Kota", placeholder: "Masukan Teks", mandatory: true },
    { id: "postalCode", label: "Kode Pos", placeholder: "Masukan Teks", mandatory: true },
    { id: "phoneNumber", label: "Nomer Telepon", placeholder: "Masukan Teks", mandatory: true },
    { id: "email", label: "Alamat Email", placeholder: "Masukan Teks", mandatory: true },
  ];

  return (
    <div className="w-[553px]">
      {fields.map((field, index) => (
        <InputPayment key={index} prop={field} />
      ))}
      {/* Optionally, add a submit button */}
      <button className="mt-4 py-2 px-6 rounded-[50px] bg-blue-500 text-white">Submit</button>
    </div>
  );
}

export default FormOrder;
