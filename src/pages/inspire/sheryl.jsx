import React from "react";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectDescription from "../../components/Project-description/project-description";
import Inspire from "../../data/ambassadors/sheryl-data.json"
import InspireDetails from "../../components/CodersHQ/Inspire/project-details-inspire.jsx";
import InspireGallery from "../../components/CodersHQ/Inspire/project-gallery-inspire";
import Navbar from "../../components/Navbar/navbar";

const DetailsSteve = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <InspireDetails projectHeaderData={Inspire} />
        <ProjectIntroduction projectIntroductionData={Inspire.intro} />
        <ProjectDescription projectDescriptionData={Inspire.description} />
        {/* <InspireGallery imageList={Inspire.gallery}/> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default DetailsSteve;
