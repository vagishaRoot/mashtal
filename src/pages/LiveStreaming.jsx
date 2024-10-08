import React, { useEffect, useState } from "react";
import mumbai from "../assets/mumbai.png";
import pune from "../assets/pune.png";
import Select from "react-select";
import jaipur2 from "../assets/jaipur2.png";
import kochi from "../assets/kochi.png";
import delhi from "../assets/delhi.png";
import bengaluru from "../assets/bengaluru.png";
import kolkata from "../assets/kolkata.png";
import Icons from "../components/Icons";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import { Link } from "react-router-dom";

const options = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
];

const LiveStreaming = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(() => {
    setNavigate("Live Streaming");
  }, []);
  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const handleChange = () => {};
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center w-full">
        <div className="text-[#818181] text-xl font-[700] tracking-widest">
          Live Streaming
        </div>
        <div className="text-xl font-[500] ">
          Connect, Engage, and Broadcast Seamlessly to the World
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-x-8 py-[70px] border-b border-gray-200 relative">
          <div className="absolute z-0 bottom-[15px] -right-[70px]">
            <Icons string="video" />
          </div>
          <Link className="w-1/2 relative z-10" to="/video_live_streaming">
            <img src={mumbai} className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-bold text-white">Mumbai</div>
              <div className="text-3xl text-white text-poppins">
                12 December 2024
              </div>
              <div className="text-[#B8B8B8] font-[600]">
                9:30 AM to 5:30 PM
              </div>
              <div className="py-[10px] px-[15px] bg-[#FFFFFFE5] text-[#FF0000] items-center rounded-sm flex gap-x-[10px] text-lg mt-[10px] tracking-wide text-poppins">
                Live{" "}
                <div className="w-[15px] h-[15px] bg-white border-[#FF0000] border rounded-full flex justify-center items-center">
                  <div className="w-[9px] h-[9px] bg-[#FF0000] rounded-full"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="w-1/2 relative z-10" to="/video_live_streaming">
            <img src={pune} className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-bold text-white">Puna</div>
              <div className="text-3xl text-white text-poppins">
                12 December 2024
              </div>
              <div className="text-[#B8B8B8] font-[600]">
                9:30 AM to 5:30 PM
              </div>
              <div className="py-[10px] px-[15px] bg-[#FFFFFFE5] text-[#FF0000] items-center rounded-sm flex gap-x-[10px] text-lg mt-[10px] tracking-wide text-poppins">
                Live{" "}
                <div className="w-[15px] h-[15px] bg-white border-[#FF0000] border rounded-full flex justify-center items-center">
                  <div className="w-[9px] h-[9px] bg-[#FF0000] rounded-full"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[40px]">
          <div className="w-full flex flex-col gap-y-[5px] items-start">
            <div className="text-[#DB6D8F] text-xl font-italic">
              Past Exhibition
            </div>
            <div className="text-2xl font-[800] uppercase text-outfit">
              Video Streaming
            </div>
          </div>
          <div className="bg-[#F8F8F8] w-full py-[20px] px-[30px] flex justify-between rounded-[10px]">
            <div className="flex gap-x-[10px] items-center">
              <div className="text-[#565972]">Select Month: </div>
              <div className="pr-[10px]">
                <Select
                  className="w-[136px] border border-[#565972] rounded-md"
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  placeholder="Month"
                />
              </div>
              <div className="h-full w-[1px] bg-[#565972]"></div>
              <div className="text-[#565972]">Select Year: </div>
              <div className="pr-[10px]">
                <Select
                  className="w-[136px] border border-[#565972] rounded-md"
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-[25px]">
              <input
                type="text"
                placeholder="Enter City"
                className="w-[207px] h-full px-[5px] border border-[#565972] rounded-md"
              />
              <button className="text-white px-[15px] h-full py-[5px] bg-[#DB6D8F] text-poppins rounded-md">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex flex-col gap-y-[36px] border-b border-[#ECECEC] py-[40px] relative">
        <div className="absolute top-[31px] -left-[32px] z-0">
          <Icons string="photo-film-svg" />
        </div>
        <div className="flex gap-x-[10px] items-center z-10">
          <div className="text-xl">2023</div>
          <div className="h-[2px] w-[100px] bg-[#DB6D8F]"></div>
        </div>
        <div className="grid grid-cols-3 gap-x-[30px] z-10">
          <div className="relative">
            <img src={jaipur2} alt="" className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-[900] text-white text-outfit">
                Jaipur
              </div>
              <div className="text-2xl text-white text-poppins text-outfit">
                1 November 2023
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={delhi} alt="" className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-[900] text-white text-outfit">
                Delhi
              </div>
              <div className="text-2xl text-white text-poppins text-outfit">
                12 September 2023
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={kochi} alt="" className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-[900] text-white text-outfit">
                Kochi
              </div>
              <div className="text-2xl text-white text-poppins text-outfit">
                25 March 2023
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="text-[#7D87D7]">View More</div>
        </div>
      </div>
      <div className="w-[85%] flex flex-col gap-y-[36px] py-[40px] relative">
        <div className="absolute top-[31px] -left-[32px] z-0">
          <Icons string="photo-film-svg" />
        </div>
        <div className="flex gap-x-[10px] items-center z-10">
          <div className="text-xl">2022</div>
          <div className="h-[2px] w-[100px] bg-[#DB6D8F]"></div>
        </div>
        <div className="grid grid-cols-3 gap-x-[30px] z-10">
          <div className="relative">
            <img src={kolkata} alt="" className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-[900] text-white text-outfit">
                Kolkata
              </div>
              <div className="text-2xl text-white text-poppins text-outfit">
                19 December 2022
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={bengaluru} alt="" className="w-full" />
            <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
              <div className="text-4xl font-[900] text-white text-outfit">
                Bengaluru
              </div>
              <div className="text-2xl text-white text-poppins text-outfit">
                12 October 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreaming;
