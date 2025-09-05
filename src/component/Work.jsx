import Nauture from "../assets/nature.jpg";
import NautureTwo from "../assets/nature2.jpg";
import NautureThree from "../assets/nature4.jpg";

import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-[120px]">
      <div>
        <div>
          <h6 className="font-nunito font-medium text-[24px] leading-[150%] text-[#7968EF] ">
            Our works
          </h6>
          <h2 className="font-poppins font-semibold text-[48px] leading-[140%] text-[#29313D] pt-[14px] ">
            Our case studies
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-[30px] pt-[60px]">
          <div className="">
            <WorkCard
              imageName={Nauture}
              heading={"Search marketer"}
              paragraph={
                "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
              }
            />
          </div>
          <div className="">
            <WorkCard
              imageName={NautureTwo}
              heading={"Watching for trends"}
              paragraph={
                "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
              }
            />
          </div>
          <div className="">
            <WorkCard
              imageName={NautureThree}
              heading={"Cross over benifits"}
              paragraph={
                "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
