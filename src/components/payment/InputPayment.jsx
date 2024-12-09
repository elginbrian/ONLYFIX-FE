import React from "react";

function InputPayment({ prop }) {
  return (
    <div className="mb-[38px]">
      <label htmlFor="" className="">
        <div>
          <span className="text-black text-base font-medium font-['Libre Franklin'] leading-normal">
            {prop.label}
          </span>
          {prop.mandatory ? (
            <span className="text-[#db4444] text-base font-medium font-['Libre Franklin'] leading-normal">
              *
            </span>
          ) : (
            ""
          )}
          <br />
          <input
            type={prop.type ?? "text"}
            className="outline-2 outline-[#c8c8c8] border border-[#c8c8c8] w-full py-[6.5px] px-[26px] rounded-[50px] mt-[8px]"
            placeholder={prop.placeholder}
          />
        </div>
      </label>
    </div>
  );
}

export default InputPayment;
