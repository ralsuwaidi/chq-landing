/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/1.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/2.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/3.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/5.jpg" />
          </a>
          <a href="#" className="col-md-12 popimg">
            <img alt="" src="/img/portfolio/project2/7.jpg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
