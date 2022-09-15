/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarMobileApp = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/homepage/home1-dark">
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href="/homepage/home2-dark">
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href="/homepage/home5-dark">
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href="/homepage/home4-dark">
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href="/homepage/home3-dark">
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href="/homepage/home6-dark">
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href="/homepage/home7-dark">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href="/homepage/home8-dark">
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/services-dark">
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/pricing-plan-dark">
                <a className="nav-link">Pricing</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/portfolio-dark">
              <a className="nav-link" >
                Portfolio
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/shop-dark">
              <a className="nav-link">
                Products
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
              <a className="nav-link" >
                Contact
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
