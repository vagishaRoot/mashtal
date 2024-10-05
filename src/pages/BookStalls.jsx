import React from 'react';
import mumbai from "../assets/mumbai.png";
import bookStalls from "../assets/bookStalls.jpg"

const BookStalls = () => {
  return (
    <div className="flex flex-col w-full items-center gap-y-[20px]">
        <div className="flex w-[85%] gap-x-8 py-[70px]">
          <div className="w-1/2 relative">
              <img src={mumbai} className="w-full"/>
              <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                  <div className="text-4xl font-bold text-white">Mumbai</div>
                  <div className="text-xl text-white text-poppins">12 December 2024</div>
                  <div className="py-[10px] px-[20px] bg-[#DB6D8F] text-white rounded-full mt-[10px] tracking-wide text-poppins">Register Now</div>
              </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
              <div className="text-3xl">Last Date: 5 December 2024</div>
              <div className="flex flex-col gap-y-[30px]">
                  <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins">mashtal@busaheba.org</div>
                  <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins ">Lokhandwala Com, Andheri West, Mumbai</div>
                  <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins">(+91) 725-875-5874</div>
              </div>
          </div>
        </div>
        <div className="w-[85%] flex flex-col gap-y-[15px] items-start">
            <div className="text-[#DB6D8F] text-lg font-italic">Grow your business</div>
            <div className="text-3xl font-[800] uppercase text-outfit">Book your stall</div>
            <div className="grid grid-cols-4 gap-x-[20px]">
                <div className="w-full">
                    <div className="w-3/4 bg-[#F1F1F1]"></div>
                    <div className="w-1/4 relative">
                        <img src={bookStalls} alt="" className='object-cover' />
                    </div>
                    </div>
                <div className="w-full"></div>
                <div className="w-full"></div>
                <div className="w-full"></div>
            </div>
        </div>
    </div>
  )
}

export default BookStalls