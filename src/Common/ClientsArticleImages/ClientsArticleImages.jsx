import useUrl from "../../Hooks/useUrl.js";

export default function ClientsArticleImages({ activeItem }) {
  const { baseUrl } = useUrl();

  const images = activeItem?.images ?? [];

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* {images.length > 0 && ( */}
      {/* <div className="flex  gap-4 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm h-48 sm:h-56 lg:h-64 "
            >
              <img
                src={`${baseUrl}${image}`}
                alt={activeItem.label}
                loading="lazy"
                className="h-full w-auto object-fit"
              />
            </div>
          ))}
        </div> */}

      <div className="flex gap-4 justify-center items-center">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm h-48 sm:h-56 lg:h-64"
            >
              <img
                src={`${baseUrl}${image}`}
                alt={activeItem.label}
                loading="lazy"
                className="h-full w-auto object-cover"
              />
            </div>
          ))
        ) : (
          <div className="h-48 sm:h-56 lg:h-40 w-180 "></div>
        )}
      </div>

      {activeItem?.logo && (
        <div className="w-45 h-40 sm:w-45 sm:h-40 shrink-0 flex items-center justify-center rounded-2xl  bg-white p-3">
          <img
            src={`${baseUrl}${activeItem.logo}`}
            alt={`${activeItem.label} logo`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
