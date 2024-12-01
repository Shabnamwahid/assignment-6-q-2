import React from "react";
import Image from "next/image";

const HeroMain = () => {
  return (
    <div
      className="w-[1280px] h-[228px] left-0 flex items-center 
      md:bg-[#F7F7F7] px-4 gap-8 sm:bg-[FFFFFF] md:flex-row sm:flex-col sm:w-full
       sm:items-center sm:gap-4 sm:bg-[#ffffff] sm:overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-2xl font-bold gap-6 mt-20 sm:text-center sm:mb-6">
        Trusted by 2000+ companies <br /> worldwide.
      </h1>

      
      <div className="flex flex-row mt-4">
      
        <Image src="/images/logo.png" alt="Logo 1" width={120} height={120} />
        <Image src="/images/Airbnb.png" alt="Airbnb Logo" width={120} height={120} />
        <Image src="/images/Airbnb Logo.png" alt="Logo" width={120} height={120}  />


        <div className="hidden md:flex flex-row ">
          <Image src="/images/logo-2.png" alt="Airbnb" width={120} height={120} />
          <Image src="/images/Logo - 1.png" alt="Airbnb 3" width={120} height={120} />
          <Image src="/images/Airbnb-3.png" alt="Logo 2" width={120} height={120} />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;







