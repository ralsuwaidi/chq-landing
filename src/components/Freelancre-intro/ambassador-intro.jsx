/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const AmbassadorIntro = () => {
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/codershq/ambassador/profile.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Hello, My name is Hazza and I am a Gold Tier Ambassador working on <br/>
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Projects",
                        "Workshops",
                        "Events",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>54</h3>
                </div>
                <div className="text valign">
                  <p>
                    Coders(hq) <br /> Ambassadors
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>16</h3>
                </div>
                <div className="text valign">
                  <p>
                    Countries <br /> 7 Teams
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="https://discord.gg/GebyQ8Hyb5">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>Message an admin</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="fab fa-discord"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default AmbassadorIntro;
