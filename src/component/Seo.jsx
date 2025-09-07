import SeoPic from "../assets/seo.png";
import SeoCard from "./SeoCard";
import SeoIconOne from "../assets/seoicon1.png";
import SeoIconTwo from "../assets/seoicon2.png";
import SeoIconThree from "../assets/seoicon3.png";

const Seo = () => {
  return (
    <section className=" my-[80px]">
      <div className="max-w-[1320px] mx-auto ">
        <h2 className=" text-[36px] md:text-[48px] font-poppins font-semibold leading-[140%] text-[#29313D] md:w-[666px] mx-auto text-center">
          Provide awsome service with our tools
        </h2>

        <div className=" md:grid md:grid-cols-2  gap-x-[31px] pt-[60px]">
          <div className="text-center md:text-start  pb-[60px] md:pb-[0px]">
            <p className=" font-nunito font-normal  text-[18px] leading-[200%] text-[#29313D] pb-[80px]">
              With over 25 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand.
            </p>
            <img src={SeoPic} alt="SeoPic" />
          </div>
          <div className=" flex flex-col gap-y-[36px]">
            <SeoCard
              image={SeoIconOne}
              heading={"SEO Consultancy"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque "
              }
              classNameParent={"bg-[#F0EDFF]"}
            />
            <SeoCard
              image={SeoIconTwo}
              heading={"Competitor analysis"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque  "
              }
              classNameParent={"bg-[#FEF6EC]"}
            />
            <SeoCard
              image={SeoIconThree}
              heading={"Social media marketing"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque "
              }
              classNameParent={"bg-[#E8FCF2]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
