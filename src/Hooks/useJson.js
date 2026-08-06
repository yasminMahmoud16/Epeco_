import { useTranslation } from "react-i18next";
import i18n from "../Utils/i18n/i18n.js";

export default function useJson() {
    const { t } = useTranslation();
    const isArabic = i18n.language === "ar";

    
    return { t, isArabic }
}
