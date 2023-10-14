import React from "react";
import exclusive_image from "../Asset/exclusive_image.png";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offers w-[80%] h-[60vh] flex m-auto mt-[150px] mb-[150px] py-0 px-[140px] ">
      <div className="offers-left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[80px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[80px] font-semibold">
          Offer For You
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>

      <div className="offers-right flex-1 flex items-center justify-end pt-[50px] ">
        <img src={exclusive_image} alt="image" />
      </div>
    </div>
  );
};

export default Offer;
