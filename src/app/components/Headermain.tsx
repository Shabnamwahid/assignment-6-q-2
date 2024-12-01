import React from 'react';
import Image from 'next/image';

const Headermain = () => {
  return (
    <div className="  md:bg-[#F7F7F7] sm:bg-[#ffffff] md:w-[1228px] width-full ">
         <div className=" sm:mr-6 flex items-center mt-4 ">
          <Image
            className="ml-10"
            src="/images/logo.jpg"
            height={200}
            width={200}
            alt="logo"
          />
      
{/* Mobile Menu Icon */}
<div className="md:hidden ml-96">
          <button className="text-black text-3xl ">☰</button>
        </div>

      <div
        className="container items-center  mx-auto w-[1280px] h-[60px] px-16 
       flex justify-between mt-4 mb-4 bg-[#FFFFFF] ml-6">
         
        
      
       
        <div className="hidden md:flex items-center gap-10 mr-30 ml-30 mt-2 mb-2">
          <a href="link" className="text-black  underline  hover:text-[#10F2C5]">Home</a>
          <a href="#" className="text-black hover:text-[#10F2C5]">Courses</a>
          <a href="#" className="text-black hover:text-[#10F2C5]">Services</a>
          <a href="#" className="text-black hover:text-[#10F2C5]">Achievement</a>
          <a href="#" className="text-black hover:text-[#10F2C5]">About Us</a>
          <a href="#" className="text-black hover:text-[#10F2C5]">Testimonial</a>
        </div>

       
        <div className="sm:hidden md:flex items-center gap-3 ml-18 mr-4">
          <button className="bg-[#F7F7F7] text-black px-4 py-2 rounded border border-black hover:bg-gray-200">
            Sign Up
          </button>
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
            Log In
          </button>
        </div>

       
        </div>
      </div>
    </div>
  );
};

export default Headermain;
