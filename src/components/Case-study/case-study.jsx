import React from "react";
import Link from "next/link";
import caseStudyData from "../../data/sections/case-study.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const CaseStudy = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <section className="case-study">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div
        id="content-carousel-container-unq-1"
        className="swiper-container"
        data-swiper="container"
      >
        {!load ? (
          <Swiper
            effect={"fade"}
            speed={1000}
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
            {caseStudyData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="swiper-slide bg-img"
                style={{ backgroundImage: `url(${item.image})` }}
                data-overlay-dark="7"
              >
                <div className="container d-flex align-items-end">
                  <div className="cont">
                    <Link href="/showcase/showcase-dark">
                      <a>
                        <span>Case Study</span>
                        <h6 className="main-color">{item.date}</h6>
                        <h4>{item.title}</h4>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="controls">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
    </section>
  );
};

export default CaseStudy;
