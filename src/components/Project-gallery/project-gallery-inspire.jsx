/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery4 = ({imageList}) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <div className="col-md-3 popimg">
            <img alt="" src={imageList[0]} />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src={imageList[1]} />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src={imageList[2]} />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src={imageList[3]} />
          </div>
          <div className="col-md-12 popimg">
            <img alt="" src={imageList[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery4;
