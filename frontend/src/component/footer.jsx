import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <div
      id="contact"
      className='bg-black w-full px-5 sm:px-8 py-[60px] flex flex-col justify-center items-center gap-6'
    >

      <h1
        data-aos="zoom-in"
        className='text-white text-[22px] sm:text-[28px] font-semibold text-center'
      >
        Get in touch with me
      </h1>

      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className='text-gray-300 text-[15px] sm:text-[17px] text-center leading-8'
      >
        Ghugharitand, Gaya <br />
        ayushsinha4343@gmail.com <br />
        +91 7352186124
      </p>

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className='flex justify-center items-center gap-3 mt-4 flex-wrap'
      >

        <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
          <FaFacebook className='text-white text-xl' />
        </div>

        <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
          <FaInstagram className='text-white text-xl' />
        </div>

        <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
          <FaWhatsapp className='text-white text-xl' />
        </div>

        <div className='bg-gray-800 hover:bg-red-500 rounded-full p-3 cursor-pointer'>
          <FaLinkedin className='text-white text-xl' />
        </div>
      </div>

      <p className='text-gray-400 text-sm text-center'>
        Copyright 2025, InFrame, All Rights Reserved
      </p>

      <div className='bg-red-500 text-white p-3 rounded-full hover:bg-black hover:text-red-500 cursor-pointer fixed bottom-5 right-5 z-50'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowAltCircleUp className='text-2xl' />
        </Link>
      </div>
    </div>
  )
}

export default Footer