import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import TitleSec from "../../Common/TitleSec/TitleSec.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx";
import SocialMediaContact from "../../Components/SocialMediaContact/SocialMediaContact.jsx";
import useJson from "../../Hooks/useJson.js";


export default function Contact() {
  const { isArabic ,t} =useJson();

    return (
      <>
        <section className="">
          {/* first part */}
          <div className="hidden md:block w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
            <ArticleSubNav
              mainTitle={t("contact.mainTitle")}
              main={t("contact.main")}
            />

            <TitleSec
              title={t("contact.mainTitle")}
              className={`hidden md:block ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl mt-2`}
            />
          </div>

          {/* Second part */}
          <div className="mt-16 md:mt-0 flex flex-col md:flex-row bg-white py-6 px-14">
            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
            <div className="w-full md:w-1/2 ">
              <SocialMediaContact />
            </div>
          </div>


        </section>
      </>
    );
}
