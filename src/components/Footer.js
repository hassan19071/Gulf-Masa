import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import "./styling/footer.scss";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4>About GMCO</h4>
            <p className="footer-description">
              Gulf Masa Metal Industries specializes in high-quality metal
              fabrication, structural steel, and aluminum solutions for diverse
              industries.
            </p>
            <div className="social-icons">
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

          <div className="col-lg-3 col-md-6">
            <h4>Why Choose Us?</h4>
            <ul className="footer-services">
              <li>
                <FaCheck /> High-Quality Materials
              </li>
              <li>
                <FaCheck /> Advanced Manufacturing
              </li>
              <li>
                <FaCheck /> Precision Engineering
              </li>
              <li>
                <FaCheck /> Custom Metal Solutions
              </li>
              <li>
                <FaCheck /> On-Time Project Delivery
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MdLocationOn /> Salman Bin Abdulaziz St, Khobar, KSA
              </li>
              <li>
                <MdPhone /> <Link to="tel:+966540355787">+966 540 355 787</Link>
              </li>
              <li>
                <MdEmail /> <Link to="mailto:info@gmco.sa">info@gmco.sa</Link>
              </li>
              <li>
                <FaClock /> 08AM - 05PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Gulf Masa For Metal Industrial. All
            Rights Reserved.
          </p>
          <p>
            Developed & Designed by <span>Hassan Khaled</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
