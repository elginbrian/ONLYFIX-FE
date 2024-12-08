import React from "react";

function ListItem({ items }) {
  return (
    <ul className="list-disc ml-7 text-[#444444] mt-[10px] mb-[30px]">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListItem;
