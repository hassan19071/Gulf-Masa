import React from "react";
import "./styling/about.scss";
import certificate01 from "../assets/certificate01.jpg";
import certificate02 from "../assets/certificate02.jpg";
import certificate03 from "../assets/certificate03.jpg";
function AboutParagraph() {
  return (
    <div className="about-paragraph py-5">
      <div className="container px-lg-5">
        <div className="head mb-3">
          <h2>Who We Are?</h2>
        </div>
        <div className="details-about-company">
          <p>
            Gulf Masa Metal Industries is a leading manufacturer and supplier of
            high-quality metal products and custom fabrication solutions in the
            Gulf region. Since our establishment, we have built a strong
            reputation for excellence, precision, and reliability, serving
            clients across Saudi Arabia, including Dammam, Khobar, and beyond.
            We specialize in structural steel manufacturing, aluminum systems,
            CNC cutting, and advanced metal fabrication, catering to the
            construction, industrial, and commercial sectors.
          </p>
          <p>
            Our mission is to deliver premium-quality metal products and
            innovative solutions that contribute to the growth and development
            of industries and infrastructure. We are committed to building
            strong, lasting relationships with our clients by providing
            customized solutions, ensuring timely delivery, and maintaining the
            highest standards of quality and safety. Our vision is to become the
            leading provider of integrated and innovative metal solutions in the
            Gulf region, driven by excellence, innovation, and customer
            satisfaction.
          </p>
          <p>
            At Gulf Masa, we are proud of our state-of-the-art manufacturing
            facility, equipped with modern machinery and cutting-edge CNC
            technology, enabling us to meet complex project requirements with
            efficiency and precision. We take pride in our experienced team of
            skilled professionals, who bring expertise, dedication, and a
            commitment to quality to every project.
          </p>
          <p>
            We stand out in the industry because of our unmatched quality,
            precision engineering, custom metal fabrication, advanced
            technology, and reliable project delivery. Our client-centric
            approach and dedication to excellence have made us a trusted partner
            for leading construction companies and industrial projects across
            the Gulf region.
          </p>
          <p>
            We invite you to explore our services and projects to see how Gulf
            Masa Metal Industries can contribute to your success. Whether you
            need structural steel, aluminum systems, or custom metal
            fabrication, we are ready to bring your vision to life with
            precision and quality.
          </p>
          <p>
            Contact us today to discuss your project needs and discover why Gulf
            Masa is the preferred choice for metal solutions in the Gulf region.
          </p>
        </div>
        <div className="certificates">
          <div className="row">
            <div className="col-lg-4 mt-4 col-md-6">
              <div className="certificate">
                <img src={certificate01} alt="certification" width={"100%"} />
              </div>
            </div>
            <div className="col-lg-4 mt-4 col-md-6">
              <div className="certificate">
                <img src={certificate02} alt="certification" width={"100%"} />
              </div>
            </div>
            <div className="col-lg-4 mt-4 col-md-6">
              <div className="certificate">
                <img src={certificate03} alt="certification" width={"100%"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutParagraph;
