import React from "react";
import Link from "next/link";
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
                  <i className="flaticon-income"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.back")}</Link>
                </h3>
                <p>.Net, Python, PHP, Node</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="flaticon-automatic"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.front")}</Link>
                </h3>
                <p>Mark Up, React, Nextjs,</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="flaticon-locked"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.mobile")}</Link>
                </h3>
                <p>Android, iOS, React Native, .NET Maui</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.design")}</Link>
                </h3>
                <p>UX Design, UI Design, Graphic Design</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.manage")}</Link>
                </h3>
                <p>
                  Agile Project Management · Product Management · Cloud
                  Application Development · CI/CD
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.data")}</Link>
                </h3>
                <p>Linux · SysAdmin · DevOps / Cloud Services</p>
              </div>
            </div>
            <h1 className="mb-5 mt-4">{t("services.marketing")}</h1>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="fas fa-database"></i>
                </div>

                <h3>
                  <Link href="/service-details">{t("services.digital")}</Link>
                </h3>
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

                <h3>
                  <Link href="/service-details">{t("services.content")}</Link>
                </h3>
                <p>Video Production · Campaign Creation · Creative</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "250px" }}>
                <div className="icon">
                  <i className="fas fa-project-diagram"></i>
                </div>

                <h3>
                  <Link href="/service-details">
                    {t("services.marketdesign")}
                  </Link>
                </h3>
                <p>
                  Branding & Art Direction · Motion Design · Illustration ·
                  Graphic Design
                </p>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
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
