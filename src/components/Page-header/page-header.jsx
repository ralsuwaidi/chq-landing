import React from 'react'

const PageHeader = ({title, paragraph, className}) => {
    return (
      <section className={`page-header ${className && className}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h1 className="mb-10 color-font">{title}</h1>
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default PageHeader;