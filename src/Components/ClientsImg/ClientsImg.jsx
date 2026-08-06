import client1 from "../../assets/Images/client1.webp";
import client2 from "../../assets/Images/client2.webp";
import client3 from "../../assets/Images/client3.webp";
import client4 from "../../assets/Images/client4.webp";
import client5 from "../../assets/Images/client5.webp";
import client6 from "../../assets/Images/client6.webp";
import client7 from "../../assets/Images/client7.webp";
import client8 from "../../assets/Images/client8.webp";
import client9 from "../../assets/Images/client9.webp";
import client10 from "../../assets/Images/client10.webp";
import client11 from "../../assets/Images/client11.webp";
import client12 from "../../assets/Images/client12.webp";
import client13 from "../../assets/Images/client13.webp";
import client14 from "../../assets/Images/client14.webp";
import client15 from "../../assets/Images/client15.webp";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
export default function ClientsImg() {
        const { t } = useTranslation();
    
    const images = [
        {
            src: client1,
            alt: "client1",
        },
        {
            src: client2,
            alt: "client2",
        },
        {
            src: client3,
            alt: "client3",
        },
        {
            src: client4,
            alt: "client4",
        },
        {
            src: client5,
            alt: "client5",
        },
        {
            src: client6,
            alt: "client6",
        },
        {
            src: client7,
            alt: "client7",
        },
        {
            src: client8,
            alt: "client8",
        },
        {
            src: client9,
            alt: "client9",
        },
        {
            src: client10,

            alt: "client10",
        },
        {
            src: client11,

            alt: "client11",
        },
        {
            src: client12,

            alt: "client12",
        },
        {
            src: client13,

            alt: "client13",
        },
        {
            src: client14,

            alt: "client14",
        },
        {
            src: client15,

            alt: "client15",
        },
    ];
    return (
      <>
        <div className=" flex flex-wrap items-center justify-center gap-12">
          {images.map((img, index) => (
            <Link to={t("navbarPath.clientsDetails")}>
              <img key={index} src={img.src} alt={img.alt} loading="lazy" className="w-50 h-24 object-contain" />
            </Link>
          ))}
        </div>
      </>
    );
}
