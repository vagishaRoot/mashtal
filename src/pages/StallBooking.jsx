import React, { useEffect, useState } from "react";
import stall from "../assets/stall.png";
import money from "../assets/money.png";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import address from "../assets/address.png";
import gmail from "../assets/gmail.png";

const StallBooking = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  function handleOnChange(e) {
    const { target } = e;
    debugger;

    setFile(target.files[0]);

    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(target.files[0]);
  }

  const modalOpen = () => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenModal(true);
  };

  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex flex-col gap-y-[80px] py-[20px] items-center relative">
      {openModal ? (
        <div className="absolute top-0 w-full h-full bg-[#00000025] flex justify-center items-start pt-[100px]">
          <div className="p-[20px] bg-[#F9FBFF] flex flex-col w-[480px] items-center z-10 gap-y-[20px] rounded-[20px]">
            <div className="bg-white p-[40px] rounded-full">
              <img src={gmail} />
            </div>
            <div className="text-xl font-[500] w-[280px] text-center">
              Booking Request Send for Confirmation
            </div>
            <div className="text-[#4E4E4E] text-sm">We Will Reply Shorty</div>
            <button
              className="bg-white border-[#0E0E0E] border rounded-[5px] w-[156px] h-[38px] flex justify-center items-center"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center -z-[1]">
        <div className="text-xl text-[#818181] font-[700] tracking-widest">
          Book Your Stall
        </div>
        <div className="text-xl font-[500]">
          Mumbai 12 December to 15 December
        </div>
      </div>
      <div className="w-full  bg-video-live-streaming flex justify-center py-[30px] gap-y-[2px] gap-x-[20px] -z-[1]">
        <div className="bg-[#F1F1F1] rounded-[20px] flex flex-col items-start p-[30px] w-[300px]">
          <img src={stall} alt="" />
          <div className="flex flex-col items-start pt-[10px] gap-y-[1px]">
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
                <span className="text-[#DB6D8F]">Standard</span>
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
                <span className="text-[#DB6D8F]">10*15</span>
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
                <span className="text-[#DB6D8F]">51 to 100</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col items-start gap-y-[5px] p-[30px] rounded-[20px] w-[550px]">
          <div className="font-[700] text-lg">Please Read Document</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>
        </div>
        <div className="bg-[#F1F1F1] rounded-[20px] flex flex-col items-start p-[30px] w-[430px] relative">
          <div className="flex items-center gap-x-[20px] z-10">
            <img src={stall} alt="" className="h-full" />
            <div className="flex flex-col items-start pt-[10px]">
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
                  <span className="text-[#DB6D8F]">Standard</span>
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
                  <span className="text-[#DB6D8F]">10*15</span>
                </p>
              </div>
              <div className="flex gap-x-[7px] items-center">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3656 12.4146C11.8204 12.4146 12.9997 11.2353 12.9997 9.78049C12.9997 8.32569 11.8204 7.14634 10.3656 7.14634C8.91079 7.14634 7.73145 8.32569 7.73145 9.78049C7.73145 11.2353 8.91079 12.4146 10.3656 12.4146Z"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.78076 11.0203C9.93612 11.1593 10.1412 11.2439 10.3661 11.2439C10.8511 11.2439 11.2442 10.8508 11.2442 10.3659C11.2442 9.8809 10.8511 9.4878 10.3661 9.4878L11.2442 8.31707H9.78076"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.63415 12.4146C5.08894 12.4146 6.26829 11.2353 6.26829 9.78049C6.26829 8.32569 5.08894 7.14634 3.63415 7.14634C2.17935 7.14634 1 8.32569 1 9.78049C1 11.2353 2.17935 12.4146 3.63415 12.4146Z"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.90283 9.04878C2.90283 8.86152 2.97427 8.67426 3.11713 8.53138C3.40288 8.24563 3.8662 8.24563 4.15194 8.53138C4.43769 8.81713 4.43769 9.28043 4.15194 9.56618L3.03142 10.6867C2.94909 10.769 2.90283 10.8807 2.90283 10.9971V11.2439H4.36625"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.70744 5.09756V2.17073L6.12207 2.7561"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5609 6.26829C8.0157 6.26829 9.19505 5.08894 9.19505 3.63415C9.19505 2.17935 8.0157 1 6.5609 1C5.10611 1 3.92676 2.17935 3.92676 3.63415C3.92676 5.08894 5.10611 6.26829 6.5609 6.26829Z"
                    stroke="#7D87D7"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <span>Qty : </span>
                  <span className="text-[#DB6D8F]">1</span>
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
                  <span className="text-[#DB6D8F]">51 to 100</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end pt-[20px] gap-x-[20px] z-10">
            <div className="text-6xl font-[700] text-[#D8D8D8]">Rs</div>
            <div className="text-6xl text-[#DB6D8F] font-[700]">20,000</div>
          </div>
          <img src={money} className="absolute bottom-[10px] right-[10px]" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-[25px] w-full">
        <div className="text-2xl font-[900] uppercase tracking-wider">
          Book Stall
        </div>
        <div className="text-[#DB6D8F] uppercase text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="flex flex-col gap-y-[25px] w-1/2">
          <div className="flex gap-x-[20px]">
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Brand Name</div>
              <input
                type="text"
                placeholder="Brand"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Business Category</div>
              <input
                type="text"
                placeholder="Category"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
          </div>
          <div className="flex gap-x-[20px]">
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Business Since</div>
              <input
                type="text"
                placeholder="How many years"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Book Stall Quantity</div>
              <input
                placeholder="Quantity"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
          </div>
          <div className="flex gap-x-[20px]">
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Email ID</div>
              <input
                placeholder="Email"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
            <div className="flex flex-col gap-y-[2px] items-start w-full">
              <div className="text-lg">Contact Number</div>
              <input
                placeholder="Mobile Number"
                className="h-[50px] px-[15px] border border-[#565972] rounded-[10px] w-full"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col gap-y-[10px] items-start w-full">
              <div className="text-lg">Upload Your Product</div>
              <div className="w-full bg-[#F9FBFF] h-[140px] rounded-[20px] flex flex-col items-center gap-y-[10px]">
                <div {...getRootProps()} className="w-full">
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <div className="text-lg text-center">
                      Drop the files here ...
                    </div>
                  ) : (
                    <div className="text-lg text-center">Drop files here</div>
                  )}
                </div>
                <div className="text-lg">or</div>
                <div className="relative">
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleOnChange}
                    className="absolute top-0 left-0 -z-[1]"
                  />
                  <button className="bg-[#DB6D8F] text-white rounded-[5px] w-[250px] z-10">
                    Browse
                  </button>
                </div>
              </div>
              {/* {preview && (
                <p>
                  <img src={preview} alt="Upload preview" />
                </p>
              )} */}
            </div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <input type="checkbox" className="h-[25px] w-[25px]" />
            <label>Terms and conditions are applied</label>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#127515] text-white w-[200px] h-[40px] rounded-[5px] flex justify-center items-center"
              onClick={modalOpen}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FBFF] py-[100px] w-full flex justify-center">
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

export default StallBooking;
