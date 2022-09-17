import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const AmbassadorCTA = ({img}) => {
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="wow words chars splitting" data-splitting>
                    Join us
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Become an <br /> <b className="back-color">ambassador</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link
                href="https://suwaidi.notion.site/Ambassador-Project-d93e40a17add4c3fa00e50e4f798bee1"
              >
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Find Out More</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AmbassadorCTA