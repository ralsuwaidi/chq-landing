import React from "react";
import featuresData from "../../data/sections/features.json";

const Services4 = ({serviceMB50}) => {
  return (
    <section className="services box section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
                We are a new digital product development agency
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.slice(0, 3).map((item, index) => (
            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-delay={index == 0 ? ".5s" : index == 1 ? ".7s" : ".9s"}
              key={item.id}
            >
              <div
                className={`item-box no-curve ${
                  serviceMB50 && index + 1 != featuresData.length - 1 ? "mb-50" : ""
                }`}
              >
                <span className={`icon color-font ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services4;
