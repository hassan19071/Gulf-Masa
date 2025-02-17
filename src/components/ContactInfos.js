import React from "react";
import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./styling/contact-info.scss";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function ContactInfos() {
  return (
    <div className="contact-infos-section py-5 mt-5">
      <div className="container px-lg-5 py-5">
        <div className="row align-items-center py-4">
          <div className="col-lg-7">
            <div className="contact-form">
              <div className="title mb-4">
                <h4>Contact Us</h4>
              </div>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-4 mt-lg-0 mt-4">
            <div className="infos">
              <div className="head">
                <h4>Get in Touch with Us</h4>
                <p>
                  Contact us today! Our team is ready to assist you with expert
                  advice and high-quality services. Reach out via phone, email,
                  or visit us at our office.
                </p>
              </div>
              <div className="company-infos mb-3 mt-3">
                <div className="info d-flex align-items-center">
                  <div className="icon">
                    <MdPhone />
                  </div>
                  <div className="text ms-2">
                    <Link to="tel:+966540355787">0540355787</Link>
                  </div>
                </div>
                <div className="info d-flex align-items-center my-3">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <div className="text ms-2">
                    <Link to="mailto:info@gmco.sa">Info@gmco.sa</Link>
                  </div>
                </div>
                <div className="info d-flex align-items-center">
                  <div className="icon">
                    <MdLocationOn />
                  </div>
                  <div className="text ms-2">
                    <span>Salman Bin Abdulaziz St, Khobar, KSA</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="social-media mt-3">
                <Link to="#">
                  <FaFacebook />
                </Link>
                <Link to="#">
                  <FaWhatsapp />
                </Link>
                <Link to="#">
                  <FaTelegram />
                </Link>
                <Link to="#">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfos;
