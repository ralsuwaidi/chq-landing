import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToActionCHQ = ({img}) => {
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
                    Let’s Code Together
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Join our  <br /> <b className="back-color">Community</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link
                href={`https://discord.com/invite/CPQHAZrg8b`}
              >
                <a
                  className="img wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div>
                    <img src='/img/codershq/discord-invite.png' />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToActionCHQ