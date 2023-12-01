import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { useTranslation } from "react-i18next";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, number, subject, text } = contact;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("subject", subject);
      formData.append("text", text);
      const response = await axios.post(
        "https://atms.ge/contact.php",
        formData
      );
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder={t("contact.email")}
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder={t("contact.phoneNumber")}
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t("contact.subject")}
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder={t("contact.message")}
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              {t("contact.send")}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
