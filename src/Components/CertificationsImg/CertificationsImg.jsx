
import certification1 from "../../assets/Images/certification1.webp";
import certification2 from "../../assets/Images/certification2.webp";
import useJson from "../../Hooks/useJson.js";
export default function CertificationsImg() {
  const { isArabic } =useJson();

    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-36 items-center justify-center ">
          <div className={` md:w-md md:pl-0  ${isArabic ? "" : "pr-10 "}`}>
            <img
              src={certification2}
              alt="Certification 1"
              loading="lazy"
              className="w-full  object-contain rounded-lg"
            />
          </div>

          <div className="pb-8 md:w-sm">
            <img
              src={certification1}
              alt="Certification 2"
              loading="lazy"
              className="w-full  object-contain rounded-lg"
            />
          </div>
        </div>
      </>
    );
}
