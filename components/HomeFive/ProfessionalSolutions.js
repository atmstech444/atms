import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProfessionalSolutions = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{t("services.offer")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src="/images/back.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.back")}</Link>
                </h3>
                <p>.Net, Python, PHP, Node</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box active">
                <div className="icon">
                  <img src="/images/front.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.front")}</Link>
                </h3>
                <p>Mark Up, React, Nextjs,</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src="/images/mobile.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.mobile")}</Link>
                </h3>
                <p>Android, iOS, React Native, .NET Maui</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src="/images/designer.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.design")}</Link>
                </h3>
                <p>UX Design, UI Design, Graphic Design</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src="/images/delivery.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.manage")}</Link>
                </h3>
                <p>
                  Agile Project Management · Product Management · Cloud
                  Application Development · CI/CD
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src="/images/sistem.png" />
                </div>
                <h3>
                  <Link href="/services">{t("services.data")}</Link>
                </h3>
                <p>Linux · SysAdmin · DevOps / Cloud Services</p>
              </div>
            </div>
            <div>
              <Link href="/services" className="btn btn-primary">
                {t("services.more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalSolutions;
