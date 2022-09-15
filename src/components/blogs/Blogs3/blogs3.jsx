import React from "react";
import Link from "next/link";

const Blogs3 = () => {
  return (
    <section className="blog-grid section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6>
              <h3 className="wow color-font">From our blogs.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/1.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date">
                    <span>
                      <i>06</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    <a>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date">
                    <span>
                      <i>06</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    <a>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/3.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date">
                    <span>
                      <i>06</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    <a>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line top right"></div>
      <div className="line bottom left"></div>
    </section>
  );
};

export default Blogs3;
