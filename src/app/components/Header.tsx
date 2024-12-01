import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-[#F7F7F7] ">
      <div className="container   items-center">

        <div className="sm:hidden md:flex mx-auto w-full h-[72px] px-auto py-[12px] gap-[32px]">
          <div className="flex justify-between items-center w-full">
            {/* Phone and Email */}
            <div className="flex items-center gap-4 text-[#000000] text-lg font-roboto font-semibold mt-2 ml-10">
              <span>Phone Number: 956 742 455 678</span>
              <span className="text-[#676767] text-xl font-normal">|</span>
              <span>Email: info@ddsgnr.com</span>
            </div>

            {/* Social Icons  */}
            <div className="hidden md:flex ml-auto items-center gap-4 mb-3 pl-[20px]
            ">
              <FaFacebook className="text-[#000000] text-2xl" />
              <FaInstagram className="text-[#000000] text-2xl" />
              <FaTwitter className="text-[#000000] text-2xl" />
              <CiLinkedin className="text-[#000000] text-2xl" />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Header;
