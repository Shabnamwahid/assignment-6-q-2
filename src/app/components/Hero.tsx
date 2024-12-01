import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col md:flex-row w-full h-auto  md:h-[800px]">
    {/* test */}
      <div className="flex sm:h-[390px] flex-col justify-center items-center md:w-1/2 w-full p-6">
        <h1 className="text-black font-roboto text-[32px] sm:mt-96 md:text-[56px] font-bold leading-[40px] md:leading-[60px] text-center mb-6">
          Learn new skills <br /> online with ease
        </h1>
        <p className="text-black text-base md:text-xl mt-2 mb-6 text-center">
          Discover a wide range of courses covering a variety of subjects, taught
          by expert instructors.
        </p>
        {/* buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <button className="bg-black text-white px-6 py-3 border-black rounded">
            Start learning now
          </button>
          <button className="bg-[#F7F7F7] text-black px-6 py-3 border-black rounded">
            Explore Courses
          </button>
        </div>
      </div>

     {/* image */}
      <div className=" sm:h-[390px] relative md:w-1/2 w-full h-[300px] md:h-auto">
        <Image
          className="absolute bottom-0 object-cover h-full w-full"
          src="/images/figma-1.jpeg"
          alt="person"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Hero;

