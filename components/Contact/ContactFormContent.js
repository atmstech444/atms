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
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
