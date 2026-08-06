import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CardAudience from "./CardAudience.jsx";
import { Link } from "react-router";
import useJson from "../../Hooks/useJson.js";

export default function HomeAudience() {
  const { isArabic ,t} =useJson();

    const items = t("audience.items", { returnObjects: true });

  return (
    <>
      <div
        className={`flex flex-col gap-4 md:flex-row items-center justify-between mb-10`}
      >
        <TitleSec
          title={t("audience.secTitle")}
          className={`text-[#1A2E1D]! text-4xl! font-normal ${isArabic ? "text-right" : "text-left"} `}
        />
        <Link
          to={"/audience"}
          className={`flex items-center justify-center text-[#2D7A45] text-2xl font-light  ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"} `}
        >
          <p>{t("audience.subTitle")}</p>
          {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
        </Link>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 `}
      >
        {items.map((item) => (
          <CardAudience
            className="col-span-1"
            key={item.id}
            title={item.title}
            description={item.description}
            linkText={item.linkText}
            href={"/audience"}

          />
        ))}
      </div>
    </>
  );
}
