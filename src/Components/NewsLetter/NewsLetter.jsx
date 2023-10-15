import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter gap-[30px] w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] py-0 mb-[150px]">
      <h1 className="text-[#454545] text-[40px] font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px] ">
        Subscribe to our newletter and stay updated{" "}
      </p>
      <div className="flex items justify-between bg-white w-[730px] h-[70px] border border-solid border-[#e3e3e3]">
        <input
          className="w-[500px] ml-[30px] border-none outline-none font-poppins text-[16px]"
          type="email"
          placeholder="Enter your email"
        />
        <button className="w-[210px] h-[70px]  bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
