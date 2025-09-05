import { useState } from "react";

const ProcessCard = ({
  overlayClassName,
  parentClassName,
  heading,
  imageName,
}) => {

  let [hover, setHover] = useState(false)

  return (
    <div className=" group relative">
      <div
        className={`py-[40px] px-[47px]  transition duration-400 ease-in-out rounded-[14px] ${parentClassName} `}
      >
        <div className="flex flex-col items-center  z-40">
          <div >
            <img src={imageName} alt="featureCardImage" className=""/>
          </div>
          <h6 className="pt-[30px] text-[#29313D] font-medium  font-poppins  leading-[150%] text-[24px] group-hover:text-[#fff] transition duration-300 ease-in-out whitespace-nowrap">
            {heading}
          </h6>
        </div>
        <div
          className={`w-[80px] h-[80px]  absolute bottom-[0px] left-[50%]  -translate-x-1/2  rotate-45 -z-1 opacity-0 group-hover:opacity-100 group-hover:bottom-[-40px]   duration-600 ease-in-out  ${overlayClassName}`}
        ></div>
      </div>
    </div>
  );
};

export default ProcessCard;
