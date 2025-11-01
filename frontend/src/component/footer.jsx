import React, { useEffect } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {Link} from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

function footer() {
  useEffect(()=>{
    AOS.init({
      duration:800,
      delay:200,
      once:false,
    })
  },[]);
  return (
    <div id="contact" className='bg-black w-full px-8 py-[80px]  flex flex-col justify-center
    items-center gap-6'>
      <h1 data-aos="zoom-in" className='captilize text-white text-[25px] font-semibold bg-black font-poppins'>Get in touch with me</h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-300 text-[16px] bg-black text-center font-poppins leading-8'>Ghugharitand,Gaya<br></br>
      ayushsinha4343@gmail.com <br></br>+91 7352186124</p>
     <div data-aos="zoom-in" data-aos-delay="400" id='social-media' className='w-full flex  bg-black justify-center items-center gap-3 mt-6'>
      <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
        <FaFacebook className='fill-white size-6'/>
      </div>
      <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
        <FaInstagram className='fill-white size-6'/>
      </div>
      <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
        <FaWhatsapp className='fill-white size-6'/>
      </div>
      <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
        <FaLinkedin className='fill-white size-6'/>
      </div>
     </div>
     <p className='text-gray-300 text-[15px] text-center font-poppins bg-black leading-8'>Copyright 2025,InFrame,All Right Reserved</p>
     <div id='icon-box' className='bg-red-500 text-white p-3 rounded-full hover:bg-black hover:text-red-500 cursor-pointer fixed bottom-7 right-7'>
      <Link to='hero' spy={true} offset={-100} smooth={true}>
      <FaArrowAltCircleUp className='size-7 rounded-full p-0'/></Link>
     </div>
    </div>
  )
}

export default footer
