import React from "react";
import Header from "../components/Header";
import photo1 from "../assets/photo_1.png";
import photo2 from "../assets/photo_2.png";
import mumbai from "../assets/mumbai.png";
import map from "../assets/map.png";
import mumbai2 from "../assets/mumbai2.png"
import jaipur from "../assets/jaipur.png"
import photo3 from "../assets/photo3.png"
import photo4 from "../assets/photo4.png"
import photo5 from "../assets/photo5.png"
import photo6 from "../assets/photo6.png"
import Icons from "../components/Icons";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png";


const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-3">
      {/* <Header /> */}
      <div className="flex w-full justify-center">
        <div className="w-[80%] flex items-center justify-center">
            <div className="flex flex-col gap-y-[15px] w-1/2">
                <div className="text-6xl font-black">Cultivating Success</div>
                <div className="text-xl w-3/4 text-poppins mt-[25px]">Mashtal is a platform or initiative focused on empowering and supporting women's entrepreneurial ventures, particularly by fostering growth and success in various industries.</div>
                <div className="text-7xl text-[#DB6D8F] font-black mt-5">Mashtal by Women,</div>
                <div className="text-7xl text-[#DB6D8F] font-black">for Women</div>
            </div>
            <div className="w-1/2">
                <div className="3/4">
                    <img src={photo1} />
                </div>
                <img src={photo2} style={{"marginTop": "-194px","marginLeft": "260px"}}/>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-x-8 py-[70px] border-b border-gray-200">
            <div className="w-1/2 relative">
                <img src={mumbai} className="w-full"/>
                <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                    <div className="text-4xl font-bold text-white">Mumbai</div>
                    <div className="text-3xl text-white text-poppins">12 December 2024</div>
                    <div className="py-[10px] px-[20px] bg-[#DB6D8F] text-white rounded-full text-lg mt-[10px] tracking-wide text-poppins">Register Now</div>
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
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200">
            <div className="w-full flex flex-col gap-y-[15px] items-start">
                <div className="text-[#DB6D8F] text-xl font-italic">Event On The Week</div>
                <div className="w-[300px] text-2xl font-black uppercase">Find out ongoing exhibition this week</div>
            </div>
            <div className="w-full flex gap-x-[100px]">
                <div className="min-651:w-[600px] flex flex-col gap-y-[30px] border-r border-gray-300">
                    <div className="min-651:w-[600px] flex">
                        <div className="min-651:w-[400px] py-[20px] px-[25px] flex flex-col bg-[#DB6D8F] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Sunday</div>
                            <div className="text-white text-poppins">12 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] bg-[#DB6D8F] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full border-[#DB6D8F] p-[6px] bg-white mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#DB6D8F] rounded-full"></div>
                        </div>
                    </div>
                    <div className="min-651:w-[600px] flex items-center">
                        <div className="min-651:w-[400px] py-[20px] px-[25px] flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Monday</div>
                            <div className="text-poppins">13 December 2024</div>
                        </div>
                        {/* <div className="h-[1px] w-[70px] bg-[#DB6D8F]"></div> */}
                    </div>
                    <div className="min-651:w-[600px] flex items-center">
                        <div className="min-651:w-[400px] py-[20px] px-[25px] flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Tuesday</div>
                            <div className="text-poppins">14 December 2024</div>
                        </div>
                        {/* <div className="h-[1px] w-[70px] bg-[#DB6D8F]"></div> */}
                    </div>
                </div>
                <div className="flex flex-col gap-y-[30px]">
                    <div className="flex w-full gap-x-[60px]">
                        <button className="bg-[#DB6D8F] py-[10px] px-[45px] rounded-none text-white text-poppins">Event Intro...</button>
                        <div className="py-[5px] px-[15px] text-lg">09:00 AM - 10:00 PM</div>
                        <div className="py-[5px] px-[15px] text-lg">10:00 AM - 5:00 PM</div>
                    </div>
                    <div className="text-3xl font-black">A Start Was Born. Show Time!</div>
                    <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                    <div className="flex gap-x-[50px]">
                        <img src={map} />
                        <div className="flex flex-col items-start gap-y-[30px]">
                            <div className="text-xl">Lokhandwala Complex Rd, Mudran Press Colony, Andheri West, Mumbai, Maharashtra 400061, India</div>
                            <div className="text-xl">(+91) 725-875-5874</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200">
            <div className="w-full flex flex-col gap-y-[5px] items-start">
                <div className="text-[#DB6D8F] italic text-xl text-poppins">Our Exhibition</div>
                <div className="w-[300px] text-2xl font-black uppercase mt-[10px]">Celebrating Success</div>
                <div className="text-2xl font-black uppercase">A Look Back at Exhibition</div>
            </div>
            <div className="w-full flex gap-[50px] flex-wrap justify-between"> 
                <div className="relative">
                    <img src={mumbai2} />
                    <div className="absolute bottom-0 w-full flex justify-between p-[40px] items-end">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <img src={jaipur} />
                <img src={photo3} />
            </div>
            <div className="w-full flex gap-[50px] flex-wrap justify-between"> 
                <img src={photo4} />
                <img src={photo5} />
                <img src={photo6} />
            </div>
            <div className="w-full flex justify-center">
                <div className="text-[#7D87D7]">View More</div>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200">
            <div className="w-full flex flex-col gap-y-[5px] items-start">
                <div className="text-[#DB6D8F] italic text-xl text-poppins">Blog</div>
                <div className="text-2xl font-black uppercase mt-[10px]">Unveiling Innovation</div>
                <div className="text-2xl font-black uppercase">A Journey Through Art and Innovation</div>
            </div>
            <div className="flex gap-x-[100px]">
                <div className="p-[20px] bg-[#F1F1F1] flex flex-col rounded-[35px] gap-y-[10px]">
                    <img src={blog1} />
                    <div className="flex flex-col items-start gap-y-[15px]">
                        <div className="text-lg font-bold">At vero eos et accusamus et iusto odio</div>
                        <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                        <div className="flex gap-x-[5px] items-center">
                            <div className="text-[#547CC5]">Read More</div>
                            <Icons string="arrow" />
                        </div>
                        <div className="flex gap-x-[50px]">
                            <div className="flex gap-x-[5px] items-center">
                                <Icons string="calendar" />
                                <div className="">15 Feb 2024</div>
                            </div>
                            <div className="flex gap-x-[5px] items-center">
                                <Icons string="category" />
                                <div className="">Category</div>
                            </div>
                            <div className="flex gap-x-[5px] items-center">
                                <Icons string="profile" />
                                <div className="">Adam Smith</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="p-[25px] bg-[#F1F1F1] flex rounded-[35px] gap-x-[20px] items-center">
                        <img src={blog2} alt="" />
                        <div className="flex flex-col gap-y-[20px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="h-[1px] w-full bg-[#949AAF]"></div>
                            <div className="flex gap-x-[50px]">
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="calendar" />
                                    <div className="">15 Feb 2024</div>
                                </div>
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="category" />
                                    <div className="">Category</div>
                                </div>
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="profile" />
                                    <div className="">Adam Smith</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[25px] bg-[#F1F1F1] flex rounded-[35px] gap-x-[20px] items-center">
                        <img src={blog2} alt="" />
                        <div className="flex flex-col gap-y-[20px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="h-[1px] w-full bg-[#949AAF]"></div>
                            <div className="flex gap-x-[50px]">
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="calendar" />
                                    <div className="">15 Feb 2024</div>
                                </div>
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="category" />
                                    <div className="">Category</div>
                                </div>
                                <div className="flex gap-x-[5px] items-center">
                                    <Icons string="profile" />
                                    <div className="">Adam Smith</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>      
    </div>
    
  );
};

export default HomePage;
