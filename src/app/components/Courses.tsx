import React from 'react';
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


const Courses = () => {
  return (
    <div className="w-full min-h-screen bg-white px-[64px] py-[112px]">
      
      <div className=" sm:text-center text-center mb-[40px]">
        <h1 className="text-[44px] font-bold text-black font-roboto">Courses</h1>
        <p className="text-[18px] font-normal  text-black font-roboto">Your Ultimate Guide to Learning</p>
      </div>

     
      <div className="flex justify-center  text-center gap-[64px] mb-[40px]">
        <div className="text-[16px] font-normal text-black underline">Popular</div>
        <div className="text-[16px] font-normal text-black">Recommended</div>
        <div className="text-[16px] font-normal text-black">Best Price</div>
      </div>

      <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 sm:justify-items-center center gap-x-[24px] justify-between   gap-y-[24px] ">
  {/* Card 1 */}
  <div className=" w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-1.jpg"
      alt="Course 1"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Design</span>
        <div className="flex items-center gap-[4px]">
         
          <FaStar className="text-gray-300 text-3xl h-6 w-6" />


          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">UX/UI Design 201</h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className=" w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-5.jpg"
      alt="Course 2"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Programmimg</span>
        <div className="flex items-center gap-[4px]">
        <FaStar className="text-gray-300 text-3xl h-6 w-6" />
          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">Introduction to Python</h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="   w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-4.jpg"
      alt="Course 3"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Business</span>
        <div className="flex items-center gap-[4px]">
        <FaStar className="text-gray-300 text-3xl h-6 w-6" />
          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">
      Data Analysis for Beginners
      </h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
  </div>

  {/* Card 4 */}

  <div className="hidden sm:hidden md:block flex-row w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-3.jpg"
      alt="Course 4"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Art</span>
        <div className="flex items-center gap-[4px]">
        <FaStar className="text-gray-300 text-3xl h-6 w-6" />
          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">
      Art Specialization
      </h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
  </div>

  {/* Card 5 */}
  <div className=" hidden sm:hidden md:block w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-2.jpg"
      alt="Course 5"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Law</span>
        <div className="flex items-center gap-[4px]">
        <FaStar className="text-gray-300 text-3xl h-6 w-6" />
          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">Rule of Law</h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
  </div>

  {/* Card 6 */}
  <div className="hidden sm:hidden md:block  w-[350px] h-[500px] bg-[#F7F7F7] p-[16px] rounded-lg shadow-md overflow-hidden">
    <Image
      className="w-full h-[200px] object-cover rounded-t-md mb-[12px]"
      src="/images/img-6.jpg"
      alt="Course 5"
    />
    <div>
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-[14px] font-[400]">Tech</span>
        <div className="flex items-center gap-[4px]">
        <FaStar className="text-gray-300 text-3xl h-6 w-6" />
          <span className="text-[14px] font-[400]">5.0</span>
        </div>
      </div>
      <h1 className="text-[18px] font-bold mb-[8px] truncate">Introduction to webflow</h1>
      <p className="text-[14px] font-[400] leading-[20px] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
      <div className="flex items-center gap-[16px]">
        <button className="text-sm bg-white text-black px-[16px] py-[6px] rounded border-[2px] border-black">
          Enroll Now
        </button>
        <div className="text-[14px] font-[400]">$400</div>
      </div>
    </div>
    </div>

  <div className=" sm:items-center sm:justify-center md:items-center md:justify-center flex justify-center items-center w-full mt-[40px] gap-8 pr-16 pl-16 pt-8 pb-8 px-16">
  <button className="bg-white text-black text-[16px] px-[24px] py-[12px] rounded-md border-[2px] border-black">
    View All Courses
  </button>
</div>
</div>
</div>



     
);
};

export default Courses;
