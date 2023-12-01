"use client";
import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import NavbarFive from "../components/Layouts/NavbarFive";
import Footer from "../components/Layouts/Footer";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Bariton - IT Machine Learning React Next Template</title>
      </Head>
      <I18nextProvider i18n={i18n}>
        <NavbarFive />
        <Component {...pageProps} />
        <Footer />
      </I18nextProvider>
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
