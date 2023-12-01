import React from "react";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";

const Faq = () => {
  return (
    <>
      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImgClass="item-bg1"
      />

      <FaqContent />
    </>
  );
};

export default Faq;
