import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro2 from "../../components/Intro2/intro2";
import Services from "../../components/Services/services";
import Video2 from "../../components/Video2/video2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Portfolio from "../../components/Portfolio/portfolio";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Team2 from "../../components/Team2/team2";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro2 />
      <Services style="4item" />
      <Video2 />
      <Portfolio grid={3} filterPosition="center" />
      <FullTestimonials noPadding />
      <Team2 />
      <Blogs2 />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;
