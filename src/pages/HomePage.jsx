import React, { useEffect } from "react";
import Header from "../components/Header";
import photo1 from "../assets/photo_1.png";
import photo2 from "../assets/photo_2.png";
import mumbai from "../assets/mumbai.png";
import map from "../assets/map.png";
import mumbai2 from "../assets/mumbai2.jpg"
import jaipur from "../assets/jaipur.png"
import photo3 from "../assets/photo3.png"
import photo4 from "../assets/photo4.png"
import photo5 from "../assets/photo5.png"
import photo6 from "../assets/photo6.png"
import Icons from "../components/Icons";
import blog2 from "../assets/blog2.jpg";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [navigate, setNavigate] = useRecoilState(navigateState);

    useEffect(()=>{
        setNavigate("Home")
    },[]);
    useEffect(()=>{
        let secondDiv = document.getElementById("topHeader")
        secondDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    },[])
  return (
    <div className="flex w-full flex-col items-center gap-y-3">
      {/* <Header /> */}
      <div className="flex w-full justify-center">
        <div className="w-[80%] flex items-center justify-center max-1440:w-[95%]">
            <div className="flex flex-col gap-y-[15px] max-650:gap-y-[7px] w-1/2 max-991:w-full">
                <div className="text-6xl font-black max-991:text-3xl max-600:text-xl">Cultivating Success</div>
                <div className="text-xl w-3/4 text-poppins mt-[25px] max-991:text-base  max-600:text-sm">Mashtal is a platform or initiative focused on empowering and supporting women's entrepreneurial ventures, particularly by fostering growth and success in various industries.</div>
                <div className="text-7xl text-[#DB6D8F] font-black mt-5 max-991:text-3xl max-600:text-xl">Mashtal by Women,</div>
                <div className="text-7xl text-[#DB6D8F] font-black max-991:text-3xl max-600:text-xl">for Women</div>
            </div>
            <div className="w-1/2">
                <div className="3/4">
                    <img src={photo1} />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-x-8 max-1330:gap-x-[20px] max-1440:w-[95%] py-[70px] border-b border-gray-200 max-991:flex-col">
            <div className="w-1/2 relative max-991:w-full">
                <img src={mumbai} className="w-full"/>
                <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                    <div className="text-4xl font-bold text-white">Mumbai</div>
                    <div className="text-3xl text-white text-poppins">12 December 2024</div>
                    <Link className="py-[10px] px-[20px] bg-[#DB6D8F] text-white hover:text-white rounded-full text-lg mt-[10px] tracking-wide text-poppins" to="/book_stalls">Register Now</Link>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between max-991:w-full max-991:mt-[20px]">
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
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200 max-1330:w-[95%]">
            <div className="w-full flex flex-col gap-y-[15px] items-start">
                <div className="text-[#DB6D8F] text-xl font-italic">Event On The Week</div>
                <div className="w-[300px] text-2xl font-black uppercase">Find out ongoing exhibition this week</div>
            </div>
            <div className="w-full flex gap-x-[100px] max-1440:gap-x-0 max-1440:justify-between max-991:flex-col">
                <div className="w-[500px] gap-[15px] overflow-x-auto flex flex-col gap-y-[30px] border-r border-gray-300 max-1440:mr-[50px] max-991:flex-row max-991:border-r-0 max-991:items-start max-991:w-full max-991:border-b max-991:pb-[20px]">
                    <div className="min-991:w-[500px] max-991:w-[300px] flex">
                        <div className="min-991:w-[300px] py-[20px] min-992:px-[25px] max-991:items-center max-991:w-full max-991:justify-center flex flex-col bg-[#DB6D8F] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Sunday</div>
                            <div className="text-white text-poppins">12 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] 1168-1024:w-[150px] max-991:hidden bg-[#DB6D8F] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full max-991:hidden border-[#DB6D8F] p-[6px] bg-white mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#DB6D8F] rounded-full"></div>
                        </div>
                    </div>
                    <div className="min-991:w-[500px] max-991:w-[300px] flex">
                        <div className="min-991:w-[300px] py-[20px] min-992:px-[25px] max-991:items-center max-991:w-full max-991:justify-center flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Monday</div>
                            <div className="text-poppins">13 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] 1168-1024:w-[150px] max-991:hidden bg-[#db6d9000] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full max-991:hidden border-[#db6d9000] p-[6px]  mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#db6d9000] rounded-full"></div>
                        </div>
                        {/* <div className="h-[1px] w-[70px] bg-[#DB6D8F]"></div> */}
                    </div>
                    <div className="min-991:w-[500px] max-991:w-[300px] flex">
                        <div className="min-991:w-[300px] py-[20px] min-992:px-[25px] max-991:items-center max-991:w-full max-991:justify-center flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Tuesday</div>
                            <div className="text-poppins">14 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] 1168-1024:w-[150px] max-991:hidden bg-[#db6d9000] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full max-991:hidden border-[#db6d9000] p-[6px]  mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#db6d9000] rounded-full"></div>
                        </div>
                        {/* <div className="h-[1px] w-[70px] bg-[#DB6D8F]"></div> */}
                    </div>
                </div>
                <div className="flex flex-col gap-y-[30px]">
                    <div className="flex w-full gap-x-[60px] max-1440:w-full max-1440:gap-y-[20px] max-1440:items-start 1440-992:flex-col max-1440:justify-between">
                        <button className="bg-[#DB6D8F] py-[10px] px-[45px] rounded-none text-white text-poppins">Event Intro...</button>
                        <div className="py-[5px] px-[15px] max-1330:px-0 text-lg">09:00 AM - 10:00 PM</div>
                        <div className="py-[5px] px-[15px] max-1330:px-0 text-lg">10:00 AM - 5:00 PM</div>
                    </div>
                    <div className="text-3xl font-black">A Start Was Born. Show Time!</div>
                    <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                    <div className="flex gap-x-[50px] 1440-992:gap-x-0 max-1440:justify-between 1440-992:flex-col max-1330:gap-y-[10px]">
                        <img src={map} className="max-1440:w-[47%]"/>
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
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200 max-1330:w-[95%]">
            <div className="w-full flex flex-col gap-y-[5px] items-start">
                <div className="text-[#DB6D8F] italic text-xl text-poppins">Our Exhibition</div>
                <div className="w-[300px] text-2xl font-black uppercase mt-[10px]">Celebrating Success</div>
                <div className="text-2xl font-black uppercase">A Look Back at Exhibition</div>
            </div>
            <div className="w-full grid grid-cols-3 gap-[50px] max-768:grid-cols-2"> 
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={mumbai2} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={jaipur} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={photo3} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={photo4} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={photo5} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
                <div className="relative rounded-[40px] gallery-image h-[350px]">
                    <img src={photo6} className="w-full object-cover h-full rounded-[40px]"/>
                    <div className="play-button absolute bottom-0 w-full flex justify-between p-[40px] items-end bg-gradient-to-t from-black rounded-[40px]">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold text-white">Bangalore</div>
                            <div className="text-2xl text-poppins text-white">01 December 2023</div>
                        </div>
                        <Icons string="play" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="text-[#7D87D7]">View More</div>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200 max-1330:w-[95%]">
            <div className="w-full flex flex-col gap-y-[5px] items-start">
                <div className="text-[#DB6D8F] italic text-xl text-poppins">Blog</div>
                <div className="text-2xl font-black uppercase mt-[10px]">Unveiling Innovation</div>
                <div className="text-2xl font-black uppercase">A Journey Through Art and Innovation</div>
            </div>
            <div className="flex w-full justify-between">
                <div className="p-[20px] bg-[#F1F1F1] flex flex-col rounded-[35px] gap-y-[10px] w-[49%] max-991:hidden">
                    <img src={blog2} className="object-cover rounded-[20px]"/>
                    <div className="flex flex-col items-start gap-y-[15px]">
                        <div className="text-lg font-bold">At vero eos et accusamus et iusto odio</div>
                        <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                        <div className="flex gap-x-[5px] items-center">
                            <div className="text-[#547CC5]">Read More</div>
                            <Icons string="arrow" />
                        </div>
                        <div className="w-full flex max-991:flex-col gap-[10px]">
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
                <div className="flex flex-col gap-y-[20px] max-1330:gap-y-[20px] w-[49%] max-991:w-[90%] min-w-[320px]">
                    <div className="p-[20px] bg-[#F1F1F1] flex flex-col rounded-[35px] gap-y-[10px] min-992:hidden">
                        <img src={blog2} className="object-cover rounded-[20px]"/>
                        <div className="flex flex-col items-start gap-y-[15px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et iusto odio</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="flex gap-x-[5px] items-center">
                                <div className="text-[#547CC5]">Read More</div>
                                <Icons string="arrow" />
                            </div>
                            <div className="w-full flex max-991:flex-col gap-[10px]">
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
                    <div className="p-[25px] bg-[#F1F1F1] flex rounded-[35px] gap-x-[20px] items-start max-1330:flex-col">
                        <img src={blog2} className="object-cover rounded-[20px] w-[40%]" />
                        <div className="flex flex-col gap-y-[20px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="h-[1px] w-full bg-[#949AAF]"></div>
                            <div className="w-full flex max-991:flex-col gap-[10px]">
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
                    <div className="p-[25px] bg-[#F1F1F1] flex rounded-[35px] gap-x-[20px] items-start max-1330:flex-col">
                        <img src={blog2} className="object-cover rounded-[20px] w-[40%]" />
                        <div className="flex flex-col gap-y-[20px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="h-[1px] w-full bg-[#949AAF]"></div>
                            <div className="w-full flex max-991:flex-col gap-[10px]">
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
