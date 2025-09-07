const WorkCard = ({ imageName, heading, paragraph }) => {
  return (
    <div className=" shadow-xl rounded-lg">
      <img
        src={imageName}
        alt="work card imgage"
        className="w-full h-[326px] rounded-lg object-cover"
      />
      <h4 className="font-poppins font-medium  text-[28px]/[140%] md:text-[22px]/[110%]  lg:text-[28px]/[140%]  text-[#29313D] pt-[24px] pb-[14px] whitespace-nowrap  mx-[15px]  lg:mx-[15px]">
        {heading}
      </h4>
      <p className="font-nunito font-normal text-[18px]/[200%] md:text-[15px]/[160%] lg:text-[18px]/[200%]  text-[#29313D] mx-[15px] pb-[22px]">
        {paragraph}
      </p>
    </div>
  );
};

export default WorkCard;
