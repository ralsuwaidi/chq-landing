/* eslint-disable @next/next/no-img-element */
import React from "react";
import AmbassadorInfo from "./ambassador-info";
import arrayChunk from "../../lib/array-chunk";

const PlatinumTier = ({ambassadors, tier}) => {
  const MAX_COLS = 4;
  const rows = arrayChunk(ambassadors, MAX_COLS)
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              {`${tier.name} Ambassadors`}
              </h6>
              <h3 className="wow color-font">
                {tier.description}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {rows.map((row, idx) => {
            
            return (
                <div key={idx} className="row mt-40">
                    {row.map((col, idx) => {
                        return (
                            <AmbassadorInfo key={idx} ambassador={col}/>
                        )
                    })}
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default PlatinumTier;
