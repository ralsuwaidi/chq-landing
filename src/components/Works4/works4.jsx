import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Works4 = () => {
  React.useEffect(() => {
    initIsotope();
  }, []);
  return (
    <section className="app-works section-padding">
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                Show All
              </span>
              <span data-filter=".brand">Mobile Apps</span>
              <span data-filter=".web">Development</span>
              <span data-filter=".graphic">Branding</span>
              <span data-filter=".design">Design</span>
              <span data-filter=".app">Logo Design</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items app design wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items app wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/7.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items design wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow animated">
                    <img src="/img/mobile-app/works/8.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="cont valign">
                  <div className="full-width text-center">
                    <span className="icon pe-7s-angle-right"></span>
                    <h5>Mobile UI Design</h5>
                    <span className="tags">Design Branding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works4;
