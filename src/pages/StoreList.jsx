import React from "react";
import rect1 from "../assets/rect1.png";
import rect2 from "../assets/rect2.png";
import rect3 from "../assets/rect3.jpg";
import rect4 from "../assets/rect4.jpg";
import Icons from "../components/Icons";

let JSON = [
    {
        key:1,
        Owner: "Al-Sheikh",
        Email: "alsheikh@gmail.com",
        Shop :"Indian Masala House",
        Category: "restaurant",
        image: rect1,
        Rating: 4
    },
    {
        key:2,
        Owner: "Al-Hashimi",
        Email: "alhashimi@gmail.com",
        Shop :"A.R Crafts",
        Category: "Other",
        image: rect1,
        Rating: 3
    },
    {
        key:3,
        Owner: "Arazi",
        Email: "arazi@gmail.com",
        Shop :"A&A Glam Bags",
        Category: "Cloth",
        image: rect2,
        Rating: 5
    },
    {
        key:4,
        Owner: "Assan",
        Email: "assan@gmail.com",
        Shop :"Amla Candy",
        Category: "Food",
        image: rect3,
        Rating: 4
    },
    {
        key:5,
        Owner: "Al-Sheikh",
        Email: "alsheikh@gmail.com",
        Shop :"Indian Masala House",
        Category: "restaurant",
        image: rect4,
        Rating: 4
    },
    {
        key:6,
        Owner: "Al-Hashimi",
        Email: "alhashimi@gmail.com",
        Shop :"A.R Crafts",
        Category: "Other",
        image: rect2,
        Rating: 3
    },
    {
        key:7,
        Owner: "Arazi",
        Email: "arazi@gmail.com",
        Shop :"A&A Glam Bags",
        Category: "Cloth",
        image: rect3,
        Rating: 5
    },
    {
        key:8,
        Owner: "Assan",
        Email: "assan@gmail.com",
        Shop :"Amla Candy",
        Category: "Food",
        image: rect4,
        Rating: 4
    },
    {
        key:9,
        Owner: "Al-Sheikh",
        Email: "alsheikh@gmail.com",
        Shop :"Indian Masala House",
        Category: "restaurant",
        image: rect1,
        Rating: 4
    },
    {
        key:10,
        Owner: "Al-Hashimi",
        Email: "alhashimi@gmail.com",
        Shop :"A.R Crafts",
        Category: "Other",
        image: rect2,
        Rating: 3
    },
    {
        key:11,
        Owner: "Arazi",
        Email: "arazi@gmail.com",
        Shop :"A&A Glam Bags",
        Category: "Cloth",
        image: rect3,
        Rating: 5
    },
    {
        key:12,
        Owner: "Assan",
        Email: "assan@gmail.com",
        Shop :"Amla Candy",
        Category: "Food",
        image: rect4,
        Rating: 4
    },
    {
        key:13,
        Owner: "Al-Sheikh",
        Email: "alsheikh@gmail.com",
        Shop :"Indian Masala House",
        Category: "restaurant",
        image: rect1,
        Rating: 4
    },
    {
        key:14,
        Owner: "Al-Hashimi",
        Email: "alhashimi@gmail.com",
        Shop :"A.R Crafts",
        Category: "Other",
        image: rect2,
        Rating: 3
    },
    {
        key:15,
        Owner: "Arazi",
        Email: "arazi@gmail.com",
        Shop :"A&A Glam Bags",
        Category: "Cloth",
        image: rect3,
        Rating: 5
    },
    {
        key:16,
        Owner: "Assan",
        Email: "assan@gmail.com",
        Shop :"Amla Candy",
        Category: "Food",
        image: rect4,
        Rating: 4
    },
    
]

const StoreList = () => {
  return (
    <div className="w-full flex flex-col py-[50px] gap-y-[50px] items-center">
      <div className="flex flex-col items-center gap-y-[1px]">
        <div className="text-xl text-[#818181] font-[700] tracking-widest">
          Day Streaming
        </div>
        <div className="text-xl font-[500]">
          Mumbai 12 December to 15 December
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] h-[135px] bg-video-live-streaming rounded-[10px] flex flex-col items-start justify-center px-[20px] gap-y-[2px] z-10">
          <div className="text-5xl font-[900] text-white text-outfit">
            Mumbai Highlight
          </div>
          <div className="text-xl text-white">12 December 2024</div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] w-[85%] p-[15px] rounded-[10px] flex gap-x-[20px] items-center">
        <input type="" className="h-[45px] border border-[#565972] rounded-[5px] outline-none px-[10px] w-[180px]" placeholder="Enter Name"/>
        <div className="w-[1px] h-[45px] bg-black"></div>
        <input type="" className="h-[45px] border border-[#565972] rounded-[5px] outline-none px-[10px] w-[180px]" placeholder="Enter Stall Number"/>
        <button className="bg-[#DB6D8F] text-white px-[30px] flex justify-center items-center h-full rounded-[5px]">Find</button>
      </div>
      <div className="w-[85%] grid grid-cols-4 gap-[40px]">
      {JSON && JSON.map((v,i)=>
        <div className="relative w-full" key={i}>
            <img src={v.image} className="h-full object-cover" />
            <div className="w-full h-full absolute bg-gradient-to-r from-[#000000ea] flex flex-col justify-between top-0 left-0 p-[20px]">
                <div className="text-4xl font-[900] text-outfit text-white">No: {v.key}</div>
                <div className="flex flex-col items-start">
                    <div className="text-white text-2xl text-outfit">{v.Owner}</div>
                    <div className="text-white text-outfit">{v.Email}</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-white text-2xl text-outfit">{v.Shop}</div>
                    <div className="text-white text-outfit">{v.Category}</div>
                </div>
                <div className="flex gap-x-[7px]">
                    <div className="flex gap-x-[1px]">

                        {Array(v.Rating).map((v,ind)=>
                            <Icons string="shine star" />
                        )}
                        
                        {Array(5-v.Rating).map((s,index)=><Icons string="white star" />)}
                    </div>
                    <div className="text-white">4/5</div>
                </div>
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default StoreList;
