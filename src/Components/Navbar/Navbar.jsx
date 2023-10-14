import React from "react";
import "./Navbar.css";
import logo from "../Asset/logo.png";
import cart_item from "../Asset/cart_icon.png";
const Navbar = () => {
  return (
    <div className="flex justify-around p-[16px] shadow-sm">
      <div className="nav-logo flex items-center gap-[10px]">
        <img src={logo} alt="logo" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <ul className="nav-menu flex items-center list-none gap-[50px] text-[#626262] text-[20px] font-medium">
        <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
          Shop
          <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]" />
        </li>
        <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
          Men
        </li>
        <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
          Women
        </li>
        <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
          Kid
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px]">
        <button
          className="w-[157px] h-[58px] outline-none border-solid 
        border-[#7a7a7a] border-[1px] rounded-[75px] text-[#515151] 
        font-medium bg-white cursor-pointer active:bg-[#f3f3f3]"
        >
          Login
        </button>
        <img src={cart_item} alt="cart" />
        <div className="nav-car-count w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[55px] rounded-[11px] font-[14px] bg-red-600 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
