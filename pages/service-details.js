import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";

const ServiceDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle="Security & Surveillance"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImgClass="item-bg2"
      />

      <ServiceDetailsContent />
    </>
  );
};

export default ServiceDetails;
