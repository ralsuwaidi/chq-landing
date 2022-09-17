/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs4Assessment = () => {
      console.clear();
      const [isOpen, setOpen] = React.useState(false);
    return (
      <section className="about-cr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 img md-mb50">
              <img src="/img/codershq/assessment/assessment.jpg" alt="" />
            </div>
            <div className="col-lg-4 valign">
              <div className="cont full-width">
                <h3 className="color-font">Improve Yourself</h3>
                <h6>
                  Assess your skills <br /> to find out how you rank as a coder.
                </h6>
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="YF-sDdEu4gc"
                    onClose={() => setOpen(false)}
                  />
                )}
                <div className="vid-area">
                  <div className="vid-icon">
                    <a
                      className="vid"
                      href="https://www.youtube.com/watch?v=YF-sDdEu4gc"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                    >
                      <div className="vid-butn back-color">
                        <span className="icon">
                          <i className="fas fa-play"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="valign">
                    <span className="text">Watch Video</span>
                  </div>
                </div>
                <div className="states">
                  <h2 className="color-font fw-700">
                    200 <span className="fz-30">+</span>
                  </h2>
                  <p>Coding skills and languages to assess yourself in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs4Assessment