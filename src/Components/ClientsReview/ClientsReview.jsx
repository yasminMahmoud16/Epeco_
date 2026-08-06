import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import { FaStar } from "react-icons/fa6";
import useJson from "../../Hooks/useJson.js";

export default function ClientsReview() {
  const { isArabic ,t} =useJson();


      const reviews = t("clients.reviews", {
        returnObjects: true,
      });
  return (
    <>
      <div className="my-10 md:mt-5 flex flex-col gap-6 items-center ">
        <TitleSec
          title={t("clients.question")}
          className="text-[#F0EDE6] font-normal leading-tight"
        />

        <p className="font-normal text-lg xl:text-xl text-center text-[#7AAB87] leading-10">
          {t("clients.questionSub")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-2xl border border-[#2D7A45]/50 p-5 ${
              rev.color === "dark" ? "bg-[#0F2E1D]" : "bg-[#5FCF8080]"
            }`}
          >
            {/* Stars */}
            <div className="flex  gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#EFA027] shrink-0 " />
              ))}
            </div>

            {/* Review */}
            <p
              className={`flex-1 t  text-sm md:text-base leading-9 tracking-wider font-bold line-clamp-6 text-justify ${
                rev.color === "dark" ? "text-[#F0EDE6]" : "text-white"
              }  ${isArabic?"text-right justify-end":"text-left justify-start"}`}
            >
              {rev.review}
            </p>

            <hr className={`mt-5 border-white`} />
          </div>
        ))}
      </div>
    </>
  );
  
}
