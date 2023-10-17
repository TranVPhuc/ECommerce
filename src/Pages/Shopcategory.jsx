import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Asset/dropdown_icon.png";
import Item from "../Components/Item/Item";
import "./Css/Shopcategory.css";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner block my-[30px] mx-auto w-[82%]"
        src={props.banner}
        alt="banner"
      />
      <div className="shopcategory-indexSort flex my-[0px] mx-[170px] justify-between items-center ">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort px-[20px] py-[10px] rounded-[30px]  border border-solid border-[#888] ">
          Sort by
        </div>
      </div>
      <div className="shopcategory-product my-[20px] mx-[30px] grid">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div
        className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed]
      text-[#787878] text-[18px] font-medium"
      >
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
