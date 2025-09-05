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
          <h2 className="text-[#fff] font-semibold  font-poppins  leading-[140%] text-[48px]">
            Get your free seo analytics
          </h2>
          <p className="text-[#ffffff94] w-[580px] mx-auto font-normal  font-nunito  leading-[200%] text-[18px] pt-[10px] pb-[28px]">
            Paste your website link to get the free 7 days analytics of your
            website for totaly free
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="paste your website links"
              className="p-[30px] bg-[#fff] text-[#29313D] font-nunito font-normal text-[16px] leading-[120%] w-[440px] rounded-l-lg "
            />
            <button className="text-[#fff] px-[30px] py-[28px]  rounded-r-lg bg-[#6A55EA]   cursor-pointer">
              Analyze website
            </button>
          </div>
          <img
            src={Roket}
            alt="Roket"
            className="absolute top-[37px] left-[55px] w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};
export default Free;
