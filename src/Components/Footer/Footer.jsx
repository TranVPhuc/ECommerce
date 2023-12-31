import React from "react";
import "./Footer.css";
import footer_logo from "../Asset/logo_big.png";
import instagram_icon from "../Asset/instagram_icon.png";
import pintester_icon from "../Asset/pintester_icon.png";
import whatsapp_icon from "../Asset/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-[50px]">
      <div className="footer-logo flex items-center gap-[20px] ">
        <img src={footer_logo} alt="footer-logo" />
        <p className="text-[#383838] text-[46px] font-bold">SHOPPER</p>
      </div>
      <ul className="footer-link flex list-none gap-[50px] text-[#252525] text-[20px]">
        <li className="cursor-pointer ">Company</li>
        <li className="cursor-pointer ">Products</li>
        <li className="cursor-pointer ">Offices</li>
        <li className="cursor-pointer ">About</li>
        <li className="cursor-pointer ">Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px]">
        <div className="footer-icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]">
          <img src={instagram_icon} alt="icon" />
        </div>

        <div className="footer-icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]">
          <img src={pintester_icon} alt="icon" />
        </div>

        <div className="footer-icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]">
          <img src={whatsapp_icon} alt="icon" />
        </div>
      </div>

      <div className="footer-copyright flex flex-col items-center gap-[20px] w-full mb-[30px] text-[1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
