/* eslint-disable @next/next/no-img-element */
import React from "react";

const Team2 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Team
              </h6>
              <h3 className="wow color-font">
                An original team of creators designers &amp; dreamers.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/team/1.jpg" alt="" />
                <div id="circle1">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath1"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath1" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath1">
                          CEO Manager CEO Manager CEO Manager
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Ryan Hicks</h6>
                  <span>Client Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/team/2.jpg" alt="" />
                <div id="circle2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath2"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath2" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath2">
                          Interior Designer Interior Designer Interior Designer
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Ryan Hicks</h6>
                  <span>Client Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img">
                <img src="/img/team/3.jpg" alt="" />
                <div id="circle3">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath3"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath3" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath3">
                          Landscape Designer Landscape Designer Landscape
                          Designer
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Ryan Hicks</h6>
                  <span>Client Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir">
              <div className="img">
                <img src="/img/team/4.jpg" alt="" />
                <div id="circle4">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath4"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath4" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath4">
                          Client Manager Client Manager Client Manager
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Ryan Hicks</h6>
                  <span>Client Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;
