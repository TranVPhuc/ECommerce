import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item w-[350px] ">
      <img src={props.image} alt="image" />
      <p className="mx-[0px] my-[6px]">{props.name}</p>
      <div className="item-prices flex gap-[20px] ">
        <div className="item-prices-new text-[#374151] text-[18px] font-semibold">
          ${props.new_price}
        </div>

        <div className="item-prices-old text-[#8c8c8c] text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
