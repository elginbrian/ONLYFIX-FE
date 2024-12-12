import React from "react";

interface InputPaymentProps {
  prop: {
    label: string;
    mandatory?: boolean;
    type?: string;
    placeholder?: string;
    id: string;
  };
}

const InputPayment: React.FC<InputPaymentProps> = ({ prop }) => {
  return (
    <div className="mb-[38px]">
      <label htmlFor={prop.id} className="">
        <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">{prop.label}</span>
        {prop.mandatory && <span className="text-[#db4444] text-base font-medium font-['Libre Franklin'] leading-normal"> *</span>}
        <br />
        <input id={prop.id} type={prop.type ?? "text"} className="outline-2 outline-[#c8c8c8] border border-[#c8c8c8] w-full py-[6.5px] px-[26px] rounded-[50px] mt-[8px]" placeholder={prop.placeholder ?? ""} />
      </label>
    </div>
  );
};

export default InputPayment;
