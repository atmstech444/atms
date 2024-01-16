import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText={t("header.main")}
        activePageText={t("privacyPolice.privacyPolice")}
      />

      <div className="text-container ptb-110">
        <div className="container">
          <h4>{t("privacyPolice.privacyPolice")}</h4>
          <br />
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.time")}
          </p>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text")}
          </p>
          <br />
          <h5>{t("privacyPolice.text1")}</h5>
          <h5>{t("privacyPolice.text2")}</h5>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text3")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text5")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text7")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text9")}
          </p>

          <br />
          <h5>{t("privacyPolice.text12")}</h5>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text13")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text15")}
          </p>

          <br />
          <h5>{t("privacyPolice.text18")}</h5>
          <p>{t("privacyPolice.text19")}</p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text20")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text22")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text24")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text26")}
          </p>

          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text28")}
          </p>

          <br />
          <h5>{t("privacyPolice.text30")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text31")}
          </p>
          <br />
          <h5>{t("privacyPolice.text32")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text33")}
          </p>
          <br />

          <h5>{t("privacyPolice.text34")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text35")}
          </p>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text36")}
          </p>
          <br />
          <h5>{t("privacyPolice.text37")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text38")}
          </p>
          <br />
          <h5>{t("privacyPolice.text39")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text40")}
          </p>
          <br />
          <h5>{t("privacyPolice.text41")}</h5>
          <p style={{ fontSize: "16px", margin: "0px" }}>
            {t("privacyPolice.text42")}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
