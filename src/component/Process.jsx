import ProcessCard from "./ProcessCard";
import FeatureCardImgOne from "../assets/featurecardicon1.png";
import FeatureCardImgTwo from "../assets/featurecardiconO1.png";
import FeatureCardImgThree from "../assets/featurecardiconO2.png";
import AnalyticsImg from "../assets/analyticsimg.png";
import Button from "./Button";

const Process = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-[60px]">
          <h6 className="text-[#7968EF] font-medium  font-nunito  leading-[150%] text-[24px]  mb-[14px]">
            Our process
          </h6>
          <h2 className="text-[#29313D] font-semibold  font-poppins  text-[36px]/[120%] sm:text-[48px]/[140%]">
            How can we help?
          </h2>
        </div>
        <div className=" space-y-[35px] md:space-y-[85px] lg:space-y-[0px]  sm:grid sm:grid-cols-2  lg:grid lg:grid-cols-4 gap-x-[30px]">
          <div>
            <ProcessCard
              imageName={FeatureCardImgOne}
              parentClassName={"bg-[#F8A64C] group-hover:bg-[#F8A64C]"}
              overlayClassName={"bg-[#F8A64C]"}
              heading={"Real time analytics"}
            />
          </div>
          <div>
            <ProcessCard
              imageName={FeatureCardImgTwo}
              parentClassName={"bg-[#7968EF] group-hover:bg-[#7968EF]"}
              overlayClassName={"bg-[#7968EF]"}
              heading={"Social media stragedy"}
            />
          </div>
          <div>
            <ProcessCard
              imageName={FeatureCardImgThree}
              parentClassName={"bg-[#63DE9D] group-hover:bg-[#63DE9D]"}
              overlayClassName={"bg-[#63DE9D]"}
              heading={"Media management"}
            />
          </div>
          <div>
            <ProcessCard
              imageName={FeatureCardImgOne}
              parentClassName={"bg-[#FF51E8] group-hover:bg-[#FF51E8]"}
              overlayClassName={"bg-[#FF51E8]"}
              heading={"Reporting & analysis"}
            />
          </div>
        </div>
        <div className="pt-[100px] md:grid md:grid-cols-2 gap-x-[129px] space-y-[40px] md:space-y-[0px]">
          <div className="flex justify-center">
            <img src={AnalyticsImg} alt="AnalyticsImg" />
          </div>
          <div className="">
            <h3 className="font-poppins font-semibold text-[36px] leading-[140%] text-[#29313D] ">
              Real time analytics
            </h3>
            <p className="font-nunito font-normal text-[18px] leading-[200%] text-[#29313D]     pt-[24px] pb-[48px] ">
              Analyzing negative materials about your brand and addressing them
              with sentiment analysis and press release distribution.Turn your
              visitors into customers with our team of experts. We'll analyze
              your website and develop a suitable conversion-rate strategy.
            </p>
            <Button
              children={"Analyze website"}
              className={"bg-[#6A55EA] p-[30px] border-[#6A55EA]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
