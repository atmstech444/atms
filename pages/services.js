import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ServicesContent from "../components/Services/ServicesContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageBanner
        pageTitle={t("header.services")}
        homePageUrl="/"
        homePageText={t("header.main")}
        activePageText={t("header.services")}
        bgImgClass="item-bg1"
      />

      <ServicesContent />

      <FeedbackSlider />
    </>
  );
};

export default Services;
