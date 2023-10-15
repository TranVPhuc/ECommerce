import React from "react";
import new_collection from "../Asset/new_collections";
import Item from "../Item/Item";
import "./NewCollection.css";
const NewCollection = () => {
  return (
    <div className="new-collection flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold m-0">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="collection grid  mt-[50px] gap-[30px]">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
