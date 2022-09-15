/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import LightTheme from "../../layouts/Light";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Intro6 from "../../components/Intro6/intro6";
import Clients3 from "../../components/Clients3/clients3";
import Services7 from "../../components/Services7/services7";
import Services8 from "../../components/Services8/services8";
import Screenshots from "../../components/Screenshots/screenshots";
import Progress from "../../components/Progress/progress";
import VideoWithTeam from "../../components/Video-with-team/video-with-team";
import PricePackages from "../../components/Price-packages/price-packages";
import Testimonials from "../../components/Testimonials/testimonials";
import DownloadApp from "../../components/Download-app/download-app";
import Blogs2 from "../../components/Blogs2/blogs2";
import Footer2 from "../../components/Footer2/footer2";

const MobileAppLight = () => {
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
      <LightTheme mobileappstyle>
        <NavbarMobileApp nr={navbarRef} theme="themeL" />
        <Intro6 />
        <Clients3 />
        <Services7 lightTheme />
        <Services8 />
        <Screenshots />
        <Progress />
        <VideoWithTeam />
        <PricePackages />
        <Testimonials />
        <DownloadApp />
        <Blogs2 />
        <Footer2 />
      </LightTheme>
    </>
  );
};

export default MobileAppLight;
