import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import AmbassadorIntro from "../../components/Freelancre-intro/ambassador-intro";
import AboutIntro from "../../components/About-intro";
import featuresData from "../../data/sections/features.json";
import Services5Ambassador from "../../components/Services5/services5-ambassador";
import SilverTier from "../../components/Team2/silver-tier";
import PlatinumTier from "../../components/Team2/platinum-tier";
import GoldTier from "../../components/Team2/gold-tier";
import tiers from "../../data/ambassadors/tiers.json";

import AmbassadorTiers from "../../components/Minimal-Area/ambassador-tiers";
import AmbassadorCTA from "../../components/Call-to-action/call-to-action-ambassador";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios";

export async function getServerSideProps(ctx){
    const headers = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const { data: plat } = await axios.get(`${process.env.API_URL}/ambassadors?filters[tier][$eq]=platinum&populate=*&pagination[pageSize]=50`, headers)
    const { data: gold } = await axios.get(`${process.env.API_URL}/ambassadors?filters[tier][$eq]=gold&populate=*&pagination[pageSize]=50`, headers)
    const { data: silver } = await axios.get(`${process.env.API_URL}/ambassadors?filters[tier][$eq]=silver&populate=*&pagination[pageSize]=50`, headers)

    return {props: {
        plat: plat.data,
        gold: gold.data,
        silver: silver.data,
    }};
}

const Homepage = ({plat, silver, gold}) => {
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
      <AmbassadorTiers />
      <PlatinumTier ambassadors={plat} tier={tiers['platinum']}/>
      <GoldTier ambassadors={gold} tier={tiers['gold']}/>
      <SilverTier ambassadors={silver} tier={tiers['silver']} />
      <AmbassadorCTA />
      <Footer />
    </LightTheme>
  );
};

export default Homepage;
