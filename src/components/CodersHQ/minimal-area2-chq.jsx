/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalAreaCHQ = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/codershq/physical-space.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Join us at our Physical Space</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Coders (hq) is located at the Emirates Towers Boulevard and in a 550m walk from the 
                metro station in a beautiful air-conditioned glass bridge overlooking the museum of the future.
                <br/>
                <br/>
                  We have events, workshops, hackathons and visits to our space at the towers. 
                  Have a look at our calender and register for upcoming events. If you would 
                  like to lead your own workshop or lecture then please reach out and we would 
                  love to discuss this further.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Attend workshops, events and lectures and lead your own.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Open space for networking and meetups.
                </li>
              </ul>
              {/* <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Discover</span>
                </a>
              </Link> */}

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalAreaCHQ;
