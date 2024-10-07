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

const options = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
];

const VideoLiveStreaming = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [navigate, setNavigate] = useRecoilState(navigateState);
  const handleChange = () => {};
  useEffect(() => {
    setNavigate("Live Streaming");
  }, []);
  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-[30px] py-[20px] items-center">
        <div className="flex flex-col items-center">
          <div className="text-xl text-[#818181] font-[700] tracking-widest">
            Day Streaming
          </div>
          <div className="text-xl font-[500]">
            Mumbai 12 December to 15 December
          </div>
        </div>
        <div className="w-[85%] h-[135px] bg-video-live-streaming rounded-[10px] flex flex-col items-start justify-center px-[20px] gap-y-[2px] z-10">
          <div className="text-5xl font-[900] text-white text-outfit">
            Mumbai Highlight
          </div>
          <div className="text-xl text-white">12 December 2024</div>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="absolute z-0 bottom-[25px] right-[40px]">
            <Icons string="video" />
          </div>
          <div className="bg-[#F8F8F8] w-[85%] py-[20px] px-[30px] flex justify-between rounded-[10px] z-10">
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
        <div className="w-[85%] flex flex-col gap-y-[36px] border-b border-[#ECECEC] py-[40px] relative">
          <div className="absolute top-[43%] -left-[32px] z-0">
            <Icons string="photo-film-svg" />
          </div>
          <div className="flex gap-x-[10px] items-center z-10">
            <div className="text-xl">Video</div>
            <div className="h-[2px] w-[100px] bg-[#DB6D8F]"></div>
          </div>
          <div className="grid grid-cols-3 gap-[30px] z-10">
            <div className="relative">
              <img src={jaipur2} alt="" className="w-full" />
              <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                <div className="text-4xl font-[900] text-white text-outfit">
                  Day 1
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
                  Day 2
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
                  Day 3
                </div>
                <div className="text-2xl text-white text-poppins text-outfit">
                  25 March 2023
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={kolkata} alt="" className="w-full" />
              <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                <div className="text-4xl font-[900] text-white text-outfit">
                  Day 4
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
                  Day 5
                </div>
                <div className="text-2xl text-white text-poppins text-outfit">
                  12 October 2022
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="text-[#7D87D7]">View More</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoLiveStreaming;
