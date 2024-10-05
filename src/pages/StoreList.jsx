import React, { useState } from "react";
import rect1 from "../assets/rect1.png";
import rect2 from "../assets/rect2.png";
import rect3 from "../assets/rect3.jpg";
import rect4 from "../assets/rect4.jpg";
import Icons from "../components/Icons";
import StarRating from "../components/StarRating";

let JSON = [
  {
    key: 1,
    Owner: "Al-Sheikh",
    Email: "alsheikh@gmail.com",
    Shop: "Indian Masala House",
    Category: "restaurant",
    image: rect1,
    Rating: 4,
  },
  {
    key: 2,
    Owner: "Al-Hashimi",
    Email: "alhashimi@gmail.com",
    Shop: "A.R Crafts",
    Category: "Other",
    image: rect1,
    Rating: 3,
  },
  {
    key: 3,
    Owner: "Arazi",
    Email: "arazi@gmail.com",
    Shop: "A&A Glam Bags",
    Category: "Cloth",
    image: rect2,
    Rating: 5,
  },
  {
    key: 4,
    Owner: "Assan",
    Email: "assan@gmail.com",
    Shop: "Amla Candy",
    Category: "Food",
    image: rect3,
    Rating: 4,
  },
  {
    key: 5,
    Owner: "Al-Sheikh",
    Email: "alsheikh@gmail.com",
    Shop: "Indian Masala House",
    Category: "restaurant",
    image: rect4,
    Rating: 4,
  },
  {
    key: 6,
    Owner: "Al-Hashimi",
    Email: "alhashimi@gmail.com",
    Shop: "A.R Crafts",
    Category: "Other",
    image: rect2,
    Rating: 3,
  },
  {
    key: 7,
    Owner: "Arazi",
    Email: "arazi@gmail.com",
    Shop: "A&A Glam Bags",
    Category: "Cloth",
    image: rect3,
    Rating: 5,
  },
  {
    key: 8,
    Owner: "Assan",
    Email: "assan@gmail.com",
    Shop: "Amla Candy",
    Category: "Food",
    image: rect4,
    Rating: 4,
  },
  {
    key: 9,
    Owner: "Al-Sheikh",
    Email: "alsheikh@gmail.com",
    Shop: "Indian Masala House",
    Category: "restaurant",
    image: rect1,
    Rating: 4,
  },
  {
    key: 10,
    Owner: "Al-Hashimi",
    Email: "alhashimi@gmail.com",
    Shop: "A.R Crafts",
    Category: "Other",
    image: rect2,
    Rating: 3,
  },
  {
    key: 11,
    Owner: "Arazi",
    Email: "arazi@gmail.com",
    Shop: "A&A Glam Bags",
    Category: "Cloth",
    image: rect3,
    Rating: 5,
  },
  {
    key: 12,
    Owner: "Assan",
    Email: "assan@gmail.com",
    Shop: "Amla Candy",
    Category: "Food",
    image: rect4,
    Rating: 4,
  },
  {
    key: 13,
    Owner: "Al-Sheikh",
    Email: "alsheikh@gmail.com",
    Shop: "Indian Masala House",
    Category: "restaurant",
    image: rect1,
    Rating: 4,
  },
  {
    key: 14,
    Owner: "Al-Hashimi",
    Email: "alhashimi@gmail.com",
    Shop: "A.R Crafts",
    Category: "Other",
    image: rect2,
    Rating: 3,
  },
  {
    key: 15,
    Owner: "Arazi",
    Email: "arazi@gmail.com",
    Shop: "A&A Glam Bags",
    Category: "Cloth",
    image: rect3,
    Rating: 5,
  },
  {
    key: 16,
    Owner: "Assan",
    Email: "assan@gmail.com",
    Shop: "Amla Candy",
    Category: "Food",
    image: rect4,
    Rating: 4,
  },
];

