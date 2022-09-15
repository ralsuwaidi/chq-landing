/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs4 = () => {
      console.clear();
      const [isOpen, setOpen] = React.useState(false);
    return (
      <section className="about-cr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 img md-mb50">
              <img src="/img/intro/4.jpg" alt="" />
            </div>
            <div className="col-lg-4 valign">
              <div className="cont full-width">
                <h3 className="color-font">Huge collection.</h3>
                <h6>
                  Innovative solutions <br /> to boost your creative projects.
                </h6>
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="vimeo"
                    autoplay
                    isOpen={isOpen}
                    videoId="127203262"
                    onClose={() => setOpen(false)}
                  />
                )}
                <div className="vid-area">
                  <div className="vid-icon">
                    <a
                      className="vid"
                      href="https://vimeo.com/127203262"
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
                    125 <span className="fz-30">k</span>
                  </h2>
                  <p>Projects completed around the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs4