import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./styling/top.scss";

function TopSection() {
  return (
    <div className="top d-none d-lg-block">
        <div className="top-container d-flex justify-content-between">
          <div className="logo d-none d-lg-block px-5 py-3">
            <h1>
                <Link to="/">
                 <img src={logo} alt="gulf masa metal industrial logo" />
                </Link>
            </h1>
          </div>
          <div className="contact-infos d-flex align-items-center px-5">
            <div className="info d-flex align-items-center me-3">
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
            <div className="info d-flex align-items-center me-3">
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
            <div className="info d-flex align-items-center me-0">
              <div className="icon me-3">
                <MdLocationOn />
              </div>
              <div className="info-content">
                <h6>our office</h6>
                <span>Salman Bin Abdulaziz St, Khobar, KSA</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TopSection;
