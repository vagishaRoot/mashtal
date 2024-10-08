import React, { useEffect, useState } from "react";
import profile_photo from "../assets/profile_photo.png";
import { Link, useNavigate } from "react-router-dom";
import { loginState } from "../state/AppAtom";
import { useRecoilState } from "recoil";

const Login = () => {
    const navigate = useNavigate()
  const [input, setInput] = useRecoilState(loginState);

  const onInputChange = ({ name, value }) => {
    let obj = { ...input };
    obj[name] = value;
    setInput(obj);
  };

  useEffect(()=>{
    if(!!localStorage.getItem('login')){
        navigate('/profile')
    }
  },[])

  const login = () => {
    if(input.email && input.password) {
        localStorage.setItem('login', JSON.stringify(input))
    } else {
        alert('Fill all the Fields')
    }
  }

  return (
    <>
      <div className="w-full relative bg-login h-[91.6vh] flex justify-end">
        <div className="w-1/2 flex justify-center items-center bg-[#F9FBFF] flex-col gap-y-[100px]">
          <div className="text-xl text-[#565972] font-[700] tracking-wider">
            Vender Log in
          </div>
          <img src={profile_photo} alt="" />
          <div className="w-[300px] flex flex-col gap-y-[40px] items-center">
            <div className="w-full gap-y-[5px] items-start">
              <div className="text-xl">Email Address</div>
              <input
                className="h-[55px] w-full pl-[15px] border-[#565972] border rounded-[10px]"
                placeholder="Email Id"
                type="email"
                name="email"
                value={input.email || ""}
                onChange={(e) => onInputChange(e.target)}
              />
            </div>
            <div className="w-full gap-y-[5px] items-start">
              <div className="text-xl">Password</div>
              <input
                className="h-[55px] w-full pl-[15px] border-[#565972] border rounded-[10px]"
                placeholder="Password"
                type="password"
                name="password"
                value={input.password || ""}
                onChange={(e) => onInputChange(e.target)}
              />
            </div>
            <button className="w-[200px] h-[50px] flex justify-center items-center border-[#DB6D8F] hover:border-[#DB6D8F] focus:outline-0 text-[#DB6D8F] border rounded-[20px] bg-transparent font-[700] outline-0" onClick={login}>
              LOGIN
            </button>
            <Link
              className="text-[#565972] hover:text-[#565972]"
              to="/register"
            >
              Vender Registration
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
