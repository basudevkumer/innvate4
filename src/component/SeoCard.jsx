const SeoCard = ({ image, heading, paragraph, classNameParent }) => {
  return (
    <div
      className={` p-[36px]  rounded-[10px] flex  items-center gap-x-[40px] ${classNameParent}`}
    >
      <img src={image} alt="image" className="sm:w-[120px] w-[70px] md:w-[80px]"  />
      <div>
        <h4 className=" md:text-[20px] lg:text-[28px] sm:text-[28px] font-poppins leading-[140%] text-[#29313D] font-semibold pb-[12px]">
          {heading}
        </h4>
        <p className="font-nonito font-normal sm:text-[18px]/[200%] md:text-[15px]/[140%] lg:text-[18px]/[200%] text-[#29313D] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SeoCard;
