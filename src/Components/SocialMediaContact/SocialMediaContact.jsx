import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaTiktok,
    FaFacebookF,
} from "react-icons/fa6";
import KSA from "../../assets/Images/السعوديه.webp";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useJson from "../../Hooks/useJson.js";

export default function SocialMediaContact() {
    const { isArabic, t } = useJson();

    const emails = t(
        "contactInfo.email.emails",
        {
            returnObjects: true,
        },
    );
    const phones = t("contactInfo.complaints.phones", {
        returnObjects: true,
    });
    const headsNums = t("contactInfo.headOffice.phones", {
        returnObjects: true,
    });
    const easternRegionPhones = t("contactInfo.easternRegion.phones", {
      returnObjects: true,
    });


    return (
      <>
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6 md:space-y-8">
          {/* Intro paragraph */}
          <p
            className={`text-body leading-[1.8] text-sm md:text-lg text-[#1A5C2C] font-normal   ${isArabic ? "text-right" : "text-left"}  max-w-2xl`}
          >
            {t("contactInfo.successMessage")}
          </p>

          {/* Email + Complaints cards */}
          <div className="grid grid-cols-1   lg:grid-cols-2 gap-3 md:gap-4">
            {/*  complains  */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3
                className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
              >
                {t("contactInfo.complaints.title")}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {phones.map((phone, index) => (
                  <div
                    dir="ltr"
                    key={index}
                    className="flex items-center justify-start gap-2"
                  >
                    <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />

                    <span
                      className="text-xs md:text-sm text-[#1A5C2C] font-semibold"
                      dir="ltr"
                    >
                      {phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* email*/}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3
                className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
              >
                {t("contactInfo.email.title")}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {emails.map((email) => (
                  <div
                    dir="ltr"
                    className="flex items-center justify-start gap-2"
                  >
                    <HiOutlineMail className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />
                    <span className="text-xs md:text-sm text-[#1A5C2C] font-semibold truncate text-left">
                      {email}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Head office and eastern region*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {/* Head office */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col  gap-3 mb-3 md:mb-4">
                <h3
                  className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {t("contactInfo.headOffice.title")}
                </h3>
                <div
                  dir="ltr"
                  className="flex items-center justify-start gap-1 text-xs md:text-sm text-gray-500"
                >
                  <HiOutlineLocationMarker className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />
                  <p className="font-semibold text-[#1A5C2C]">
                    {t("contactInfo.headOffice.address")}
                  </p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {headsNums.map((phone) => (
                    <div
                      dir="ltr"
                      className="flex items-start  justify-start gap-2"
                    >
                      <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />
                      <p
                        className="text-xs md:text-sm text-[#1A5C2C] font-semibold"
                        dir="ltr"
                      >
                        {phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* eastern region  */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col   gap-3 mb-3 md:mb-4">
                <h3
                  className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {t("contactInfo.easternRegion.title")}
                </h3>
                <div
                  dir="ltr"
                  className="flex items-center justify-start gap-1 text-xs md:text-sm text-gray-500 "
                >
                  <HiOutlineLocationMarker className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />
                  <p className="font-semibold text-[#1A5C2C]">
                    {t("contactInfo.easternRegion.address")}
                  </p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div dir="ltr" className="flex   flex-col  gap-2">
                    {/* ================================================== */}

                    {easternRegionPhones.map((phone, index) => (
                      <>
                        <div className="flex items-center gap-2">
                          <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />

                          <p
                            key={index}
                            className="text-xs md:text-sm text-[#1A5C2C] font-semibold"
                            dir="ltr"
                          >
                            {phone}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    dir="ltr"
                    className="flex items-center justify-start gap-2"
                  >
                    <HiOutlineMail className="h-4 w-4 md:h-5 md:w-5 text-[#1A5C2C] shrink-0" />
                    <span className="text-xs md:text-sm text-[#1A5C2C] font-semibold">
                      {t("contactInfo.easternRegion.email")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* workingHours*/}
          <div
            className={`border border-gray-200 rounded-2xl p-4 md:p-6 ${isArabic ? "text-right" : "text-left"} `}
          >
            <h3
              className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
            >
              {t("contactInfo.workingHours.title")}
            </h3>
            <p className="text-xs md:text-sm text-[#1A2E1D] font-se leading-6 md:leading-7 font-bold">
              {t("contactInfo.workingHours.days")}
            </p>
            <p className="text-[#1A5C2C] text-xs md:text-sm leading-6 md:leading-7 font-bold">
              {t("contactInfo.workingHours.hours")}
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <p
              className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
            >
              {t("contactInfo.social.title")}
            </p>
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <a
                href="https://www.instagram.com/purity.2026?igsh=MTdzeTR1bW05ajVhdw%3D%3D"
                target="_blank"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/%D9%86%D9%82%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9/"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@user84468527433581?_r=1&_t=ZS-96zOHLxP7A4"
                target="_blank"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577546652007&rdid=CzTTaLRk8I7aQMNR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CnxPoE28x%2F#"
                target="_blank"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src={KSA}
            alt="Saudi Arabia"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </>
    );
    
}
