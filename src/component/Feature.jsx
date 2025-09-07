import FeatureImage from "../assets/featureimg.png";

const Feature = () => {
  return (
    <section className=" sm:pt-[180px] sm:pb-[97px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="sm:grid sm:grid-cols-2 md:gap-x-[50px]  lg:gap-x-[200px]">
          <div className="">
            <h6 className="text-[#7968EF] font-medium  font-nunito  leading-[150%] text-[24px]">
              Core feature
            </h6>
            <h2 className="text-[#29313D] font-semibold  font-poppins text-[48px]/[140%]  mt-[10px] mb-[24px]">
              Get more traffic
            </h2>
            <p className="text-[#29313D] font-normal  font-nunito  leading-[200%] text-[18px]">
              With over 25 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand.With over 25 years of
              experience, we have crafted thousands of strategic discovery
              process
            </p>

            <div className="pt-[40px]  flex gap-x-[30px] md:gap-x-[60px]">
              <div
                className="radial-progress text-[#7968EF]"
                style={{ "--value": 12 } /* as React.CSSProperties */}
                aria-valuenow={12}
                role="progressbar"
              >
                12%
              </div>
              <div
                className="radial-progress text-[#F8A64C]"
                style={{ "--value": 80 } /* as React.CSSProperties */}
                aria-valuenow={80}
                role="progressbar"
              >
                80%
              </div>
              <div
                className="radial-progress text-[#63DE9D]"
                style={{ "--value": 60 } /* as React.CSSProperties */}
                aria-valuenow={60}
                role="progressbar"
              >
                60%
              </div>
            </div>
          </div>
          <div className=" mt-[75px]  md:mt-0">
            <img src={FeatureImage} alt="FeatureImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
