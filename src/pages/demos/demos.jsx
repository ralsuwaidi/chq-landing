/* eslint-disable @next/next/no-img-element */
import React from "react";
import particlesConfig from "../../config/particle-config";
import Particles from "react-tsparticles";
import Link from "next/link";
import Split from "../../components/Split";
import DarkTheme from "../../layouts/Dark";
import initIsotope from "../../common/initIsotope";

const Demos = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      if (pageLoaded) {
        initIsotope();
      }
    }, 1000);
  }, [pageLoaded]);
  return (
    <DarkTheme>
      <style jsx>{`
        .sec-head h3 {
          font-size: 60px;
          font-weight: 700;
          position: relative;
        }

        .sec-head .tbg {
          position: absolute;
          top: -120px;
          left: 0;
          width: 100%;
          font-size: 15vw;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(
            180deg,
            #fff 0%,
            rgba(17, 18, 21, 0.2) 70%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.1;
        }

        .sec-head .tbg b {
          font-weight: 500;
          font-size: 12vw;
        }

        .main-content {
          position: relative;
          z-index: 999999;
          background: transparent;
        }

        .masonery .gallery .items {
          margin-top: 30px;
        }

        .masonery .container-fluid {
          padding: 0 100px;
        }

        @media (max-width: 768px) {
          .masonery .container-fluid {
            padding: 0 20px;
          }
          .sec-head h3 {
            font-size: 34px;
          }
          .sec-head {
            margin: 0 auto 30px;
          }
        }

        .masonery .item-img {
          padding: 5px 15px 20px;
          border-radius: 10px;
          background: #18191d;
          position: relative;
        }

        .masonery .item-img .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .masonery .item-img .img {
          border-radius: 10px;
          overflow: hidden;
        }

        .masonery .item-img .img img {
          transition: all 0.4s;
        }

        .masonery .item-img .img:hover img {
          transform: scale(1.1);
        }

        .masonery .item-img .cont {
          margin-top: 20px;
          text-align: center;
          position: relative;
        }

        .masonery .item-img .cont h6 {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .masonery .item-img .cont .sta {
          position: absolute;
          top: -47px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 10px;
          border-radius: 30px;
          box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.05);
          font-size: 12px;
        }

        .masonery .item-img .cont .sta.coming {
          background: #03be5f;
        }

        .masonery .item-img .cont .sta.new {
          background: #ff4b4b;
        }
      `}</style>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <header
        className="works-header particles valign bg-img parallaxie"
        data-overlay-dark="4"
        style={{
          backgroundImage: "url(/demo-img/bg.png)",
          minHeight: "100vh",
          zIndex: 99999,
        }}
      >
        <Particles id="particles-js" options={particlesConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: "transparent" }}>
                    vie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content section-padding pb-0">
        <section className="masonery section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">
                    49+ stunning unique ready template
                  </h3>
                  <span className="tbg">
                    <b>+</b>49
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home1-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Main Demo</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home1-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/01.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Main Demo</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home2-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/2.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Creative Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home2-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/02.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Creative Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/mobile-app/mobile-app-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/mobile1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Mobile app</h6>
                          <div className="sta new">
                            <span>New Demo</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/mobile-app/mobile-app-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/mobile2.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Mobile app</h6>
                          <div className="sta new">
                            <span>New Demo</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home7-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n2.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Freelancer</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home7-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n02.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Freelancer</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home8-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n3.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Architecture</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home8-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n03.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Architecture</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home5-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/3.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Digital Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home5-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/03.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Digital Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home4-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/4.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Business One Page</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home4-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/04.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Business One Page</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home3-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/5.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Corporate Business</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home3-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/05.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Corporate Business</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home6-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Modern Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/homepage/home6-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/n01.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Modern Agency</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <div className="img">
                      <img src="/demo-img/c3.png" alt="image" />
                    </div>
                    <div className="cont">
                      <h6>Restaurant</h6>
                      <div className="sta coming">
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <div className="img">
                      <img src="/demo-img/c4.png" alt="image" />
                    </div>
                    <div className="cont">
                      <h6>Multipurpose</h6>
                      <div className="sta coming">
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="masonery section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">Showcases</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase/showcase-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Full Screen</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase/showcase-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s01.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Full Screen</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase4/showcase4-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s2.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Showcase Carousel</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase4/showcase4-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s02.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Showcase Carousel</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase3/showcase3-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s3.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Showcase Circle</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/showcase3/showcase3-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/s03.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Showcase Circle</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works/works-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works 3 column</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works/works-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w01.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works 3 column</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works2/works2-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w2.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works Filtering</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works2/works2-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w02.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works Filtering</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works3/works3-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w3.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works Gallery</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/works3/works3-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/w03.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Works Gallery</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="line top left"></div>
        </section>

        <section className="masonery section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">Inner Pages</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog/blog-dark">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/standerd-blog-dark.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Standerd Blog</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog/blog-light">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/standerd-blog-light.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Standerd Blog</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-list/blog-list-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/blog-list-dark.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Blog List</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-list/blog-list-light">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/blog-list-light.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Blog List</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-grid/blog-grid-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/blog-grid-dark.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Blog Grid</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-grid/blog-grid-light">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/blog-grid-light.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Blog Grid</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-details/blog-details-dark">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/blog-details-dark.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Blog Details</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/blog-details/blog-details-light">
                      <a target="_blank">
                        <div className="img">
                          <img
                            src="/demo-img/blog-details-light.png"
                            alt="image"
                          />
                        </div>
                        <div className="cont">
                          <h6>Blog Details</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/about/about-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/about.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>About Us</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/about/about-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/about1.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>About Us</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/contact/contact-dark">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/contact-dark.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Contact</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="/contact/contact-light">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/contact-light.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Contact</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="line top left"></div>
        </section>

        <section className="services bords lficon section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Best Features
                  </h6>
                  <h3 className="wow color-font">
                    Creative Agency, Corporate and Portfolio Template
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-paint-bucket"></span>
                  </div>
                  <div className="cont">
                    <h6>UI/UX Design</h6>
                    <p>
                      We provide the best design by following the latest trends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-phone"></span>
                  </div>
                  <div className="cont">
                    <h6>Easily Customizable</h6>
                    <p>Build and customize stunning pages in minutes.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-display1"></span>
                  </div>
                  <div className="cont">
                    <h6>One / Multi Page</h6>
                    <p>Choose the layout style that fits your need.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-diskette"></span>
                  </div>
                  <div className="cont">
                    <h6>24/7 Support</h6>
                    <p>We commit to keep your site up-to-date.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line top right"></div>
        </section>

        <section
          className="call-action section-padding bg-img"
          style={{ backgroundImage: "url(/img/patrn.svg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-9">
                <div className="content sm-mb30">
                  <Split>
                    <h6 className="wow words chars splitting" data-splitting>
                      Purchase The Vie
                    </h6>
                    <h2 className="wow words chars splitting" data-splitting>
                      and Make <br />
                      <b className="back-color">Your Life Easier</b>.
                    </h2>
                  </Split>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 valign">
                <a
                  href="#0"
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Purchase Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DarkTheme>
  );
};

export default Demos;
