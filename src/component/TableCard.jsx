import Button from "./Button";

const TableCard = ({
  heading1,
  heading2,
  heading3,
  headingOneChildClassName,
  headingOneClassName,
  headingTwoClassName,
  headingThreeClassName,
  headingFourClassName,
  headingFiveClassName,
  headingSixClassName,
  headingSevenClassName,
  textTwo,
  textThree,
  textFour,
  textFive,
  textSix,
  textSeven,
  buttonClassName,
  buttonName,
  dividerClassName,
}) => {
  return (
    <div className="">
      <div
        className={`w-[305px] h-[14px] mx-auto  rounded-[10px]  ${dividerClassName}`}
      ></div>
      <h6
        className={`text-[#29313D] font-normal  font-poppins  leading-[160%] text-[24px] pt-[24px] pb-[73px] text-center ${headingOneClassName}`}
      >
        {heading1}
        <span
          className={`text-[30px] font-semibold ${headingOneChildClassName}`}
        >
          {heading2}
        </span>{" "}
        {heading3}
      </h6>
      <h6
        className={`text-[#29313D] font-normal   font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px] bg-[#EFF4F8] flex justify-center ${headingTwoClassName}`}
      >
        {textTwo}
      </h6>
      <h6
        className={`text-[#29313D] font-normal  font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px] flex justify-center ${headingThreeClassName}`}
      >
        {textThree}
      </h6>
      <h6
        className={`text-[#29313D] font-normal   font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px] bg-[#EFF4F8] flex justify-center ${headingFourClassName}`}
      >
        {textFour}
      </h6>
      <h6
        className={`text-[#29313D] font-normal  flex justify-center  font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px]  ${headingFiveClassName}`}
      >
        {textFive}
      </h6>
      <h6
        className={`text-[#29313D] ffont-normal flex justify-center   font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px] bg-[#EFF4F8] ${headingSixClassName}`}
      >
        {textSix}
      </h6>
      <h6
        className={`text-[#29313D] font-normal flex justify-center font-poppins  leading-[160%] text-[24px] py-[28px] px-[24px] ${headingSevenClassName} `}
      >
        {textSeven}
      </h6>

      <Button
        className={`text-[#fff] py-[38px] px-[125px] border-none text-center rounded-none ${buttonClassName} `}
        children={buttonName}
      />
    </div>
  );
};

export default TableCard;
