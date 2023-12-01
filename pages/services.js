import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ServicesContent from "../components/Services/ServicesContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";

const Services = () => {
  return (
    <>
      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        bgImgClass="item-bg1"
      />

      <ServicesContent />

      <FeedbackSlider />
    </>
  );
};

export default Services;
