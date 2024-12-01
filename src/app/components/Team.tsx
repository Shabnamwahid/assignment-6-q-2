import Image from 'next/image';

const Team = () => {
  return (
    <div className="w-full h-[895px] bg-[#F7F7F7]  sm:h-full">
   
      <div className="w-full text-center py-28">
        <h2 className="font-['Roboto'] text-[48px] font-bold leading-[57.6px] mb-4">
          Our Team
        </h2>
        <p className="font-['Roboto'] text-[18px] font-normal leading-[27px]">
          Meet our dedicated team of professionals.
        </p>
      </div>

      {/* Cards row 1 */}
<div className="sm:flex-col md:flex-row sm:justify-center w-full flex justify-between px-[64px]">
  {/* Card 01 */}
  <div className="card-1 w-[394.67px] h-[273px] flex flex-col gap-[24px] mb-8 sm:mb-4">
    <div className="image w-full flex justify-center">
      <Image src="/images/image.png" alt="person" width={80} height={80} />
    </div>
    <div className="w-full flex flex-col items-center gap-[16px]">
      <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
        John Doe
      </h1>
      <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
        Senior Developer
      </p>
    </div>
    <div className="w-full flex justify-center gap-[14px] mt-[20px]">
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/Twitter.png" alt="Twitter" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[18px]">
        <Image src="/images/Vector.png" alt="Vector" width={30} height={30} />
      </div>
    </div>
  </div>

  {/* Card row 02 */}
  <div className="card-2 w-[394.67px] h-[273px] flex flex-col gap-[24px] mb-8 sm:mb-4">
    <div className="image w-full flex justify-center">
      <Image src="/images/Image-(2).png" alt="person" width={80} height={80} />
    </div>
    <div className="w-full flex flex-col items-center gap-[16px]">
      <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
        Joseph Munyambu
      </h1>
      <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
        Nursing Assistant
      </p>
    </div>
    <div className="w-full flex justify-center gap-[14px] mt-[20px]">
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/Twitter.png" alt="Twitter" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[18px]">
        <Image src="/images/Vector.png" alt="Vector" width={30} height={30} />
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card-3 w-[394.67px] h-[273px] flex flex-col gap-[24px] mb-8 sm:mb-4">
    <div className="image w-full flex justify-center">
      <Image src="/images/image-(3).png" alt="person" width={80} height={80} />
    </div>
    <div className="w-full flex flex-col items-center gap-[16px]">
      <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
        Joseph Ngumbau
      </h1>
      <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
        Medical Assistant
      </p>
    </div>
    <div className="w-full flex justify-center gap-[14px] mt-[20px]">
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[15.3px]">
        <Image src="/images/Twitter.png" alt="Twitter" width={30} height={30} />
      </div>
      <div className="w-[18px] h-[18px]">
        <Image src="/images/Vector.png" alt="Vector" width={30} height={30} />
      </div>
    </div>
  </div>
</div>


      {/* Second Row of Cards */}
      <div className="   w-full flex justify-between px-[64px] mt-[40px]">
        {/* Card 04 */}
        <div className="   sm:hidden md:block card-4 w-[394.67px] h-[273px] flex flex-col gap-[24px]">
          <div className="image w-full flex justify-center">
            <Image src="/images/Image-(4).png" alt="person" width={80} height={80} />
          </div>
          <div className="w-full flex flex-col items-center gap-[16px]">
            <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
            Medical Assistant
            </h1>
            <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
            Web Designer
            </p>
          </div>
          
          
        </div>

        {/* Card 05 */}
        <div className="  sm:hidden md:block card-5 w-[394.67px] h-[273px] flex flex-col gap-[24px]">
          <div className="image w-full flex justify-center">
            <Image src="/images/Image-(5).png" alt="person" width={80} height={80} />
          </div>
          <div className="w-full flex flex-col items-center gap-[16px]">
            <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
            Stephen Kerubo
            </h1>
            <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
            President of Sales
            </p>
          </div>
          
        </div>

        {/* Card 06 */}
        <div className=" sm:hidden md:block card-6 w-[394.67px] h-[273px] flex flex-col gap-[24px]">
          <div className="image w-full flex justify-center">
            <Image src="/images/image-(6).png" alt="person" width={80} height={80} />
          </div>
          <div className="w-full flex flex-col items-center gap-[16px]">
            <h1 className="w-full h-[30px] font-['Roboto'] text-[20px] font-semibold leading-[30px] text-center">
            John Leboo
            </h1>
            <p className="w-full h-[27px] font-['Roboto'] text-[18px] font-normal leading-[27px] text-center">
            Dog Trainer
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
