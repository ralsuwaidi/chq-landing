import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax]);

const Testimonials = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <section className="app-testim section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Clients Feedback
                <span className="right"></span>
              </h6>
              <h2>Valuable Clinets Feedback About Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container">
              {load ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          unde omnis iste natus error sit voluptatem accusantium
                          dolore laudantium totam rem aperiam eaqusa quae abillo
                          inventore veritatis architect beatae vitae dicta
                          ecabo.
                        </p>
                      </div>
                      <div className="info">
                        <div className="img">
                          <img src="/img/mobile-app/clients/1.png" alt="" />
                        </div>
                        <div className="cont">
                          <h6 className="mb-10">William Glenn</h6>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          unde omnis iste natus error sit voluptatem accusantium
                          dolore laudantium totam rem aperiam eaqusa quae abillo
                          inventore veritatis architect beatae vitae dicta
                          ecabo.
                        </p>
                      </div>
                      <div className="info">
                        <div className="img">
                          <img src="/img/mobile-app/clients/2.png" alt="" />
                        </div>
                        <div className="cont">
                          <h6 className="mb-10">John R. Gordon</h6>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          unde omnis iste natus error sit voluptatem accusantium
                          dolore laudantium totam rem aperiam eaqusa quae abillo
                          inventore veritatis architect beatae vitae dicta
                          ecabo.
                        </p>
                      </div>
                      <div className="info">
                        <div className="img">
                          <img src="/img/mobile-app/clients/3.png" alt="" />
                        </div>
                        <div className="cont">
                          <h6 className="mb-10">Josesr B. Rink</h6>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          unde omnis iste natus error sit voluptatem accusantium
                          dolore laudantium totam rem aperiam eaqusa quae abillo
                          inventore veritatis architect beatae vitae dicta
                          ecabo.
                        </p>
                      </div>
                      <div className="info">
                        <div className="img">
                          <img src="/img/mobile-app/clients/1.png" alt="" />
                        </div>
                        <div className="cont">
                          <h6 className="mb-10">William Glenn</h6>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                ""
              )}
              <div ref={paginationRef} className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
