import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h2>{t("aboutUs.title")}</h2>
              <p>{t("aboutUs.descrp")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
