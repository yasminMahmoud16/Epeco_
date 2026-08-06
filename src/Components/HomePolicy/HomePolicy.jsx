import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import { Link } from "react-router";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CardSec from "../../Common/Card/CardSec.jsx";


import card1 from "../../assets/Images/card1.webp"
import card2 from "../../assets/Images/card2.webp"
import card3 from "../../assets/Images/card3.webp"
import useJson from "../../Hooks/useJson.js";
export default function HomePolicy() {
  const { isArabic ,t} =useJson();

    return (
      <>
        <TitleSec
          title={t("policy.secTitle")}
          className="text-2xl md:text-5xl font-extrabold"
        />

        <div className="mt-5  ">
          <p
            className={`font-normal ${isArabic ? "" : "font-RobotoCondensed"}   text-md md:text-lg xl:text-xl text-center text-[#2D7A45] leading-10`}
          >
            {t("policy.description")}
          </p>
          <div className="mt-3">
            <Link
              to={"/about"}
              className={`flex items-center justify-center text-[#2D7A45] font-extrabold  text-sm md:text-2xl   ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"}`}
            >
              {t("policy.aboutSec")}
              {isArabic ? (
                <IoIosArrowRoundBack className="md:text-lg xl:text-3xl font-extrabold   " />
              ) : (
                <IoIosArrowRoundForward />
              )}
            </Link>
          </div>
        </div>
        <div
          // className={`flex flex-col md:flex-row items-stretch justify-center gap-4 mt-4 `}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 justify-center lg:grid-cols-3 `}
        >
          <CardSec
            className="p-7 w-full "
            titleClassName={`text-xl ${isArabic ? "md:text-3xl" : "md:text-3xl"}  font-bold text-[#2D7A45] leading-tight pb-2`}
            highlightWord={t("policy.cardTitle1")}
            image={card1}
            description={t("policy.cardDesc1")}
            descriptionClassName={`text-[#2D7A45] font-semibold   ${isArabic ? "text-base lg:text-xl" : "text-sm text-xl font-RobotoCondensed"}`}
          />
          <CardSec
            className="p-7 w-full "
            titleClassName={`text-xl ${isArabic ? "md:text-3xl" : "md:text-3xl"} font-bold text-[#2D7A45] leading-tight pb-2`}
            highlightWord={t("policy.cardTitle2")}
            image={card2}
            description={t("policy.cardDesc2")}
            descriptionClassName={`text-[#2D7A45] font-semibold    ${isArabic ? "text-base lg:text-xl" : "text-sm text-xl font-RobotoCondensed"}`}
          />
          <CardSec
            className="p-7 w-full "
            titleClassName={`text-xl ${isArabic ? "md:text-3xl" : "md:text-3xl"}  font-bold text-[#2D7A45] leading-tight pb-2`}
            highlightWord={t("policy.cardTitle3")}
            image={card3}
            description={t("policy.cardDesc3")}
            descriptionClassName={`text-[#2D7A45] font-semibold     ${isArabic ? "text-base lg:text-xl" : "text-sm lg:text-xl font-RobotoCondensed"}`}
          />
        </div>
      </>
    );
}
