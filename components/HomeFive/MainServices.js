import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MainServices = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <img className="icon-image" src="/images/icons/browser.png" />
                </div>
                <h3>
                  <Link href="/service-details">{t("aboutUs.website")}</Link>
                </h3>
                <p>{t("aboutUs.website1")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <img
                    className="icon-image"
                    src="/images/icons/admin-alt.png"
                  />
                </div>
                <h3>
                  <Link href="/service-details">{t("aboutUs.adminpanel")}</Link>
                </h3>
                <p>{t("aboutUs.adminpanel1")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <img
                    className="icon-image"
                    src="/images/icons/paintbrush-pencil.png"
                  />
                </div>
                <h3>
                  <Link href="/service-details">{t("aboutUs.logos")}</Link>
                </h3>
                <p>{t("aboutUs.logos1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
