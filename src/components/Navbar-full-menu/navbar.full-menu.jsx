/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={appData.darkLogo} alt="logo" />
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home1-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Main Home
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home2-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Creative Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home5-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Digital Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home4-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Business One Page
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home3-dark`}>
                              <a className="sub-link">
                                <span className="nm">05.</span>Corporate
                                Business
                              </a>
                            </Link>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home6-dark`}>
                              <a className="sub-link">
                                <span className="nm">06.</span>Modern Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home7-dark`}>
                              <a className="sub-link">
                                <span className="nm">07.</span>Freelancer
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home8-dark`}>
                              <a className="sub-link">
                                <span className="nm">08.</span>Architecture
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/about/about-dark`}>
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Works
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase/showcase-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>ShowCase Parallax
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase4/showcase4-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>ShowCase Carousel
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase3/showcase3-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>ShowCase Circle
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works/works-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Portfolio Masonry
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works2/works2-dark`}>
                              <a className="sub-link">
                                <span className="nm">05.</span>Portfolio
                                Filtering
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works3/works3-dark`}>
                              <a className="sub-link">
                                <span className="nm">06.</span>Portfolio Gallery
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Blogs
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog/blog-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Blog Standerd
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-list/blog-list-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Blog List
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-grid/blog-grid-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Blog Grid
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-details/blog-details-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Blog Details
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contact/contact-dark`}>
                        <a className="link">
                          <span className="nm">05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>+03 762-2367-723</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">Vie_website@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
