/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6010.126439563913!2d-100.75478744312291!3d41.13314584948978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1644259110384!5m2!1sar!2seg"
            loading="lazy"
          ></iframe>
        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
