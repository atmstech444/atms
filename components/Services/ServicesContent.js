import React from "react";
import { useTranslation } from "react-i18next";

const ServicesContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/back.png" />
                </div>

                <h3>{t("services.back")}</h3>
                <p>.Net, Python, PHP, Node</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/front.png" />
                </div>

                <h3>{t("services.front")}</h3>
                <p>Mark Up, React, Nextjs,</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/mobile.png" />
                </div>

                <h3>{t("services.mobile")}</h3>
                <p>Android, iOS, React Native, .NET Maui</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/designer.png" />
                </div>

                <h3>{t("services.design")}</h3>
                <p>UX Design, UI Design, Graphic Design</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/delivery.png" />
                </div>

                <h3>{t("services.manage")}</h3>
                <p>
                  Agile Project Management · Product Management · Cloud
                  Application Development · CI/CD
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <img src="/images/sistem.png" />
                </div>

                <h3>{t("services.data")}</h3>
                <p>Linux · SysAdmin · DevOps / Cloud Services</p>
              </div>
            </div>
            <h1 className="mb-5 mt-4">{t("services.marketing")}</h1>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="fas fa-database"></i>
                </div>

                <h3>{t("services.digital")}</h3>
                <p>
                  Social Media Advertising · PPC Campaigns · Search Engine
                  Optimisation
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>

                <h3>{t("services.content")}</h3>
                <p>Video Production · Campaign Creation · Creative</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="fas fa-project-diagram"></i>
                </div>

                <h3>{t("services.marketdesign")}</h3>
                <p>
                  Branding & Art Direction · Motion Design · Illustration ·
                  Graphic Design
                </p>
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

export default ServicesContent;
