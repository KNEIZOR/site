import { useTranslation } from "react-i18next";
import React from "react";

const AboutPage = () => {
    const { t } = useTranslation("about");

    return <div>{t("О сайте")}</div>;
};

export default AboutPage;
