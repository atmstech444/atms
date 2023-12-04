import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image text-center">
                <img src="/images/team-smile.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2>{t("aboutUs.whyChooseUs")}</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>{t("aboutUs.innovation")}</h3>
                      <p>{t("aboutUs.innovation1")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>{t("aboutUs.collaboration")}</h3>
                      <p>{t("aboutUs.collaboration1")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>{t("aboutUs.quality")}</h3>
                      <p>{t("aboutUs.quality1")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>{t("aboutUs.customer")}</h3>
                      <p>{t("aboutUs.customer1")}</p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="btn btn-primary">
                  {t("aboutUs.moreAboutUs")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
