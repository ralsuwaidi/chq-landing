/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>Emirates Towers, Ground Floor, Dubai</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@ai.gov.ae</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
          <a href="https://www.youtube.com/channel/UC8_TEDN9iFahjCcubTa5esg">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://mobile.twitter.com/coders_hq">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://discord.gg/GebyQ8Hyb5">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://www.linkedin.com/showcase/national-program-for-coders-uae?trk=affiliated-pages">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
