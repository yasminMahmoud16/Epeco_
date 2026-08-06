import useJson from "../../Hooks/useJson.js";

export default function ArticleList({ mainTitle, list, activeSlug, onSelect ,activeId="" }) {

  const { isArabic } =useJson();

    return (
      <>
        <div className="flex flex-col ">
          <div className=" text-sm font-medium text-heading bg-neutral-primary-soft border-[0.5px] border-[#DBE1DD]  xl:w-2xs ">
            <p className="block w-full px-4 py-2 text-lg font-bold text-white bg-[#1A5C2C] border-b border-default rounded-t-base cursor-pointer">
              {mainTitle}
            </p>

            {Array.isArray(list) &&
              list.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.slug)}
                  className={`flex items-center tracking-wider   ${isArabic ? "justify-start text-right" : "justify-start text-left"}  text-sm leading-[1.65] font-bold w-full px-4 py-2  cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none 
                  ${
                    item.slug === activeSlug || item.id === activeId
                      ? "text-title"
                      : ""
                  }
            ${index !== list.length - 1 ? "border-b-[0.5px] border-[#DBE1DD] " : ""}`}
                >
                  {item.label}
                </button>
              ))}
          </div>
        </div>
      </>
    );

}
