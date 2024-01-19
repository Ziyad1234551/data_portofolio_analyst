import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    <div data-aos="fade-bottom" className='my-[60px]'>
        <h1 className=' text-2xl lg:text-5xl text-center font-bold'>Get In Touch</h1>
        <div className='flex justify-center text-[50px] font-bold gap-10 my-10'>
            <Link to="https://www.linkedin.com/in/ziyad-sttnf-a561612ab/">

            <FaLinkedinIn className='text-blue-700'/>
            </Link>
            <Link to="https://github.com/Ziyad1234551/portofolio_data_analyst">

            <FaGithub className='text-slate-950'/>
            </Link>

        </div>

    </div>
    </>
  )
}
