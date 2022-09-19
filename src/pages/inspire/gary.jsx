import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import Inspire from "../../data/ambassadors/gary-data.json"
import InspireDetails from "../../components/CodersHQ/Inspire/project-details-inspire.jsx";
import InspireGallery from "../../components/CodersHQ/Inspire/project-gallery-inspire";

const DetailsGary = () => {
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
        <InspireGallery imageList={Inspire.gallery}/>
        <ProjectDescription projectDescriptionData={Inspire.description} />
        <ProjectVideo projectVideoDate={Inspire} />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default DetailsGary;
