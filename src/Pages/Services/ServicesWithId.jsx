import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import { AiOutlineMail } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";
// import { MdArrowOutward } from "react-icons/md";
import ArticleList from "../../Common/ArticleList/ArticleList.jsx";
import ArticleDescriptionWithId from "../../Common/ArticleDescription/ArticleDescriptionWithId.jsx";

export default function ServicesWithId() {
  const { t } = useTranslation();
  const { id } = useParams(); 

  const list = t("servciesArticle.list", { returnObjects: true });
  const mainTitle = t("servciesArticle.mainTitle");

  // Derived directly on every render — id from URL decides which item is active
  const activeId = id
    ? Number(id)
    : Array.isArray(list) && list.length > 0
      ? list[0].id
      : null;

  const activeItem = Array.isArray(list)
    ? list.find((item) => item.id === activeId)
    : null;

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
        <ArticleSubNav
          slug={activeItem?.label}
          mainTitle={t("servciesArticle.mainTitle")}
          main={t("servciesArticle.main")}
        />
        <div className="flex mt-6 md:flex-row-reverse gap-1.5 items-center">
          <a
            href="mailto:Purity@geters-ksa.com"
            className="hover:text-[#1A5C2C] transition-colors cursor-pointer"
          >
            <AiOutlineMail className="text-[#1A5C2C] cursor-pointer hover:text-[#31974d]" />
          </a>
          <FiPrinter className="text-[#1A5C2C]" />
          {/* <MdArrowOutward className="text-[#1A5C2C]" /> */}
        </div>
      </div>
      <section className="flex flex-col lg:flex-row gap-8 py-6 px-16 bg-white">
        <div className="shrink-0">
          <ArticleList
            mainTitle={mainTitle}
            list={list}
            activeId={activeId}
            onSelect={(slug) => {
              const item = list.find((i) => i.slug === slug);
              if (item) {
                navigate(`/services/${item.id}`);
              }
            }}
          />
        </div>

        <div className="flex-1">
          <ArticleDescriptionWithId list={list} activeId={activeId} />
        </div>
      </section>
    </>
  );
}
