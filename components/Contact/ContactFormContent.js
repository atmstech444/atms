import React from "react";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const ContactFormContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{t("contact.dropUsMessage")}</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/page-title-bg2.svg" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          {/* <div className="contact-info">
            <div className="contact-info-content">
              <h2>
                <div>
                  <i class="fa-solid fa-phone icon-2"></i>
                  <span className="number">+995322040040</span>
                </div>
                <span className="or"></span>
                <div>
                  <i class="fa-solid fa-envelope icon-2"></i>
                  <span className="email">business@atms.ge</span>
                </div>
              </h2>

              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
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
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
