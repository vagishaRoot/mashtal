import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import whiteMap from "../assets/white-map.png"
const Contact = () => {
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(()=>{
        let secondDiv = document.getElementById("topHeader")
        secondDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    },[])

  useEffect(() => {
    setNavigate("Contact");
  }, []);
  return(
    <>
      <div className="flex flex-col gap-y-[50px] items-center">
        <div className="bg-contact w-full">
          <div className="w-full bg-gradient-to-r from-black flex justify-center py-[100px]">
            <div className="text-3xl text-white font-[900]">Contact Us</div>
          </div>
        </div>
        <div className="w-[85%] grid grid-cols-2 gap-[30px] flex-wrap">
          <div className="w-full py-[15px] flex justify-center bg-[#F9FBFF] border-[#565972] border rounded-[10px]">
            <div className="text-outfit">mashtal@busaheba.org</div>
          </div>
          <div className="w-full py-[15px] flex justify-center bg-[#F9FBFF] border-[#565972] border rounded-[10px]">
            <div className="text-outfit">(+91) 725-875-5874</div>
          </div>
        </div>
        <div className="w-[85%] grid grid-cols-2 gap-[30px]">
          <img src={whiteMap} alt="" className="w-full h-full"/>
          <div className="flex flex-col gap-y-[35px] items-start">
            <div className="flex flex-col gap-y-[5px] items-start w-full">
              <div className="text-xl">Your Name</div>
              <input className="h-[55px] pl-[20px] border-[#565972] bg-white border rounded-[10px] w-full" type="text" placeholder="Name"/>
            </div>
            <div className="flex flex-col gap-y-[5px] items-start w-full">
              <div className="text-xl">Your Email</div>
              <input className="h-[55px] pl-[20px] border-[#565972] bg-white border rounded-[10px] w-full" type="email" placeholder="Email"/>
            </div>
            <div className="flex flex-col gap-y-[5px] items-start w-full">
              <div className="text-xl">Message</div>
              <textarea className="p-[20px] border-[#565972] bg-white border rounded-[10px] w-full" type="email" placeholder="Message" rows="8"></textarea>
            </div>
            <div className="flex justify-center w-full">
              <button className="h-[60px] w-[200px] flex justify-center items-center hover:border-[#DB6D8F] bg-white border-[#DB6D8F] border text-[#DB6D8F] rounded-[20px] text-sm uppercase font-[500] text-outfit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
