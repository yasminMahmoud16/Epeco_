import TitleSec from "../../Common/TitleSec/TitleSec.jsx";

import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import useUrl from "../../Hooks/useUrl.js";
import useJson from "../../Hooks/useJson.js";

export default function HomeService() {

  const { isArabic ,t} =useJson();
  const { baseUrl } = useUrl();
  const galleries = t("services.galleries", { returnObjects: true });


  return (
    <>
      <Link
        to={"/services"}
        className={`flex flex-col justify-center  md:flex-row md:justify-between items-center py-2.5  ${isArabic ? "" : ""}`}
      >
        <div className="flex flex-col  w-auto  ">
          <h5
            className={`text-title text-xl font-semibold pb-2.5   ${isArabic ? "" : "font-RobotoCondensed capitalize"} `}
          >
            {t("services.subTitle")}
          </h5>
          <TitleSec
            title={t("services.secTitle")}
            className={`font-normal  mb-4  text-3xl lg:text-5xl text-[#F0EDE6]  ${isArabic ? "text-right" : "text-left text-2xl"}`}
          />
        </div>
        <div>
          <p
            className={`text-[#F0EDE6] text-sm md:text-base xl:text-2xl font-light ${isArabic ? "" : "font-RobotoCondensed"}`}
          >
            {t("services.description")}
          </p>
        </div>
      </Link>

      {/* Gallery */}

      <div
        className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-4 mt-10"
        dir={isArabic ? "rtl" : "ltr"}
      >
        {galleries.map((gallery) => (
          <Link
            key={gallery.id}
            to={`/services/${gallery.detailsId}`}
            className={`relative overflow-hidden rounded-3xl group  ${
              gallery.size === "tall" ? "row-span-2 " : "aspect-[4/3]"
            }`}
          >
            <img
              className="h-full w-full object-sill"
              src={`${baseUrl}${gallery.galleryimage}`}
              alt={gallery.gallery1}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/85 to-[#7AAB87]/50" />

            <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
              <MdArrowOutward className="h-4 w-4 text-white" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm xl:text-xl leading-tight font-bold text-white">
                {gallery.gallery1}
              </h3>
              <p className="text-sm font-bold text-white mt-1">
                {gallery.galleryDesc1}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
