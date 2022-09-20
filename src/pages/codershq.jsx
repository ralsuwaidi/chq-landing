import React from "react";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import Intro4CHQ from "../components/CodersHQ/intro4_chq";
import AboutUs from "../components/About-us/about-us";
import MinimalAreaCHQ from "../components/CodersHQ/minimal-area2-chq";
import WorksCHQ from "../components/CodersHQ/works-chq";
import ServicesCHQ from "../components/CodersHQ/services_chq";
import ClientsCHQ from "../components/CodersHQ/clients_chq";
import Navbar from "../components/Navbar/navbar";
import CallToActionCHQ from "../components/CodersHQ/call-to-action-chq";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const MainContent = React.useRef(null);
  const fixedSlider = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
      
    }, 1000);
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
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro4CHQ blackStar />
      <AboutUs />
      <ServicesCHQ />
      <WorksCHQ />
      <MinimalAreaCHQ />
      <ClientsCHQ theme="light" />
      <CallToActionCHQ />
      <Footer />
    </LightTheme>
  );
};

export default Homepage;
