import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{t("aboutUs.whatwedo")}</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-box about-box">
                <div className="icon ">
                  <img className="icon-image" src="/images/icons/browser.png" />
                </div>

                <h3>
                  <Link href="/service-details">{t("aboutUs.website")}</Link>
                </h3>
                <p>{t("aboutUs.website1")}</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-box about-box">
                <div className="icon ">
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

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-services-box about-box">
                <div className="icon ">
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

        {/* Shape Images */}
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
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
