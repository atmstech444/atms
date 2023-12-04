import React from "react";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeOne/Services";
import Team from "../components/Common/Team";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageBanner
        pageTitle={t("header.about")}
        homePageUrl="/"
        homePageText={t("header.main")}
        activePageText={t("header.about")}
        bgImgClass="item-bg1"
      />

      <AboutContact />

      <Services />

      <Team />

      <PartnerContent />

      <FeedbackSlider />

      {/*<PricingCard />

      <FreeTrialForm />
  */}
    </>
  );
};

export default About;
