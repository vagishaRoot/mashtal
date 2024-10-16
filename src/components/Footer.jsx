import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center pt-4 w-full gap-y-4">
        <img src={logo} alt="" />
        <div className="gap-x-[10px] flex items-center">
          <Link className="text-black max-425:text-xs" to="/">Home</Link>
          <div className="w-[1px] h-[16px] bg-gray-400"></div>
          <Link className="text-black max-425:text-xs" to="/about_us">About Us</Link>
          <div className="w-[1px] h-[16px] bg-gray-400"></div>
          <Link className="text-black max-425:text-xs">Live Streaming</Link>
          <div className="w-[1px] h-[16px] bg-gray-400"></div>
          <Link className="text-black max-425:text-xs">Contact</Link>
        </div>
        <div className="gap-x-[10px] flex items-center">
          <Link to="https://www.facebook.com" target="_blank"><img src={facebook} /></Link>
          <Link to="https://www.instagram.com" target="_blank"><img src={instagram} /></Link>
          <Link to="https://www.linkedin.com" target="_blank"><img src={linkedin} /></Link>
          <Link to="https://www.youtube.com" target="_blank"><img src={youtube} /></Link>
        </div>
        <div className="w-full bg-[#DB6D8F] flex justify-center py-[10px] mt-[40px]">
          <div className="w-[85%] flex justify-between max-1024:w-[95%] max-680:flex-col max-680:gap-y-[5px] items-center">
            <div className="text-white max-425:text-center">
              Copyright 2024 Website. All rights reserved.
            </div>
            <div className="flex gap-x-[5px]">
              <div className="text-white">Terms & Conditions</div>
              <div className="w-[1px] h-full bg-white"></div>
              <div className="text-white">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
