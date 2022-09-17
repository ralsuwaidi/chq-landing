import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Services from "../../components/Services/services";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import LightTheme from "../../layouts/Light";
import Portfolio from "../../components/Portfolio/portfolio";
import Clients2 from "../../components/Clients2/clients2";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import IntroWithSliderAssessment from "../../components/Intro-with-slider/intro-with-slider-assessment";
import AboutUs4Assessment from "../../components/About-us4/about-us4-assessment";
import Services2Assessment from "../../components/Services2/services2assessment";

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSliderAssessment sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Services2Assessment style="4item" />
        <AboutUs4Assessment />
        <Team />
        <SContactForm />
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Homepage4;
