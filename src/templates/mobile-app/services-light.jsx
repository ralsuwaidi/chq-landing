/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import appData from '../../data/app.json'
import Head from "next/head";
import LightTheme from "../../layouts/Light";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Services8 from "../../components/Services8/services8";
import PricePackages from "../../components/Price-packages/price-packages";
import Footer2 from "../../components/Footer2/footer2";
import Statistics from "../../components/Statistics/statistics";
import Faq from "../../components/Faq/faq";
import PageHeader2 from "../../components/Page-header2/page-header2";

const MobileAppServicesLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
    logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LightTheme mobileappstyle>
        <NavbarMobileApp nr={navbarRef} lr={logoRef} />
        <PageHeader2
          title="Popular Services"
          links={[
            { id: 1, name: "Home", url: "/" },
            { id: 2, name: "Services", url: "/mobile-app/services-dark" },
          ]}
        />
        <Services8 />
        <Statistics LightTheme />
        <PricePackages bgGray />
        <Faq />
        <Footer2 />
      </LightTheme>
    </>
  );
};

export default MobileAppServicesLight;
