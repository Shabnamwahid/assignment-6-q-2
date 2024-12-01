import React from 'react';
import Image from 'next/image';
import StarRating from '../components/StarRating';

const Testimonial = () => {
  return (
    <div className="main w-full max-w-[1280px] mx-auto py-16 px-8 bg-[#F7F7F7]">
    
    <div className="heading mb-12">
      <h1 className="text-4xl font-bold font-roboto mb-4">
        Customer Testimonials
      </h1>
      <p className="text-lg text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  
   
    <div className="cards flex flex-row gap-8 justify-center">
      {/* First Testimonial  */}
      <div className="card bg-white p-6 border border-black shadow-md rounded-lg w-full max-w-[416px] sm:block">
        <StarRating rating={5} />
        <p className="mt-4 text-black text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="flex items-center mt-6">
          <Image
            src="/images/Image (3).png"
            alt="James Nduku's image"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">James Nduku</h3>
            <p className="text-sm text-black">Software Developer</p>
          </div>
        </div>
      </div>
  
      {/* Second Testimonial*/}
      <div className="card bg-white p-6 border border-black shadow-md rounded-lg w-full max-w-[416px] sm:hidden md:block">
        <StarRating rating={5} />
        <p className="mt-4 text-black text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="flex items-center mt-6">
          <Image
            src="/images/Image.png"
            alt="Erick Kipkemboi's image"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Erick Kipkemboi</h3>
            <p className="text-sm text-black">Scrum Master</p>
          </div>
        </div>
      </div>
  
      {/* Third Testimonial  */}
      <div className="card bg-white p-6 border border-black shadow-md rounded-lg w-full max-w-[416px] sm:hidden md:block">
        <StarRating rating={5} />
        <p className="mt-4 text-black text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="flex items-center mt-6">
          <Image
            src="/images/Image (6).png"
            alt="Stephen Kerubo's image"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Stephen Kerubo</h3>
            <p className="text-sm text-black">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Dots*/}
    <div className=' sm:border-[4px] sm:p-2 sm:border-gray-500 md:border-0 mt-24'>
    <div >
      <div className="flex justify-normal sm:ml-4 w-full h-[60px] pr-36 mt-20 sm:pr-4">
        {/* Dots */}
        <div className="flex h-48 w-full gap-2 justify-start">
          <div className="w-8 h-8">
            <Image src="/images/Dot.png" alt="dot" width={8} height={8} />
          </div>
          <div className="w-8 h-8">
            <Image src="/images/Dot (2).png" alt="dot" width={8} height={8} />
          </div>
          <div className="w-8 h-8">
            <Image src="/images/Dot (2).png" alt="dot" width={8} height={8} />
          </div>
          <div className="w-8 h-8">
            <Image src="/images/Dot (2).png" alt="dot" width={8} height={8} />
          </div>
          <div className="w-8 h-8">
            <Image src="/images/Dot (2).png" alt="dot" width={8} height={8} />
          </div>
        </div>
  
        {/* Arrows */}
        <div className="flex gap-8 sm:justify-end sm:mr-6">
          <div className="flex justify-center items-center w-8 h-8 rounded-full border-[1px] border-black cursor-pointer">
            <Image
              src="/images/Vector (4).png"
              alt="previous arrow"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-center items-center w-8 h-8 rounded-full border-[1px] border-black cursor-pointer">
            <Image
              src="/images/Vector (3).png"
              alt="next arrow"
              width={16}
              height={16}
            />
          </div>
          </div>          

        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Testimonial;