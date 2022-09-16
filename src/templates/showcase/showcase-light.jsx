import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import LightTheme from "../../layouts/Light";

const ShowcaseLight = () => {
  return (
    <LightTheme>
      <NavbarFullMenu theme="light" />
      <ShowcasesFullScreen />
    </LightTheme>
  );
};

export default ShowcaseLight;
