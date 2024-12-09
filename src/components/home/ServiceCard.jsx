import React from "react";

function ServiceCard({ icon, text }) {
  return (
    <div>
      <img className="mb-4" src={icon} alt="" />
      <p className="font-libre max-w-[300.96px] text-[23px]">{text}</p>
    </div>
  );
}

export default ServiceCard;
