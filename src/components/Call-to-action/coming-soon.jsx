import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const ComingSoonCTA = ({img}) => {
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
                    
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Leaderboard <br /> <b className="back-color">Coming Soon</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ComingSoonCTA