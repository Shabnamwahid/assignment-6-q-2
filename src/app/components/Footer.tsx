import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="main grid md:grid-rows-2 justify-between max-w-[1280px] w-full h-[100px] pt-[80px] gap-[40px] bg-white relative px-4 sm:px-8">
      <div className="footer-main md:flex-row sm:flex-col max-w-[1120px] w-full h-auto gap-8 bg-white">
        {/* text */}
        <div className="footer-heading flex flex-col md:items-start sm:items-center sm:w-auto w-full gap-10">
          <div className="heading-main max-w-[500px]">
            <h1 className="text-[28px] font-bold leading-[25px] text-black">
              Subscribe to our newsletter
            </h1>
            <p className="text-[16px] font-semibold leading-[24px] text-black mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

      
  {/* button/text */}
  
  <div className='button-main   md:flex-row sm:flex-col sm:justify-center md:items-end sm:items-center md:pb-10 md:mt-0 sm:mt-10 pb-20 absolute right-5 w-[500px] h-[0px] mb-[30px] -mt-14 '>
          <div className='flex justify-between  sm:flex-col w-auto h-auto px-[24px]'>
            {/* button 1 */}
            <div className="flex gap-4 mb-8">
              <div className='flex  md:flex-row sm:flex-col text-[16px] font-normal leading-[24px] text-left text-[#505050] w-[200px] h-[40px] rounded-md gap-0 border border-black pl-2'>
                <button>Enter your email</button>
              </div>
              {/* button */}
              <div className='text-[16px] font-normal leading-[24px] text-left text-[#000000] w-[80px] h-[40px] rounded-md gap-0 border border-black pt-2 pl-1'>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {/* button bottom para */}
          <div className='text-[12px] font-medium leading-[18px] text-left text-[#000000] w-[400px] h-[18px] gap-0'>
            <p className='text-[14px] font-normal leading-[18px] text-left pl-6'>
              By subscribing you agree to with our
              <span className='underline decoration-solid text-[#000000]'> Privacy Policy</span>
            </p>
          </div>
        </div>   



      {/* Footer middle */}
      <div className="footer-mid grid mt-40 md:grid-cols-4 sm:grid-cols-1 sm:place-items-center gap-8 w-full px-4 sm:px-8 ">
        {/* Logo */}
        <div className="col-main flex justify-center items-start">
          <Image src="/images/logo.jpg" height={100} width={100} alt="logo" />
        </div>

        {/* Column 1 */}
        <div>
          <h2 className="text-base font-semibold mb-2">Courses</h2>
          <ul className="space-y-2 text-[14px]">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-base font-semibold mb-2">Resources</h2>
          <ul className="space-y-2 text-[14px]">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-base font-semibold mb-2">About Us</h2>
          <ul className="space-y-2 text-[14px]">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Footer end */}
      <div className="footer-end w-full pb-40  mt-10">
        <div className="w-full">
          <Image src="/images/Divider.png" height={1} width={1200} alt="Divider" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <div className="flex space-x-4">
            <p className="text-[14px]">&copy; 2023 Ddsgnr. All rights reserved.</p>
            <a href="#" className="underline text-[14px]">
              Privacy Policy
            </a>
            <a href="#" className="underline text-[14px]">
              Terms of Service
            </a>
            <a href="#" className="underline text-[14px]">
              Cookies Settings
            </a>
          </div>
          <div className="flex space-x-4  sm:mt-0 mt-28">
            <Image src="/images/Vector (7).png" height={10} width={10} alt="social" />
            <Image src="/images/Vector (8).png" height={10} width={10} alt="social" />
            <Image src="/images/Twitter.png" height={24} width={24} alt="social" />
            <Image src="/images/LinkedIn.png" height={24} width={24} alt="social" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Footer;