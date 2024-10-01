import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import photo1 from "../assets/photo_1.png";
import photo2 from "../assets/photo_2.png";
import mumbai from "../assets/mumbai.png";
import Header from "../components/Header";
import store from "../assets/store.png"
import teamwork from "../assets/teamwork.png"

const Exhibition = () => {
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(() => {
    setNavigate("Exhibition");
  }, []);
  return (
    <>
      <div className="flex w-full flex-col items-center gap-y-3 relative">
        <Header />
        <div className="flex w-full justify-center">
          <div className="w-[80%] flex items-center justify-center">
            <div className="flex flex-col gap-y-[15px] w-1/2">
              <div className="text-6xl font-black">Cultivating Success</div>
              <div className="text-xl w-3/4 text-poppins mt-[25px]">
                Mashtal is a platform or initiative focused on empowering and
                supporting women's entrepreneurial ventures, particularly by
                fostering growth and success in various industries.
              </div>
              <div className="text-7xl text-[#DB6D8F] font-black mt-5">
                Mashtal by Women,
              </div>
              <div className="text-7xl text-[#DB6D8F] font-black">
                for Women
              </div>
            </div>
            <div className="w-1/2">
              <div className="3/4">
                <img src={photo1} />
              </div>
              <img
                src={photo2}
                style={{ marginTop: "-194px", marginLeft: "260px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-2">
          <div className="flex w-[85%] gap-x-8 py-[70px] border-b border-gray-200">
            <div className="w-1/2 relative">
              <img src={mumbai} className="w-full" />
              <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                <div className="text-4xl font-bold text-white">Mumbai</div>
                <div className="text-3xl text-white text-poppins">
                  12 December 2024
                </div>
                <div className="py-[10px] px-[20px] bg-[#DB6D8F] text-white rounded-full text-lg mt-[10px] tracking-wide text-poppins">
                  Register Now
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className="text-3xl">Last Date: 5 December 2024</div>
              <div className="flex flex-col gap-y-[30px]">
                <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins">
                  mashtal@busaheba.org
                </div>
                <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins ">
                  Lokhandwala Com, Andheri West, Mumbai
                </div>
                <div className="w-full border border-black py-[15px] rounded-[14px] flex justify-center text-xl text-poppins">
                  (+91) 725-875-5874
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#00000033] flex items-center justify-center">
            <div className="p-[15px] bg-[#F9FBFF] rounded-[10px] flex justify-between w-[900px]">
                <div className="w-[450px] flex flex-col">
                    <div className="w-full flex">
                        <div className="w-full text-[#DB6D8F] text-outfit">Date</div>
                        <div className="w-full text-[#DB6D8F] text-outfit">City</div>
                    </div>
                    <div className="w-full flex mt-[10px]">
                        <div className="w-full text-xs text-outfit font-[700] text-[#565972]">2024</div>
                    </div>
                    <div className="w-full flex pt-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm flex gap-x-[10px] items-center">12 December 2024 <div className="h-[8px] w-[8px] bg-white border border-[#DB6D8F] rounded-full"></div></div>
                        <div className="w-full text-outfit text-sm">Mumbai, Pune</div>
                    </div>

                    <div className="w-full flex mt-[20px]">
                        <div className="w-full text-xs text-outfit font-[700] text-[#565972]">2023</div>
                    </div>
                    <div className="w-full flex pt-[2px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">01 November 2023</div>
                        <div className="w-full text-outfit text-sm">Jaipur</div>
                    </div>
                    <div className="w-full flex pt-[4px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">12 September 2023</div>
                        <div className="w-full text-outfit text-sm">Delhi</div>
                    </div>
                    <div className="w-full flex pt-[4px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">25 March 2023</div>
                        <div className="w-full text-outfit text-sm">Kochi, Surat, Delhi</div>
                    </div>

                    <div className="w-full flex mt-[20px]">
                        <div className="w-full text-xs text-outfit font-[700] text-[#565972]">2022</div>
                    </div>
                    <div className="w-full flex pt-[2px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">01 February 2022</div>
                        <div className="w-full text-outfit text-sm">Kochi</div>
                    </div>
                    <div className="w-full flex pt-[4px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">12 March 2022 </div>
                        <div className="w-full text-outfit text-sm">Nasik</div>
                    </div>
                    <div className="w-full flex pt-[4px] pb-[2px] border-b border-[#ECECEC]">
                        <div className="w-full text-outfit text-sm">25 March 2022</div>
                        <div className="w-full text-outfit text-sm">Kolkata</div>
                    </div>
                    <div className="w-full flex justify-center text-[#565972] mt-[20px] text-outfit text-sm">Click to More</div>
                </div>
                <div className="h-[343px] w-[1px] bg-[#F1F1F1]"></div>
                <div className="w-[350px] flex flex-col gap-y-[20px]">
                    <div className="w-full text-[#DB6D8F] text-outfit">Other</div>
                    <div className="flex items-center gap-x-[15px] w-full">
                        <img src={store} alt="" />
                        <div className="flex flex-col">
                            <div className="text-outfit text-sm text-[#DB6D8F]">685+</div>
                            <div className="text-outfit text-sm">Total Exhibition</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-[15px] w-full">
                        <img src={teamwork} alt="" />
                        <div className="flex flex-col">
                            <div className="text-outfit text-sm text-[#DB6D8F]">8400+</div>
                            <div className="text-outfit text-sm">Participate Members</div>
                        </div>
                    </div>
                    <div className="font-semibold text-outfit">New Update</div>
                    <div className="w-full h-full border border-black overflow-y-auto p-[10px]">
                        <div className="text-[#001077] pb-[2px] border-b border-[#E2E2E2] text-sm">
                            Lorem ipsum dolor sit amet
                            <span className="text-gradient font-[700] px-[4px]">New</span>
                        </div>
                        <div className="text-[#001077] pb-[2px] pt-[3px] border-b border-[#E2E2E2] text-sm">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            <span className="text-gradient font-[700] px-[4px]">New</span>
                        </div>
                        <div className="text-[#001077] pb-[2px] pt-[3px] border-b border-[#E2E2E2] text-sm">
                            Consectetur adipiscing elit, sed do 
                            <span className="text-gradient font-[700] px-[4px]">New</span>
                        </div>
                        <div className="text-[#001077] pb-[2px] pt-[3px] border-b border-[#E2E2E2] text-sm">
                            Elit consectetur adipiscing
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
