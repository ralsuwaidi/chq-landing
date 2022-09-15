import React from "react";
import handleAccordion from "../../common/handleAccordion";

const Faq = () => {
  //   $(".accordion").on("click", ".title", function () {
  //     $(this).next().slideDown();
  //     $(".accordion-info").not($(this).next()).slideUp();
  //   });

  //   $(".accordion").on("click", ".item", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //   });

  return (
    <section className="app-faq section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Faqs
              </h6>
              <h2 className="mb-30">
                Have Any Questions on Minds? Frequently Asked Questions
              </h2>
              <p>
                Sed perspiciatis unde omnis natus error sit voluptatem accus
                doloremque laudantium totarem aperiam eaqupsa quae abillo
                inventore veritatis quasi architecto
              </p>
              <a href="#0" className="butn-bord-red rounded buton mt-30">
                <span>Get Free 7 Days Trial</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Everything You Want Know About Creating ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Frameworks Solve And Without Them ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info active">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Getting Started With CSS Cascade Layers ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>

                <div
                  className="item"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Designing Better Links Websites Guideline ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
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

export default Faq;
