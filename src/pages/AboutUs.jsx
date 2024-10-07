import React, { useEffect } from 'react';
import mumbai from "../assets/mumbai.png";
import nurturing from "../assets/nurturing_ventures.png";
import empowering from "../assets/empowering_ethical_growth.png";
import about_us from "../assets/about_us.png"
import map from "../assets/map.png";
import Icons from '../components/Icons';
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.jpg";
import { useRecoilState } from 'recoil';
import { navigateState } from '../state/AppAtom';

const AboutUs = () => {
    const [navigate, setNavigate] = useRecoilState(navigateState);

    useEffect(()=>{
      setNavigate("About Us");
      let secondDiv = document.getElementById("topHeader")
      secondDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    },[])
  return (
    <div className="flex flex-col items-center w-full gap-y-[70px]">
      <div className="flex flex-col items-center w-full">
        <div className="text-[#818181] text-xl font-[700] tracking-widest">Empower Your Vision</div>
        <div className="text-xl font-[500] "> Nurture Your Venture for Lasting Success</div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-x-8 max-1330:gap-x-[20px] max-1440:w-[95%] py-[70px] border-b border-gray-200 max-991:flex-col">
            <div className="w-1/2 relative max-991:w-full">
                <img src={mumbai} className="w-full"/>
                <div className="absolute flex flex-col p-6 items-start gap-y-[5px] top-0">
                    <div className="text-4xl font-bold text-white">Mumbai</div>
                    <div className="text-3xl text-white text-poppins">12 December 2024</div>
                    <div className="py-[10px] px-[20px] bg-[#DB6D8F] text-white rounded-full text-lg mt-[10px] tracking-wide text-poppins">Register Now</div>
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
      <div className="w-full flex justify-center">
        <div className="w-[85%] flex items-center justify-between max-1440:w-[95%] max-991:flex-col max-991:gap-y-[25px]">
          <div className="">
            <img src={empowering} />
          </div>
          <div className="w-[42%] max-991:w-[90%] max-991:items-center  flex flex-col items-start">
            <div className="text-[#DB6D8F] text-xl font-italic">Fostering Mumenaat Success</div>
            <div className="text-2xl font-black uppercase">Empowering Mumenaat</div>
            <div className="mt-[30px] text-lg text-[#616161]">An initiative by Daerat-ul-Talebaat-ul- Mumenaat Mashtal in Arabic means nursery .Nursery with blooming plants The noble idea of uplifting women entrepreneurs was conceived with the raza and dua mubarak of Shz.Husainah baisaab(D.M). Who envisioned of providing a platform for business and exposure to all the blooming as well as established mumenaat entrepreneurs.</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[85%] flex justify-end">
          <Icons string="line" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] flex items-center justify-between max-1440:w-[95%] max-991:flex-col-reverse max-991:gap-y-[25px]">
          <div className="w-[42%] max-991:w-[90%] max-991:items-center  flex flex-col items-start">
            <div className="text-[#DB6D8F] text-xl font-italic">Empowering Mumenaat</div>
            <div className="text-2xl font-black uppercase">Nurturing Ventures</div>
            <div className="mt-[30px] text-lg text-[#616161]">The Expo was planned with this very intention as to provide an opportunity to develop small-scale/ household businesses of mumenaat where they use their ‘Hunar’ (skills) to support their families and a way to achieve excellence in their respective fields. With the goal of being a non-profitable project and the ultimate intention to use the finance profited for the development of such industries. Since its commencement in 2018, Mashtal has successfully extended financial support to many rising ventures.</div>
          </div>
          <div className="">
            <img src={nurturing} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[85%] flex justify-start">
          <Icons string="line" />
        </div>
      </div>
      <div className="w-full about-us-background h-[200px] flex  flex-col items-center justify-center">
        <div className="text-white">The global event is unique for any business women aiming expansion,</div>
        <div className='text-white'>create and strengthen their international image.</div>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="flex w-[85%] gap-y-8 flex-col py-[70px] border-b border-gray-200 max-1330:w-[95%]">
            <div className="w-full flex flex-col gap-y-[15px] items-start">
                <div className="text-[#DB6D8F] text-xl font-italic">Event On The Week</div>
                <div className="w-[300px] text-2xl font-black uppercase">Find out ongoing exhibition this week</div>
            </div>
            <div className="w-full flex gap-x-[100px] max-1440:gap-x-0 max-1440:justify-between max-991:flex-col">
                <div className="w-[500px] flex flex-col gap-y-[30px] border-r border-gray-300 max-1440:mr-[50px] max-991:flex-row max-991:border-r-0 max-991:items-start max-991:w-full max-991:border-b max-991:pb-[20px]">
                    <div className="min-991:w-[500px] max-991:w-full flex">
                        <div className="min-991:w-[300px] py-[20px] px-[25px] flex flex-col bg-[#DB6D8F] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Sunday</div>
                            <div className="text-white text-poppins">12 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] 1168-1024:w-[150px] max-991:hidden bg-[#DB6D8F] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full max-991:hidden border-[#DB6D8F] p-[6px] bg-white mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#DB6D8F] rounded-full"></div>
                        </div>
                    </div>
                    <div className="min-991:w-[500px] max-991:w-full flex">
                        <div className="min-991:w-[300px] py-[20px] px-[25px] flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
                            <div className="text-white font-bold text-2xl">Monday</div>
                            <div className="text-poppins">13 December 2024</div>
                        </div>
                        <div className="h-[1px] min-651:w-[190px] 1168-1024:w-[150px] max-991:hidden bg-[#db6d9000] mt-[30px]"></div>
                        <div className="h-[30px] w-[30px] border-2 rounded-full max-991:hidden border-[#db6d9000] p-[6px]  mt-[15px]" style={{marginRight:'-15px'}}>
                            <div className="w-full h-full bg-[#db6d9000] rounded-full"></div>
                        </div>
                        {/* <div className="h-[1px] w-[70px] bg-[#DB6D8F]"></div> */}
                    </div>
                    <div className="min-991:w-[500px] max-991:w-full flex">
                        <div className="min-991:w-[300px] py-[20px] px-[25px] flex flex-col bg-[#80818080] gap-y-[7px] rounded-3xl">
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
                <div className="text-[#DB6D8F] italic text-xl text-poppins">Blog</div>
                <div className="text-2xl font-black uppercase mt-[10px]">Unveiling Innovation</div>
                <div className="text-2xl font-black uppercase">A Journey Through Art and Innovation</div>
            </div>
            <div className="flex w-full justify-between">
                <div className="p-[20px] bg-[#F1F1F1] flex flex-col rounded-[35px] gap-y-[10px] w-[49%]">
                    <img src={blog2} className="object-cover rounded-[20px]"/>
                    <div className="flex flex-col items-start gap-y-[15px]">
                        <div className="text-lg font-bold">At vero eos et accusamus et iusto odio</div>
                        <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                        <div className="flex gap-x-[5px] items-center">
                            <div className="text-[#547CC5]">Read More</div>
                            <Icons string="arrow" />
                        </div>
                        <div className="w-full grid grid-cols-3 gap-x-[10px]">
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
                <div className="flex flex-col gap-y-[20px] max-1330:gap-y-[20px] w-[49%]">
                    <div className="p-[25px] bg-[#F1F1F1] flex rounded-[35px] gap-x-[20px] items-start max-1330:flex-col">
                        <img src={blog2} className="object-cover rounded-[20px] w-[40%]" />
                        <div className="flex flex-col gap-y-[20px]">
                            <div className="text-lg font-bold">At vero eos et accusamus et</div>
                            <div className="text-lg capitalize">At vero eos et accusamus et iusto odio dignissimos ducimus  blanditiis deleniti atque corrupti...</div>
                            <div className="h-[1px] w-full bg-[#949AAF]"></div>
                            <div className="w-full grid grid-cols-3 gap-x-[10px]">
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
                            <div className="w-full grid grid-cols-3 gap-x-[10px]">
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
  )
}

export default AboutUs