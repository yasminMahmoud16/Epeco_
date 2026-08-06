import useJson from "../../Hooks/useJson.js";
import useUrl from "../../Hooks/useUrl.js";

export default function ArticleDescription({ list, activeSlug , imageClassName = "",
  overlayClassName = "",}) {
  const activeItem = Array.isArray(list)
    ? list.find((item) => item.slug === activeSlug)
    : null;

  const { baseUrl } = useUrl();
  const { isArabic } =useJson();


  return (
    <>
      <div className="">
        {activeItem ? (
          <div className=" flex flex-col">
            <div className="flex flex-col sm:flex-row-reverse gap-6">
              <div className="flex-1 space-y-4 w-fit">
                <h2
                  className={`  text-heading mb-8 text-title  leading-12 ${isArabic ? "font-normal text-3xl md:text-4xl" : " font-medium text-3xl md:text-4xl leading-[1.62] "}`}
                >
                  {activeItem.label}
                </h2>
                {activeItem.style === "bulleted" ? (
                  <>
                    <p className="text-body  leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify">
                      {activeItem.intro}
                    </p>
                    <p className="text-body leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify">
                      {activeItem.intro2}
                    </p>
                    <p className="text-body leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify">
                      {activeItem.intro3}
                    </p>

                    <ul className="space-y-3 text-body text-sm md:text-xl text-[#1A2E1D] text-justify">
                      {activeItem.paragraphs[0].map((segment, index) => (
                        <li
                          key={index}
                          className={`flex items-start gap-1.5 text-justify`} // adjust gap-1.5 to taste
                        >
                          <span className={`mt-2 h-2 w-2 shrink-0 bg-[#1A5C2C] ${isArabic ? "ml-2" : "mr-2"}`} />{" "}
                          {/* the square bullet */}
                          <span className="flex-1 ">
                            {segment.type === "highlight" ? (
                              <strong className="font-bold text-[#EFA027]">
                                {segment.text}
                              </strong>
                            ) : (
                              segment.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {Array.isArray(activeItem.ending) ? (
                      activeItem.ending.map((item, index) =>
                        typeof item === "string" ? (
                          <p
                            key={index}
                            className="text-body leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify"
                          >
                            {item}
                          </p>
                        ) : (
                          <ul
                            key={index}
                            className="list-disc list-inside text-body text-sm md:text-xl text-[#1A2E1D]"
                          >
                            <li>{item.text}</li>
                          </ul>
                        ),
                      )
                    ) : (
                      <p className="text-body leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify">
                        {activeItem.ending}
                      </p>
                    )}
                  </>
                ) : (
                  activeItem.paragraphs.map((paragraph, id) => (
                    <p
                      key={id}
                      className="text-body leading-[1.65] text-sm md:text-xl text-[#1A2E1D] font-normal text-justify"
                    >
                      {paragraph.map((segment, sid) =>
                        segment.type === "highlight" ? (
                          <strong
                            key={sid}
                            className="font-bold text-[#EFA027]"
                          >
                            {segment.text}
                          </strong>
                        ) : (
                          <span key={sid}>{segment.text}</span>
                        ),
                      )}
                    </p>
                  ))
                )}
              </div>
              {activeItem.image && (
                <div className=" relative  w-65 h-100 overflow-hidden rounded-3xl shadow">
                  <img
                    className={`h-full w-full object-cover  ${imageClassName}`}
                    src={`${baseUrl}${activeItem.image}`}
                    alt={activeItem.label}
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0  ${overlayClassName}`}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-body">Select an item</p>
        )}
      </div>
    </>
  );
}
