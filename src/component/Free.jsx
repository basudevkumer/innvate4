import FreeImage from "../assets/bannar.png";
import Roket from "../assets/roket.png";

const Free = () => {
  return (
    <section className="py-[120px]">
      <div
        className="max-w-[1320px] mx-auto py-[122px] rounded-[45px] relative"
        style={{ background: `url(${FreeImage})` }}
      >
        <div className="text-center">
          <h2 className="text-[#fff] font-semibold  font-poppins  text-[48px]/[140%]">
            Get your free seo analytics
          </h2>
          <p className="text-[#ffffff94] lg:w-[580px] mx-auto font-normal  font-nunito text-[18px]/[200%] pt-[10px] pb-[28px]">
            Paste your website link to get the free 7 days analytics of your
            website for totaly free
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="paste your website links"
              className=" p-[12px]  sm:p-[30px] bg-[#fff] text-[#29313D] font-nunito font-normal text-[16px] leading-[120%]   w-[195px] sm:w-[440px] rounded-l-lg "
            />
            <button className="text-[#fff] font-nunito font-normal text-[14px]  px-[0px] py-[11.2px] whitespace-nowrap   sm:text-[18px] sm:px-[30px] sm:py-[26px]  rounded-r-lg bg-[#6A55EA]   cursor-pointer">
              Analyze website
            </button>
          </div>
          <img
            src={Roket}
            alt="Roket"
            className="absolute top-[37px] sm:left-[55px] w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};
export default Free;
