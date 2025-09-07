import FooterLogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1320px] mx-auto md:pt-[140px] md:pb-[57px] grid grid-cols-2   md:grid md:grid-cols-5 gap-6 space-y-[50px] ">
        <div className=" col-span-2">
          <img src={FooterLogo} alt="" className="w-[110px]" />
          <p className=" font-normal text-[#29313D] pt-[44px]">
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
        </div>
        <div className="">
          <ul className="flex flex-col md:items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Benifit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col md:items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Task Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Company growth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Time tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col md:items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#29313D] font-semibold leading-[120%] font-nunito  "
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Customer service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#29313D] font-semibold leading-[120%] font-nunito "
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[80px] pb-[57px] max-w-[1320px] mx-auto flex justify-between items-center">
        <p className="font-nunito  text-[15px]/[180%] sm:text-[18px]/[180%]  font-normal text-[#29313D]">
          @20201 Innovate.All rights reserved.
        </p>
        <div className="flex gap-x-7">
          <p className="font-nunito text-[15px]/[180%] sm:text-[18px]/[180%] font-normal text-[#29313D]">
            Privacy policy
          </p>
          <p className="font-nunito text-[15px]/[180%] sm:text-[18px]/[180%]  font-normal text-[#29313D]">
            Terms & condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
