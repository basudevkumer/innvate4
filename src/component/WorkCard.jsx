

const WorkCard = ({ imageName, heading, paragraph }) => {
  return (
    <div className="">
      <img
        src={imageName}
        alt="work card imgage"
        className="w-full h-[326px] rounded-lg"
      />
      <h4 className="font-poppins font-medium text-[28px] leading-[140%] text-[#29313D] pt-[24px] pb-[14px] whitespace-nowrap">
        {heading}
      </h4>
      <p className="font-nunito font-normal text-[18px] leading-[200%] text-[#29313D] ">
        {paragraph}
      </p>
    </div>
  );
};

export default WorkCard;
