import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.jpg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Architecture</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.jpg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Interior Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.jpg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>3D Modeling</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s4.jpg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Furniture Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s5.jpg)" }}
          >
            <h6 className="numb">05</h6>
            <h5>Urban Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
