import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import AmbassadorIntro from "../../components/Freelancre-intro/ambassador-intro";
import AboutIntro from "../../components/About-intro";
import featuresData from "../../data/sections/features.json";
import Services5Ambassador from "../../components/Services5/services5-ambassador";
import TeamAmbassadors from "../../components/Team2/team-ambassadors";
import AmbassadorTiers from "../../components/Minimal-Area/ambassador-tiers";
import AmbassadorCTA from "../../components/Call-to-action/call-to-action-ambassador";
import Navbar from "../../components/CodersHQ/navbar_chq";

const Homepage = () => {
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
      <AmbassadorIntro />
      <AboutIntro />
      <Services5Ambassador featuresData={featuresData}/>
      <TeamAmbassadors />
      <AmbassadorTiers />
      <AmbassadorCTA />
      <Footer />
    </LightTheme>
  );
};

export default Homepage;
