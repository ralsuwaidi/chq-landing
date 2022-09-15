import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
import LightTheme from "../../layouts/Light";

const Showcase3Light = () => {
  return (
    <LightTheme>
      <NavbarFullMenu theme="light" />
      <ShowcasesFullScreenCircleSlide />
    </LightTheme>
  );
};

export default Showcase3Light;
