import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 ml-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/white-logo.png" alt="image" />
                  </Link>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>{t("header.services")}</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services">{t("footer.design")}</Link>

                  </li>
                  <li>
                    <Link href="/services">{t("footer.desktopApp")}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t("footer.mobileApp")}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t("services.digital")}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t("services.content")}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t("services.data")}</Link>

                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>{t("footer.quickLinks")}</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">{t("header.about")}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t("header.contact")}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t("header.services")}</Link>
                  </li>
                  <li>
                    <Link href="/projects">{t("header.projects")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>{t("header.contact")}</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>{t("footer.address")}:</span>
                    {t("footer.address1")}
                  </li>
                  <li>
                    <span>{t("footer.email")}:</span>
                    {t("footer.email1")}
                  </li>
                  <li>
                    <span>{t("footer.phone")}:</span>
                    {t("footer.phone1")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Bariton. {t("footer.rights")}.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">{t("footer.policy")}</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">{t("footer.terms")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
