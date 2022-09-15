import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTeam = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="team-vid section-padding bg-dark pt-0"
      data-overlay-dark="0"
    >
      <div className="container">
        <div className="row mb-20">
          <div className="col-12">
            <div
              className="vid-img bg-img"
              style={{backgroundImage: 'url(/img/mobile-app/bg-vid.jpg)'}}
              data-overlay-dark="2"
            >
              {typeof window !== "undefined" && (
                <ModalVideo
                  channel="vimeo"
                  autoplay
                  isOpen={isOpen}
                  videoId="127203262"
                  onClose={() => setOpen(false)}
                />
              )}
              <a
                href="https://vimeo.com/127203262"
                className="vid valign"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-100">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Meet Our Team
                <span className="right"></span>
              </h6>
              <h2>We’ve Experience Team Member to Provide Solutions</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/1.png" alt="" />
              </div>
              <div className="info">
                <h5>Eddie E. Moseley</h5>
                <p>CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/2.png" alt="" />
              </div>
              <div className="info">
                <h5>John J. Schreffler</h5>
                <p>Apps Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center sm-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/3.png" alt="" />
              </div>
              <div className="info">
                <h5>Venessa M. Meister</h5>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center">
              <div className="img">
                <img src="/img/mobile-app/team/4.png" alt="" />
              </div>
              <div className="info">
                <h5>Joel R. Funkhouser</h5>
                <p>Senior Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default VideoWithTeam;
