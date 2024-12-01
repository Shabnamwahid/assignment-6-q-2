import React from 'react';

const MiddleLow = () => {
  return (
 
  
    <div className="sm:hidden md:flex  flex flex-col items-center space-y-16  border border-gray-100 pt-32">
      
      <div className="w-[1152px]">
        <h1 className="text-[48px] font-bold leading-[57.6px] text-center font-roboto underline-from-font decoration-none">
          Our Achievements
        </h1>
      </div>
      <div className="w-[1152px]">
        <p className="text-[18px] font-normal leading-[27px] text-center font-roboto underline-from-font decoration-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

     
      <div className="flex justify-between w-full max-w-[1152px] mt-12 pb-28">
        {/* Info 01 */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[50px] font-bold leading-[48px] font-roboto ">
            +200
          </h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto">
            Courses
          </p>
        </div>

        {/* Info 02 */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[50px] font-bold leading-[48px] font-roboto">
            50K
          </h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto">
            Mentors
          </p>
        </div>

        {/* Info 03 */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[50px] font-bold leading-[48px] font-roboto ">
            370K
          </h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto">
            Students
          </p>
        </div>

        {/* Info 04 */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[50px] font-bold leading-[48px] font-roboto ">
            100+
          </h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto">
            Recognition
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleLow;

   
