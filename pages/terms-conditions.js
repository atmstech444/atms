import React from "react";
import PageBanner from "../components/Common/PageBanner";
import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText={t("header.main")}
        activePageText={t("termsConditions.terms")}
      />

      <div className="text-container ptb-110">
        <div className="container">
          <h4>{t("termsConditions.termsConditions")}</h4>
          <br />
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.time")}
          </p>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text")}
          </p>
          <br />
          <h5>{t("termsConditions.text1")}</h5>
          <h5>{t("termsConditions.text2")}</h5>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text3")}
          </p>
          <br />
          <h5>{t("termsConditions.text2")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text3")}
          </p>
          <br />
          <h5>{t("termsConditions.text4")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text5")}
          </p>
          <br />
          <h5>{t("termsConditions.text6")}</h5>
          <h5>{t("termsConditions.text7")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text8")}
          </p>
          <br />
          <h5>{t("termsConditions.text9")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text10")}
          </p>
          <br />
          <h5>{t("termsConditions.text11")}</h5>
          <h5>{t("termsConditions.text12")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text13")}
          </p>
          <br />
          <h5>{t("termsConditions.text14")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text15")}
          </p>
          <br />
          <h5>{t("termsConditions.text16")}</h5>
          <h5>{t("termsConditions.text17")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text18")}
          </p>
          <br />
          <h5>{t("termsConditions.text19")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text20")}
          </p>
          <br />
          <h5>{t("termsConditions.text21")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text22")}
          </p>
          <br />
          <h5>{t("termsConditions.text23")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text24")}
          </p>
          <br />
          <h5>{t("termsConditions.text25")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text26")}
          </p>
          <br />
          <h5>{t("termsConditions.text27")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text28")}
          </p>
          <br />
          <h5>{t("termsConditions.text29")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text30")}
          </p>
          <br />
          <h5>{t("termsConditions.text31")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("termsConditions.text32")}
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
