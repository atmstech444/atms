import React from "react";
import { useTranslation } from "react-i18next";
const AboutContact = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about1.jpg" alt="image" />
                <img src="/images/about/about2.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>{t("aboutUs.title")}</h2>
                <p>{t("aboutUs.descrp")}</p>
                <h4 className="mt-4">{t("aboutUs.who")}:</h4>
                <p>{t("aboutUs.who1")}</p>
              </div>
            </div>
          </div>
          <h2 className="mt-5 text">{t("aboutUs.whyus")}:</h2>
          <div className="about-inner-area">
            <div className="row row-cols-1 row-cols-sm-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>{t("aboutUs.innovation")}</h3>
                  <p>{t("aboutUs.innovation1")}</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>{t("aboutUs.collaboration")}</h3>
                  <p>{t("aboutUs.collaboration1")}</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>{t("aboutUs.quality")}</h3>
                  <p>{t("aboutUs.quality1")}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>{t("aboutUs.customer")}</h3>
                  <p>{t("aboutUs.customer1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