const StoreList = () => {
  const [modalIndex, setModalIndex] = useState(null);

  console.log("modalIndex:- ", modalIndex);
  return (
    <div className="w-full flex flex-col py-[50px] gap-y-[50px] items-center relative">
      {modalIndex !== null ? (
        <div className="absolute top-0 w-full h-full left-0 bg-[#00000025] flex justify-center items-start z-10 pt-[20px]">
          <div className="bg-white w-[500px] flex flex-col items-start p-[20px] gap-y-[20px] rounded-[20px]">
            <div className="flex justify-between w-full">
                <div className="">Stall Details</div>
                <span onClick={()=>setModalIndex(null)}><Icons string="close" /></span>
            </div>
            <div className="flex flex-col gap-y-[5px]">
              <div className="w-full">
                <img src={JSON[modalIndex].image} className="w-full" />
              </div>
              <div className="grid grid-cols-3 gap-x-[10px]">
                <div className="w-full h-[70px] bg-[#ababab8c] rounded-md"></div>
                <div className="w-full h-[70px] bg-[#ababab8c] rounded-md"></div>
                <div className="w-full h-[70px] bg-[#ababab8c] rounded-md"></div>
              </div>
            </div>
            <div className="flex justify-between items-end w-full">
                <div className="flex flex-col gap-y-[5px]">
                    <div className="text-xl font-[700]">
                        {JSON[modalIndex].Shop}(Since:1998)
                    </div>
                    <div className="text-xl font-[700] text-[#565972]">
                        {JSON[modalIndex].Owner}
                    </div>
                    <div className="flex gap-x-[15px] mt-[20px]">
                        <Icons string="call" />
                        <div className="text-[#565972] text-sm">(+91) 98798-15874</div>
                    </div>
                    <div className="flex gap-x-[15px]">
                        <Icons string="email" />
                        <div className="text-[#565972] text-sm">{JSON[modalIndex].Email}</div>
                    </div>
                </div>
                <div className="text-7xl font-[900] text-outfit text-[#EAEAEA]">No: {JSON[modalIndex].key}</div>
            </div>
            <div className="flex justify-between w-full mt-[10px]">
                <div className="flex gap-x-[5px]">
                    <StarRating rating={JSON[modalIndex].Rating} color="black"/>
                    <div className="font-[700]">{JSON[modalIndex].Rating}/5</div>
                </div>
                <div className="text-[#565972] font-[900] text-outfit">{JSON[modalIndex].Category}</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center gap-y-[1px] -z-[1]">
        <div className="text-xl text-[#818181] font-[700] tracking-widest">
          Day Streaming
        </div>
        <div className="text-xl font-[500]">
          Mumbai 12 December to 15 December
        </div>
      </div>
      <div className="w-full flex justify-center -z-[1]">
        <div className="w-[85%] h-[135px] bg-video-live-streaming rounded-[10px] flex flex-col items-start justify-center px-[20px] gap-y-[2px] z-10">
          <div className="text-5xl font-[900] text-white text-outfit">
            Mumbai Highlight
          </div>
          <div className="text-xl text-white">12 December 2024</div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] w-[85%] p-[15px] rounded-[10px] flex gap-x-[20px] items-center -z-[1]">
        <input
          type=""
          className="h-[45px] border border-[#565972] rounded-[5px] outline-none px-[10px] w-[180px]"
          placeholder="Enter Name"
        />
        <div className="w-[1px] h-[45px] bg-black"></div>
        <input
          type=""
          className="h-[45px] border border-[#565972] rounded-[5px] outline-none px-[10px] w-[180px]"
          placeholder="Enter Stall Number"
        />
        <button className="bg-[#DB6D8F] text-white px-[30px] flex justify-center items-center h-full rounded-[5px]">
          Find
        </button>
      </div>
      <div className="w-[85%] grid grid-cols-4 gap-[40px]">
        {JSON &&
          JSON.map((v, i) => (
            <div className="relative w-full" key={i} onClick={()=>setModalIndex(i)}>
              <img src={v.image} className="h-full object-cover" />
              <div className="w-full h-full absolute bg-gradient-to-r from-[#000000ea] flex flex-col justify-between top-0 left-0 p-[20px]">
                <div className="text-4xl font-[900] text-outfit text-white">
                  No: {v.key}
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-white text-2xl text-outfit">
                    {v.Owner}
                  </div>
                  <div className="text-white text-outfit">{v.Email}</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-white text-2xl text-outfit">
                    {v.Shop}
                  </div>
                  <div className="text-white text-outfit">{v.Category}</div>
                </div>
                <div className="flex gap-x-[7px]">
                  <div className="flex gap-x-[1px]">
                    <StarRating rating={v.Rating} />
                  </div>
                  <div className="text-white">{v.Rating}/5</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoreList;
