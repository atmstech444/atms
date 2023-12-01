import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        pageTitle={t("contact.contact")}
        homePageUrl="/"
        homePageText={t("contact.home")}
        activePageText={t("contact.contact")}
        bgImgClass="item-bg3"
      />

      <ContactFormContent />
    </>
  );
};

export default Contact;
