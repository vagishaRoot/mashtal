import React, { useState } from 'react';
import logo from "../assets/logo.png";
import Icons from './Icons';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState, navigateState } from '../state/AppAtom';

const Header = () => {
    const [navigate, setNavigate] = useRecoilState(navigateState);
    const navigateList = [
        {
            key: 1,
            label: 'Home',
            link: '/'
        },
        {
            key: 2,
            label: 'About Us',
            link: '/about_us'
        },
        {
            key: 3,
            label: 'Exhibition',
            link: '/exhibition'
        },
        {
            key: 4,
            label: 'Live Streaming',
            link: '/live_streaming'
        },
        {
            key: 5,
            label: 'Contact',
            link: '/contact'
        }
    ]

    const [menuOpen, setMenuOpen] = useState(false);
    const [input, setInput] = useRecoilState(loginState);
    const navigation = useNavigate()

    const logout = () => {
        localStorage.removeItem('login')
        setInput({})
        navigation("/login")
    }
  return (
    <>
        <div className="w-full flex justify-center items-center pb-2" id="topHeader">
            <div className="w-[85%] flex justify-between items-center max-1440:w-[95%]">
                <div className="flex gap-x-[70px] items-center">
                <div className={`min-992:hidden menu-toggle relative pr-5 py-4 ${menuOpen? 'menu-open' : ''}`} onClick={()=>setMenuOpen(!menuOpen)}></div>
                    <img src={logo} className="h-[70px]" />
                    <div className={`flex gap-x-2 max-991:hidden`}>
                        {navigateList.map((v,i)=>
                            <Link key={i} to={v.link} className={`py-2 px-3 text-poppins ${navigate === v.label ? 'text-[#DB6D8F]' : 'text-gray-500'}`}>{v.label}</Link>
                        )}
                    </div>
                    <div className={`border border-black min-992:hidden menu-list w-[250px] bg-white shadow p-3 flex flex-col absolute max-425:top-[86px] max-991:top-[72px] z-[9999] ${menuOpen ? 'menu-open' : 'menu-close'}`}>
                        {navigateList.map((v,i)=>
                            <Link key={i} to={v.link} onClick={()=>setMenuOpen(!menuOpen)} className={`py-2 px-3 text-poppins ${navigate === v.label ? 'text-[#DB6D8F]' : 'text-gray-500'}`}>{v.label}</Link>
                        )}
                        <div className="mt-[15px] flex justify-between items-center min-551:hidden">
                            {Object.keys(input).length ? <button className="flex bg-transparent gap-x-[10px] items-center font-[700]"><Icons string={"user"} />User Name</button> : <></>}
                            {Object.keys(input).length ? <button className="flex bg-[#7D87D7] h-[43px] w-[74px] justify-center text-white" onClick={logout}>Logout</button> : <Link className='text-white hover:text-white px-[15px] h-[40px] flex justify-center items-center bg-[#DB6D8F] text-poppins rounded-[10px] text-sm' to="/login">Register & Login</Link>}
                            <Icons string="search" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-[25px] items-center max-550:hidden">
                    {Object.keys(input).length ? <button className="flex bg-transparent gap-x-[10px] items-center font-[700]"><Icons string={"user"} />User Name</button> : <></>}
                    <Icons string="search" />
                    {Object.keys(input).length ? <button className="flex bg-[#7D87D7] h-[43px] w-[74px] justify-center text-white" onClick={logout}>Logout</button> : <Link className='text-white hover:text-white px-[15px] h-[40px] flex justify-center items-center bg-[#DB6D8F] text-poppins rounded-[10px] text-sm' to="/login">Register & Login</Link>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Header