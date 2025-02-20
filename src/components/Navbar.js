import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdClose,
  MdPhone,
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./styling/navbar.scss";
function Navbar({page}) {
    let [active,isActive] = useState(false);
    function handleMenuStatus(){
        isActive(!active);
    }
  return (
    <div className="navbar py-3">
      <div className="container px-lg-5">
        <div className="navbar-content d-flex justify-content-between w-100 align-items-center">
          <div className="logo d-lg-none">
            <h1>
              <Link to="/">
                <img
                  src={logo}
                  alt="gulf masa metal industrial logo"
                  width={"130px"}
                />
              </Link>
            </h1>
          </div>
          <div className="links d-lg-block d-none">
            <Link as={Link} to="/" className={page === "home"? "me-1 active":"me-1"}>
              Home
            </Link>
            <Link as={Link} to="/about" className={page === "about"? "me-1 active":"me-1"}>
              About
            </Link>
            <Link as={Link} to="/services" className={page === "services"? "me-1 active":"me-1"}>
              Services
            </Link>
            <Link as={Link} to="/products" className={page === "products"? "me-1 active":"me-1"}>
              Products
            </Link>
            <Link as={Link} to="/projects" className={page === "projects"? "me-1 active":"me-1"}>
              Projects
            </Link>
          </div>
          <div className="language d-lg-flex align-items-center d-none">
            <Link to="/contact" className="me-0 contact">
              Contact Us
            </Link>
            {/* <Link to="/ar" className="lang">
              <MdLanguage />
              Ar
            </Link> */}
          </div>
          <div className="menu d-flex flex-column d-lg-none" onClick={handleMenuStatus}>
            <span></span>
            <span className="my-2"></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="mobile-links py-3 px-4 position-fixed">
        <div className={active? "overlay active":"overlay"}></div>
        <div className={active? "links-container active":"links-container"}>
          <div className="logo-x d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="gulf masa metal industrial logo"
                  width="100px"
                />
              </Link>
            </div>
            <div className="x" onClick={handleMenuStatus}>
              <MdClose />
            </div>
          </div>
          <div className="links d-flex flex-column my-4">
            <Link as={Link} to="/" className={page === "home"? "mb-2 active":"mb-2"}>
              Home
            </Link>
            <Link as={Link} to="/about" className={page === "about"? "mb-2 active":"mb-2"}>
              About
            </Link>
            <Link as={Link} to="/services" className={page === "services"? "mb-2 active":"mb-2"}>
              Services
            </Link>
            <Link as={Link} to="/products" className={page === "products"? "mb-2 active":"mb-2"}>
              Products
            </Link>
            <Link as={Link} to="/projects" className={page === "projects"? "mb-2 active":"mb-2"}>
              Projects
            </Link>
            <Link as={Link} to="/contact" className={page === "contact"? "mb-0 active":"mb-0"}>
              Contact
            </Link>
            {/* <Link to="/ar" className="lang">
              <MdLanguage />
              Ar
            </Link> */}
          </div>
          <div className="menu-footer">
            <div className="contact-infos d-flex flex-column">
              <div className="info d-flex align-items-center mb-3">
                <div className="icon me-3">
                  <MdPhone />
                </div>
                <div className="info-content">
                  <h6>our phone</h6>
                  <Link to="tel:+966540355787">
                    <span>0540355787</span>
                  </Link>
                </div>
              </div>
              <div className="info d-flex align-items-center mb-3">
                <div className="icon me-3">
                  <MdEmail />
                </div>
                <div className="info-content">
                  <h6>our email</h6>
                  <Link to="mailto:Info@gmco.sa">
                    <span>Info@gmco.sa</span>
                  </Link>
                </div>
              </div>
              <div className="info d-flex align-items-center mb-0">
                <div className="icon me-3">
                  <MdLocationOn />
                </div>
                <div className="info-content">
                  <h6>our office</h6>
                  <span>Salman Bin Abdulaziz St, Khobar, KSA</span>
                </div>
              </div>
            </div>
            <div className="social-media mt-3">
              <Link to="#">
                <FaFacebook />
              </Link>
              <Link to="#">
                <FaYoutube />
              </Link>
              <Link to="#">
                <FaWhatsapp />
              </Link>
              <Link to="#">
                <FaLinkedin />
              </Link>
              <Link to="#">
                <FaTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
