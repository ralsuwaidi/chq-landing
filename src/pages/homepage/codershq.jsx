import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Intro4CHQ from "../../components/Intro4/intro4_chq";
import AboutUs from "../../components/About-us/about-us";
import MinimalAreaCHQ from "../../components/Minimal-Area2/minimal-area2-chq";
import WorksCHQ from "../../components/Works/works-CHQ";
import ServicesCHQ from "../../components/Services/services_chq";
import ClientsCHQ from "../../components/Clients/clients_chq";
import NavbarCHQ from "../../components/Navbar/navbar_chq";
import CallToActionCHQ from "../../components/Call-to-action/call-to-action-chq";

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
      <NavbarCHQ nr={navbarRef} lr={logoRef} theme="themeL" />
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
