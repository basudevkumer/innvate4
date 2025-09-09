import BannarImages from "../assets/bannar.png";
import NavImages from "../assets/navlogo.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  let [show, setShow] = useState(false);

  let handleClick = () => {
    setShow(!show);
  };

  return (
    <nav
      style={{ background: `url(${BannarImages})` }}
      className="bg-cover bg-no-repeat bg-top  py-[30px] w-full max-w-full"
    >
      <div className="max-w-[1320px] mx-auto text-white flex lg:items-center relative ">
        <div className="w-[25%]">
          <img src={NavImages} alt="navImages" className="w-[110px]" />
        </div>
        <div className={`w-[75%] z-40`}>
          <div
            className={`lg:static absolute top-[80px] left-0  lg:flex items-center justify-between   duration-700 ease-in-out rounded-xl w-full text-center overflow-hidden lg:overflow-visible lg:h-0 ${
              show == true ? " h-[400px]  " : "h-[0px]  "
            } `}
          >
            <div className="absolute inset-0 bg-[#48409C] -z-10 lg:bg-transparent"></div>
            <ul className=" lg:flex flex-property  gap-x-[30px] pt-[30px]  lg:pt-0">
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  Home{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  About{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  Service{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  Portfolio{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  Price{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-openSans text-[#fff] text-[18px]  font-semibold flex items-center gap-2"
                >
                  Blog{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </a>
              </li>
            </ul>
            <div className="">
              <Button
                className={"py-[14px] px-[28px] lg:py-[10px] lg:px-[13px] xl:py-[14px] xl:px-[28px]"}
                children={"Contact Us"}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden z-40" onClick={handleClick}>
          {show == true ? (
            <div>
              <IoCloseSharp className="text-[30px]  cursor-pointer h-fit" />
            </div>
          ) : (
            <div>
              <FaBarsStaggered className="text-[30px] cursor-pointer h-fit" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
