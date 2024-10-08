import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import { Link } from "react-router-dom";

const Registration = () => {
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(() => {
    setNavigate("Register");
  }, []);

  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="register_bg flex justify-end items-center px-[150px] h-[91.6vh]">
      <div className="w-[620px] flex flex-col gap-y-[20px] p-[20px] bg-[#F9FBFF] rounded-[20px]">
        <h6 className="text-gray-600 text-center font-[700]">
          Vender Registration
        </h6>
        <div className="flex flex-col items-start gap-y-[5px]">
          <p className="text-sm">Vender Name</p>
          <input
            className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
            placeholder="Name"
          />
        </div>
        <div className="flex gap-x-[20px] items-center">
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">Contact Number</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="Mobile Number"
            />
          </div>
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">Email ID</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex gap-x-[20px] items-center">
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">Business Category</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="Business Category"
            />
          </div>
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">State Name</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex gap-x-[20px] items-center">
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">City Name</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col items-start gap-y-[5px] w-full">
            <p className="text-sm">Zip Code</p>
            <input
              className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
              placeholder="Zip Code"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-[5px] w-full">
          <p className="text-sm">ITS Number</p>
          <input type="tel"
            className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
            placeholder="ITS Number"
          />
        </div>
        <div className="flex flex-col items-start gap-y-[5px] w-full">
          <p className="text-sm">Password</p>
          <input type="password"
            className="h-[50px] border-[0.5px] border-[#565972] p-[20px] w-full rounded-[7px] outline-0"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="border border-[#DB6D8F] rounded-[20px] w-[200px] font-[700] h-[50px] flex items-center justify-center text-[#DB6D8F] text-sm uppercase">
            Submit
          </div>
        </div>
        <div className="mt-[10px] w-full flex justify-center">
          <div className="flex gap-x-[3px]">
            <div className="text-sm text-[#565972]">Already registered</div>
            <div className="text-sm text-[#565972]">-</div>
            <Link className="text-sm text-[#565972] hover:text-[#565972]" to="/login">Login Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
