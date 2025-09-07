import TableCard from "./TableCard";

// import for icons
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Table = () => {
  return (
    <section className="pt-[100px]  lg:py-[120px]">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex flex-col items-center">
          <h6 className="font-nunito font-medium text-[24px] leading-[150%] text-[#7968EF] ">
            Our pricing
          </h6>
          <h2 className="text-[#29313D] font-semibold  font-poppins   text-[36px]/[140%]   lg:text-[48px]/[140%] pt-[14px]">
            Premium optimization plans
          </h2>
        </div>
        <div className=" sm:grid sm:grid-cols-2  lg:grid lg:grid-cols-4 pt-[60px] space-y-[105px]  lg:space-y-[0px] ">
          <div className="  sm:border-r border-[#D7E6F9] ">
            <TableCard
              dividerClassName={"bg-[#D2EAFD] "}
              heading1={"Save"}
              heading2={"up to 40%"}
              heading3={"by paying annually!"}
              headingOneChildClassName={"pl-[5px]"}
              headingOneClassName={`text-start mx-[24px]`}
              textTwo={"keywords result"}
              headingTwoClassName={"text-start"}
              textThree={"Territories"}
              headingThreeClassName={"text-start"}
              textFour={"Search by time"}
              headingFourClassName={"text-start"}
              textFive={"Api access"}
              headingFiveClassName={"text-start"}
              textSix={"competition metrics"}
              headingSixClassName={"text-start"}
              textSeven={"Reports"}
              headingSevenClassName={"text-start"}
              buttonClassName={"hidden"}
            />
          </div>
          <div className=" sm:border-r border-[#D7E6F9]  ">
            <TableCard
              dividerClassName={"bg-[#323232]"}
              heading2={"personal"}
              headingOneChildClassName={"block"}
              heading3={"Free"}
              textTwo={"Top 1,000"}
              textThree={"Top 6"}
              textFour={<IoIosCheckboxOutline />}
              headingFourClassName={"text-[40px] !text-[#43CB83]  "}
              textFive={<MdOutlineCancelPresentation />}
              headingFiveClassName={"text-[40px] !text-[#F36F56] "}
              textSix={<IoIosCheckboxOutline />}
              headingSixClassName={"text-[40px] !text-[#43CB83]  "}
              textSeven={<IoIosCheckboxOutline />}
              headingSevenClassName={"text-[40px] !text-[#43CB83]  "}
              buttonName={"Try for free"}
              buttonClassName={"bg-[#323232] w-full"}
            />
          </div>
          <div className=" ">
            <TableCard
              dividerClassName={"bg-[#43CB83]"}
              heading2={"professional"}
              headingOneChildClassName={"block"}
              heading3={"$59/monthly"}
              textTwo={"5,000"}
              textThree={"13"}
              textFour={<IoIosCheckboxOutline />}
              headingFourClassName={"text-[40px] !text-[#43CB83]  "}
              textFive={<MdOutlineCancelPresentation />}
              headingFiveClassName={"text-[40px] !text-[#F36F56] "}
              textSix={<IoIosCheckboxOutline />}
              headingSixClassName={"text-[40px] !text-[#43CB83]  "}
              textSeven={<IoIosCheckboxOutline />}
              headingSevenClassName={"text-[40px] !text-[#43CB83]  "}
              buttonName={"Buy now"}
              buttonClassName={"bg-[#43CB83] w-full"}
            />
          </div>
          <div className=" h-fit sm:border-l border-[#D7E6F9]">
            <TableCard
              dividerClassName={"bg-[#845A9F]"}
              heading2={"Enterprice"}
              headingOneChildClassName={"block"}
              heading3={"$299/monthly"}
              textTwo={"10,000"}
              textThree={"200+"}
              textFour={<IoIosCheckboxOutline />}
              headingFourClassName={"text-[40px] !text-[#43CB83]  "}
              textFive={<IoIosCheckboxOutline />}
              headingFiveClassName={"text-[40px] !text-[#43CB83] "}
              textSix={<IoIosCheckboxOutline />}
              headingSixClassName={"text-[40px] !text-[#43CB83]  "}
              textSeven={<IoIosCheckboxOutline />}
              headingSevenClassName={"text-[40px] !text-[#43CB83]  "}
              buttonName={"Buy now"}
              buttonClassName={"bg-[#845A9F] w-full"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Table;
