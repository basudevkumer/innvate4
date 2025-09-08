import BannarImage from "../assets/bannar.png";
import Clud from "../assets/clud.png";
import Button from "../component/Button";
import BannarIconOne from "../assets/bannaricon1.png";
import BannarIconTwo from "../assets/bannaricon2.png";
import BannarIconThree from "../assets/bannaricon3.png";
import BannarIconFour from "../assets/bannaricon4.png";
const Bannar = () => {
  return (
    <section
      className="pt-[98px] pb-[230px] sm:pb-[350px] md:pb-[460px] lg:pb-[699px] bg-cover bg-no-repeat bg-center relative"
      style={{ background: `url(${BannarImage})` }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className=" ">
          <div className="flex gap-x-5 justify-center ">
            <div>
              <Button children={"SEO"} className={"py-[10px] px-[15px]"} />
            </div>
            <div>
              <Button children={"SMM"} className={"py-[10px] px-[15px]"} />
            </div>
            <div>
              <Button children={"CRO"} className={"py-[10px] px-[15px]"} />
            </div>
          </div>
          <h1 className=" text-[40px] lg:text-[64px] font-poppins text-[#fff] font-bold leading-[130%]  lg:w-[967px] text-center mx-auto pt-[30px] pb-[20px]">
            Guaranteed increase of your website sales
          </h1>
          <p className="font-nunito text-[#fff] font-normal text-[16px] lg:text-[18px] leading-[200%] text-center mx-auto lg:w-[780px] ">
            With over 25 years of experience, we have crafted thousands of
            strategic discovery process that enables us to peel back the layers
            which enable us to understand.
          </p>
          <div className="flex items-center justify-center mt-[48px] ">
            <input
              type="text"
              placeholder="paste your website links"
              className="  sm:p-[30.4px] bg-[#fff] text-[#29313D] font-nunito font-normal text-[16px] leading-[120%] py-[13px] px-[5px] w-[195px] sm:w-[440px] rounded-l-lg "
            />
            <button className="text-[#fff] sm:px-[30px]  sm:py-[28px]  rounded-r-lg bg-[#6A55EA]   cursor-pointer  py-[10.5px]  px-[3px]  whitespace-nowrap ">
              Analyze website
            </button>
          </div>
          <div className="absolute bottom-[15px] md:bottom-[100px]  left-[50%] translate-x-[-50%] lg:translate-x-[-50%] z-10  flex items-center gap-x-[10px] sm:gap-x-[30px]  lg:gap-x-[110px] ">
            <img
              src={BannarIconOne}
              alt="bannarIconOne"
              className="  w-[50px] sm:w-[95px]  lg:w-[128px]"
            />
            <img
              src={BannarIconTwo}
              alt="bannarIconOne"
              className="  w-[50px] sm:w-[95px]  lg:w-[128px]"
            />
            <img
              src={BannarIconThree}
              alt="bannarIconOne"
              className="  w-[50px] sm:w-[95px]  lg:w-[128px]"
            />
            <img
              src={BannarIconFour}
              alt="bannarIconOne"
              className="  w-[50px] sm:w-[95px]  lg:w-[128px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-[100%] z-0">
        <img src={Clud} alt="clud " className="w-[100%]" />
      </div>
    </section>
  );
};

export default Bannar;
