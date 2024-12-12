import React from "react";

interface ListItemProps {
  items: string[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <ul className="list-disc ml-7 text-[#444444] mt-[10px] mb-[30px]">
      {items.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListItem;
