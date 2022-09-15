/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Footer2 from "../../components/Footer2/footer2";
import PageHeader2 from "../../components/Page-header2/page-header2";
import Works4 from "../../components/Works4/works4";

const MobileAppPricingPlanDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
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
      <DarkTheme mobileappstyle>
        <NavbarMobileApp nr={navbarRef} />
        <PageHeader2
          title="Latest Works"
          links={[
            { id: 1, name: "Home", url: "/" },
            {
              id: 2,
              name: "Portfolio",
              url: "/mobile-app/portfolio-dark",
            },
          ]}
        />
        <Works4 />
        <Footer2 />
      </DarkTheme>
    </>
  );
};

export default MobileAppPricingPlanDark;
