import { AiOutlineMail } from "react-icons/ai";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import { FiPrinter } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ArticleDescription from "../../Common/ArticleDescription/ArticleDescription.jsx";
import ArticleList from "../../Common/ArticleList/ArticleList.jsx";
import ClientsArticleImages from "../../Common/ClientsArticleImages/ClientsArticleImages.jsx";


export default function ClientsDetails() {
    const { t } = useTranslation();
    const list = t("clientsArticle.list", { returnObjects: true });
    const mainTitle = t("clientsArticle.mainTitle");

    const [activeSlug, setActiveSlug] = useState(
        Array.isArray(list) && list.length > 0 ? list[0].slug : null,
    );

    const activeItem = Array.isArray(list)
        ? list.find((item) => item.slug === activeSlug)
        : null;
    return (
      <>
        <div className="w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
          <ArticleSubNav
            slug={activeItem?.label}
            main={t("clientsArticle.main")}
            mainTitle={t("clientsArticle.mainTitle")}
          />
          <div className=" flex  mt-6 md:flex-row-reverse gap-1.5 items-center">
            <AiOutlineMail className="text-[#1A5C2C]" />
            <FiPrinter
              className="text-[#1A5C2C] hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#31974d]"
              onClick={() => window.print()}
            />
          </div>
        </div>

        <section className="flex flex-col lg:flex-row gap-8 py-6 px-16 bg-white">
          <div className="shrink-0">
            <ArticleList
              mainTitle={mainTitle}
              list={list}
              activeSlug={activeSlug}
              onSelect={setActiveSlug}
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <ClientsArticleImages activeItem={activeItem} />

            <ArticleDescription list={list} activeSlug={activeSlug} />
          </div>
        </section>
      </>
    );
}
