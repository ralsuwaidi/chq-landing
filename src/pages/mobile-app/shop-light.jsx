/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import appData from "../../data/app.json";
import LightTheme from "../../layouts/Light";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Footer2 from "../../components/Footer2/footer2";
import PageHeader2 from "../../components/Page-header2/page-header2";
import Shop from "../../components/Shop/shop";

const ShopLight = () => {
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
          title="Shop"
          links={[
            { id: 1, name: "Home", url: "/" },
            {
              id: 2,
              name: "Shop",
              url: "/mobile-app/shop-Light",
            },
          ]}
        />
        <Shop />
        <Footer2 />
      </LightTheme>
    </>
  );
};

export default ShopLight;
