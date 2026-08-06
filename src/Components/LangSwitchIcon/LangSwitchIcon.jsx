import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

export default function LangSwitchIcon() {

      const { i18n } = useTranslation();
    
      const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
      };
    return (
      <>
        <div
          onClick={toggleLanguage}
          className=" w-12 h-12 flex items-center justify-center  relative group"
        >
          <CiGlobe className="text-title w-8 h-8 md:w-10 md:h-8 transition-all duration-300 ease-in-out group-hover:text-green-800 group-hover:cursor-pointer " />
          <span className="absolute top-8 left-7 md:top-8 md:right-6 transition-all duration-300 ease-in-out  text-title font-semibold group-hover:text-green-800 group-hover:cursor-pointer  ">
            {i18n.language === "ar" ? "En" : "ع"}
          </span>
        </div>
      </>
    );
}
