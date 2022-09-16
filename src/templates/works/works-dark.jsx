import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import WorksHeader from "../../components/Works-header/works-header";
import WorksStyle1 from "../../components/Works-style1/works-style1";

const WorksDark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
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
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
        <WorksHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className="main-content">
        <WorksStyle1 />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default WorksDark;