import React from "react";
import Link from "next/link";
import intro5Data from "../../data/sections/intro5.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
SwiperCore.use([Navigation, Pagination, Parallax]);

const Intro5 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    removeSlashFromPagination()
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header id="arch-slider" className="slider arch-slider">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {intro5Data.map((slide, index) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="caption mt-30">
                          <h5>0{index + 1} .</h5>
                          <h1>
                            {typeof slide.title === "object" ? (
                              <>
                                {slide.title.first} <br /> {slide.title.second}
                              </>
                            ) : (
                              slide.title
                            )}
                          </h1>
                          {slide?.content && <p>{slide.content}</p>}
                        </div>
                      </div>
                      <div className="col-lg-4 valign">
                        <div className="explore">
                          <Link href="/project-details2/project-details2-dark"> 
                          <a >
                            Explore Project
                            <i className="ion-chevron-right"></i>
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setting">
          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
            >
              <i className="ion-chevron-right"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
            >
              <i className="ion-chevron-left"></i>
            </div>
          </div>
          <div ref={paginationRef} className="swiper-pagination"></div>
        </div>
      </div>
    </header>
  );
};

export default Intro5;
