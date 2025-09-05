import BannarImages from "../assets/bannar.png";
import NavImages from "../assets/navlogo.png";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      style={{ background: `url(${BannarImages})` }}
      className="bg-cover bg-no-repeat bg-top  py-[30px]"
    >
      <div className="max-w-[1320px] mx-auto text-white flex items-center">
        <div className="w-[25%]">
          <img src={NavImages} alt="navImages" className="w-[110px]" />
        </div>
        <div className="w-[75%]">
          <div className="flex items-center justify-between">
            <ul className="flex  gap-x-[30px] ">
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
                className={"py-[14px] px-[28px]"}
                children={"Contact Us"}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
