import React from "react";
import Image from "next/image";

const HeroBottom = () => {
  return (
    <div className="w-screen h-[950px] bg-[#FFFFFF] px-0">
      {/* Header Section */}
      <div className="text-center mb-[80px] mt-28">
        <h1 className=" sm:mr-4 sm:ml-4  md:text-center font-roboto text-[48px] font-bold leading-[57.6px]">
          Explore Courses By Category
        </h1>
        <p className=" sm:mr-4 sm:ml-4 font-roboto text-[18px] font-normal leading-[27px] mt-6">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
      <div className="flex sm:flex-col md:flex-row sm:items-center gap-6 justify-start w-full mt-20">
        
        {/* Card 1 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/pen-tool-2.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Design & Development</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/volume.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Marketing</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/group.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Development</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex md:flex sm:hidden gap-6 justify-start w-full mt-20">
        {/* Card 4 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/microphone.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Communication</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/link.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Digital Marketing</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/arrow-2.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Self Development</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>
      </div>

      {/* Card Section 3 */}
      <div className="flex md:flex sm:hidden gap-6 justify-start w-full mt-20">
        {/* Card 7 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/briefcase.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Business</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/book.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Finance</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-[400px] h-auto p-4 gap-2 rounded-md bg-[#F7F7F7] flex">
          <div className="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
            <Image src="/images/book (2).png" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-left text-black">Consulting</h1>
            <p className="text-base font-normal text-left text-black">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="w-[180px] h-[58px] px-3 py-1 gap-2 rounded-md border-t border-l border-r border-b border-black">
          <button className="w-full px-4 py-2 text-black mt-1 font-semibold text-base rounded-md">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
