import React from 'react';
import logo from "../assets/logo.png";
import Icons from './Icons';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navigateState } from '../state/AppAtom';

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
  return (
    <>
        <div className="w-full flex justify-center items-center pb-2">
            <div className="w-[85%] flex justify-between items-center">
                <div className="flex gap-x-[70px] items-center">
                    <img src={logo} className="h-[70px]" />
                    <div className="flex gap-x-2">
                        {navigateList.map((v,i)=>
                            <Link key={i} to={v.link} className={`py-2 px-3 text-poppins ${navigate === v.label ? 'text-[#DB6D8F]' : 'text-gray-500'}`}>{v.label}</Link>
                        )}
                    </div>
                </div>
                <div className="flex gap-x-[25px] items-center">
                    <Icons string="search" />
                    <Link className='text-white hover:text-white px-[15px] py-[5px] bg-[#DB6D8F] text-poppins rounded-[10px]' to="/register">Registrar</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header