
const SeoCard = ({ image, heading, paragraph, classNameParent }) => {
  return (
    <div
      className={`p-[36px]  rounded-[10px] flex  items-center gap-x-[40px] ${classNameParent}`}
    >
      <img src={image} alt="" />
      <div>
        <h4 className="text-[28px] font-poppins leading-[140%] text-[#29313D] font-semibold pb-[12px]">
          {heading}
        </h4>
        <p className="font-nonito font-normal text-[18px] text-[#29313D] leading-[200%] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SeoCard;
