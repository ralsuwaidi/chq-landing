/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs2Date from "../../data/sections/about-us2.json";

const AboutUs2 = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons sm-mb30">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUs2Date.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs2Date.image2} alt="" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <img src={AboutUs2Date.image3} alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs2Date.smallTitle}</h6>
              </div>
              <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs2Date.title.first} <br /> {AboutUs2Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  {AboutUs2Date.content}
                </p>
              </Split>
              <div className="ftbox mt-30">
                <ul>
                  {AboutUs2Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6>
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
