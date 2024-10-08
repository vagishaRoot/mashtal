import React, { useEffect } from "react";
import mumbai from "../assets/mumbai.png";
import bookStalls from "../assets/bookStalls.jpg";
import stall_1 from "../assets/stall_1.png";
import stall_2 from "../assets/stall.png";
import stall_3 from "../assets/stall_3.png";
import stall_4 from "../assets/stall_4.png";
import { Link, useNavigate } from "react-router-dom";
import address from "../assets/address.png";

const BookStalls = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNavigate = () => {
    navigate("/stall_booking");
  };

  const bookStallsJson = [
    {
      key:1,
      category: "Basic",
      size: "8*8",
      number: "01 to 50",
      stall: stall_1
    },
    {
      key:2,
      category: "Standard",
      size: "10*15",
      number: "51 to 100",
      stall: stall_2
    },
    {
      key:3,
      category: "Pro",
      size: "15*15",
      number: "101 to 150",
      stall: stall_3
    },
    {
      key:4,
      category: "Elite",
      size: "20*20",
      number: "151 to 180",
      stall: stall_4
    },
  ]
  return (
    <div className="flex flex-col w-full items-center gap-y-[50px]">
      <div className="flex w-[85%] max-1440:w-[95%] gap-8 py-[70px] max-991:flex-col max-991:items-center">
        <div className="w-1/2 relative max-991:w-[80%] max-680:w-full">
          <img src={mumbai} className="w-full object-cover h-full rounded-[10px] min-h-[250px]" />
          <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
            <div className="text-4xl font-bold text-white">Mumbai</div>
            <div className="text-xl text-white text-poppins">
              12 December 2024
            </div>
            <div className="py-[10px] px-[20px] bg-[#DB6D8F] text-white rounded-full mt-[10px] tracking-wide text-poppins">
              Register Now
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between max-991:w-[80%] max-680:w-full max-680:items-center">
          <div className="text-3xl">Last Date: 5 December 2024</div>
          <div className="flex flex-col gap-y-[30px] max-680:w-full">
            <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins max-680:px-[10px]">
              mashtal@busaheba.org
            </div>
            <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins max-680:px-[10px]">
              Lokhandwala Com, Andheri West, Mumbai
            </div>
            <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins max-680:px-[10px]">
              (+91) 725-875-5874
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] max-1800:w-[95%] flex flex-col gap-y-[15px] items-start">
        <div className="text-[#DB6D8F] text-lg font-italic">
          Grow your business
        </div>
        <div className="text-3xl font-[800] uppercase text-outfit">
          Book your stall
        </div>
        <div className="grid grid-cols-4 1562-1330:grid-cols-3 1330-1024:grid-cols-3 1024-650:grid-cols-2 max-650:grid-cols-1 gap-[20px] 768-650:gap-x-[5px] w-full">
          {bookStallsJson.map((v,i)=>
            <Link key={i} className="w-full flex relative rounded-[20px]" to="/stall_booking">
              <div className="w-3/4 bg-[#F1F1F1] p-[20px] flex flex-col items-start gap-y-[20px] rounded-l-[20px] absolute left-0 h-full">
                <img src={v.stall} alt="" className="650-426:w-[50%]" />
                <div className="gap-y-[2px] flex flex-col items-start w-full">
                  <div className="flex gap-x-[7px] items-center">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.34701 0.142187C7.76089 -0.0464851 8.23867 -0.0464851 8.65256 0.142187L14.7248 2.90391C14.9609 3.01055 15.1109 3.24297 15.1109 3.5C15.1109 3.75703 14.9609 3.98945 14.7248 4.09609L8.65256 6.85781C8.23867 7.04648 7.76089 7.04648 7.34701 6.85781L1.27478 4.09609C1.03867 3.98672 0.888672 3.7543 0.888672 3.5C0.888672 3.2457 1.03867 3.01055 1.27478 2.90391L7.34701 0.142187ZM13.247 5.73125L14.7248 6.40391C14.9609 6.51055 15.1109 6.74297 15.1109 7C15.1109 7.25703 14.9609 7.48945 14.7248 7.59609L8.65256 10.3578C8.23867 10.5465 7.76089 10.5465 7.34701 10.3578L1.27478 7.59609C1.03867 7.48672 0.888672 7.2543 0.888672 7C0.888672 6.7457 1.03867 6.51055 1.27478 6.40391L2.75256 5.73125L6.97478 7.65078C7.62478 7.94609 8.37478 7.94609 9.02478 7.65078L13.247 5.73125ZM9.02478 11.1508L13.247 9.23125L14.7248 9.90391C14.9609 10.0105 15.1109 10.243 15.1109 10.5C15.1109 10.757 14.9609 10.9895 14.7248 11.0961L8.65256 13.8578C8.23867 14.0465 7.76089 14.0465 7.34701 13.8578L1.27478 11.0961C1.03867 10.9867 0.888672 10.7543 0.888672 10.5C0.888672 10.2457 1.03867 10.0105 1.27478 9.90391L2.75256 9.23125L6.97478 11.1508C7.62478 11.4461 8.37478 11.4461 9.02478 11.1508Z"
                        fill="#7D87D7"
                      />
                    </svg>
                    <p>
                      <span>Category : </span>
                      <span className="text-[#DB6D8F]">{v.category}</span>
                    </p>
                  </div>
                  <div className="flex gap-x-[7px] items-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85938 0.9375H1.64062C1.25098 0.9375 0.9375 1.25098 0.9375 1.64062V5.85938C0.9375 6.14355 1.10742 6.40137 1.37109 6.50977C1.63477 6.61816 1.93652 6.55957 2.13867 6.35742L3.31055 5.18555L5.625 7.5L3.31055 9.81445L2.13867 8.64258C1.93652 8.44043 1.63477 8.38184 1.37109 8.49023C1.10742 8.59863 0.9375 8.85645 0.9375 9.14062V13.3594C0.9375 13.749 1.25098 14.0625 1.64062 14.0625H5.85938C6.14355 14.0625 6.40137 13.8926 6.50977 13.6289C6.61816 13.3652 6.55957 13.0635 6.35742 12.8613L5.18555 11.6895L7.5 9.375L9.81445 11.6895L8.64258 12.8613C8.44043 13.0635 8.38184 13.3652 8.49023 13.6289C8.59863 13.8926 8.85645 14.0625 9.14062 14.0625H13.3594C13.749 14.0625 14.0625 13.749 14.0625 13.3594V9.14062C14.0625 8.85645 13.8926 8.59863 13.6289 8.49023C13.3652 8.38184 13.0635 8.44043 12.8613 8.64258L11.6895 9.81445L9.375 7.5L11.6895 5.18555L12.8613 6.35742C13.0635 6.55957 13.3652 6.61816 13.6289 6.50977C13.8926 6.40137 14.0625 6.14355 14.0625 5.85938V1.64062C14.0625 1.25098 13.749 0.9375 13.3594 0.9375H9.14062C8.85645 0.9375 8.59863 1.10742 8.49023 1.37109C8.38184 1.63477 8.44043 1.93652 8.64258 2.13867L9.81445 3.31055L7.5 5.625L5.18555 3.31055L6.35742 2.13867C6.55957 1.93652 6.61816 1.63477 6.50977 1.37109C6.40137 1.10742 6.14355 0.9375 5.85938 0.9375Z"
                        fill="#7D87D7"
                      />
                    </svg>
                    <p>
                      <span>Size : </span>
                      <span className="text-[#DB6D8F]">{v.size}</span>
                    </p>
                  </div>
                  <div className="flex gap-x-[7px] items-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.8625 5.625H14.1352C14.6109 5.625 14.9977 5.1416 14.9977 4.54688C14.9977 4.33301 14.9461 4.125 14.8523 3.94922L13.0828 0.626953C12.8742 0.234375 12.525 0 12.1477 0H2.85234C2.47734 0 2.12578 0.234375 1.91719 0.626953L0.145313 3.94629C0.0515625 4.125 0 4.33301 0 4.54395C0 5.1416 0.386719 5.625 0.8625 5.625ZM1.5 6.5625V11.25V13.5938C1.5 14.3701 2.00391 15 2.625 15H7.875C8.49609 15 9 14.3701 9 13.5938V11.25V6.5625H7.5V11.25H3V6.5625H1.5ZM12 6.5625V14.0625C12 14.5811 12.3352 15 12.75 15C13.1648 15 13.5 14.5811 13.5 14.0625V6.5625H12Z"
                        fill="#7D87D7"
                      />
                    </svg>
                    <p>
                      <span>Number : </span>
                      <span className="text-[#DB6D8F]">{v.number}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 absolute top-0 right-0 bg-gradient-to-l from-black z-10 h-full rounded-r-[20px] flex justify-center items-center">
                <div className="text-2xl font-[700] text-white rotate-90 text-nowrap tracking-wider">
                  BOOK NOW
                </div>
              </div>
              {/* <div className="w-1/4 absolute right-0">
              </div> */}
              <img src={bookStalls} alt="" className="h-full object-cover rounded-r-[20px] rounded-l-[25px]" />
            </Link>          
          )}
        </div>
      </div>
      <div className="bg-[#F9FBFF] py-[100px] w-full flex justify-center mt-[40px]">
        <div className="w-[80%] flex flex-col gap-y-[15px] items-center">
          <div className="text-xl uppercase font-[700] tracking-widest">
            ADDRESS
          </div>
          <div className="flex flex-col items-center gap-y-0">
            <div className="text-lg uppercase">
              19A, Sunshine Building, Opp: Domino's Pizza, 1st Cross Road,
            </div>
            <div className="text-lg uppercase">
              Lokhandwala, Market, Andheri West, Mumbai,
            </div>
            <div className="text-lg uppercase">Maharashtra 400053</div>
          </div>
          <div className="text-2xl font-[500] tracking-wide">
            Contact now: (+91) 87456-85410
          </div>
          <img src={address} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookStalls;
