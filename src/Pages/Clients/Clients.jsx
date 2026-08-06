import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import TitleSec from "../../Common/TitleSec/TitleSec.jsx";
import ClientsImg from "../../Components/ClientsImg/ClientsImg.jsx";
import ClientsReview from "../../Components/ClientsReview/ClientsReview.jsx";
import { Link } from "react-router";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import useJson from "../../Hooks/useJson.js";


export default function Clients() {

  const { isArabic ,t} =useJson();



    return (
      <>
        <section className="bg-[#F5F0E8] pt-20 md:pt-0">
          <div className="hidden md:block w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
            <ArticleSubNav
              mainTitle={t("clients.mainTitle")}
              main={t("clients.main")}
            />

            <TitleSec
              title={t("clients.mainTitle")}
              className={`hidden md:block ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl mt-2`}
            />
          </div>

          <div className="flex flex-col gap-6 items-center pt-5 ">
            <div className={`hidden absolute  ${isArabic?"":"right-8"}  pt-5 pl-10 lg:flex items-center justify-end w-full `}>
              <Link
                to={"/clients/clients-Details"}
                className={`  flex items-center justify-center text-[#2D7A45] text-2xl font-light  ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"} `}
              >
                {t("clients.link")}
                {isArabic ? (
                  <IoIosArrowRoundBack />
                ) : (
                  <IoIosArrowRoundForward />
                )}
              </Link>
            </div>
            <TitleSec
              title={t("clients.title")}
              className="text-title font-normal leading-none text-3xl md:text-5xl mt-3 md:mt-0  "
            />

            <p className="font-normal text-lg  px-4 xl:text-xl text-center text-[#1A5C2C] leading-10 md:pt-4">
              {t("clients.description")}
            </p>
          </div>

          <div className=" flex items-center justify-center my-6 px-5">
            <ClientsImg />
          </div>
          <div className=" lg:hidden   pt-5  flex items-center justify-center w-full  ">
            <Link
              to={"/clients/clients-Details"}
              className={`  flex items-center justify-center text-[#2D7A45] text-2xl font-light  ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : " duration-300 transition-all ease-in-out hover:translate-x-2 "} `}
            >
              {t("clients.link")}
              {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
            </Link>
          </div>
          <div className=" bg-[#0D1A10] flex flex-col items-center justify-center my-6 px-20 py-6">
            <ClientsReview />
          </div>
        </section>
      </>
    );
}
