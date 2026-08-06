import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import useJson from "../../Hooks/useJson.js";

export default function CardAudience({ title, description, linkText = "", href,className="" }) {
  const { isArabic } =useJson();

    return (
      <>
        <Link to={href}>
          <div
            className={`bg-white   p-6 border-[0.5px] border-[#5fcf8165] rounded-2xl shadow-xs flex flex-col justify-center ${isArabic ? "gap-2" : "gap-7"} ${className}`}
          >
            <h5
              className={` h-14 mb-3 font-bold tracking-tight text-heading leading-8 ${isArabic ? "text-[#1A2E1D] text-lg lg:text-2xl font-medium" : "text-[#1A5C2C] font-RobotoCondensed font-semibold text-xl"}`}
            >
              {title}
            </h5>
            <div className="h-20">
              <p className={`text-body  text-[#5A7A62] font-bold text-sm  `}>
                {description}
              </p>
            </div>

            <span
              className={`text-[#2D7A45] flex items-center gap-2 text-primary font-medium   ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"} `}
            >
              {linkText}
              {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
            </span>
          </div>
        </Link>
      </>
    );
}



