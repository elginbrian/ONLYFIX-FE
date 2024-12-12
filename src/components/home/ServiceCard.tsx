import React from "react";

interface ServiceCardProps {
  icon: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, text }) => {
  return (
    <div>
      <img className="mb-4" src={icon} alt="" />
      <p className="font-libre max-w-[300.96px] text-[23px]">{text}</p>
    </div>
  );
};

export default ServiceCard;
