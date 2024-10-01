import React from 'react';
import logo from "../assets/logo.png";
import Icons from './Icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="w-full flex justify-center items-center pb-2">
            <div className="w-[85%] flex justify-between items-center">
                <div className="flex gap-x-[70px] items-center">
                    <img src={logo} className="h-[70px]" />
                    <div className="flex gap-x-2">
                        <Link to="/" className="py-2 px-3 text-poppins text-[#DB6D8F]">Home</Link>
                        <Link to="/about_us" className="py-2 px-3 text-gray-500 text-poppins">About Us</Link>
                        <Link className="py-2 px-3 text-gray-500 text-poppins">Exhibition</Link>
                        <Link to="/live_streaming" className="py-2 px-3 text-gray-500 text-poppins">Live Streaming</Link>
                        <Link className="py-2 px-3 text-gray-500 text-poppins">Contact</Link>
                    </div>
                </div>
                <div className="flex gap-x-[25px] items-center">
                    <Icons string="search" />
                    <button className='text-white px-[15px] py-[5px] bg-[#DB6D8F] text-poppins'>Registrar</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header