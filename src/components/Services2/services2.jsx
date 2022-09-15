import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
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
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Digital Marketing</h6>
              <p>
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Web &amp; App Development</h6>
              <p>
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Graphic Design</h6>
              <p>
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
          </div>
        </div>
        <div className="smore">
          <Link href="/about/about-dark">
            <a>Discover More</a>
          </Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
