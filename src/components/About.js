import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import "./styling/about.scss";
function AboutSection() {
  return (
    <div className="about py-5">
      <div className="container py-5 px-lg-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-3 order-lg-1 order-2 mt-lg-0 mt-4">
            <div className="about-text">
              <div className="head">
                <h2>About GMCO.</h2>
              </div>
              <div className="descriptions">
                <p>
                  Gulf Masa Metal Industrial Co. is a leading manufacturer and
                  supplier of high-quality metal products in the Gulf region.
                  With a commitment to innovation and excellence, we provide
                  advanced and customized solutions tailored to the diverse
                  needs of our clients across various industries.
                </p>
                <p>
                  Since our establishment, we have worked diligently to
                  strengthen our position as a trusted partner for major
                  companies in the region. Our dedication to precision
                  engineering, cutting-edge technology, and superior
                  craftsmanship ensures that we consistently deliver products
                  that meet the highest industry standards.
                </p>
              </div>
              <div className="mission-vision mt-4">
                <div className="vision d-flex">
                  <div className="icon">
                    <img src={vision} alt="vision of GMCO" width="55px" />
                  </div>
                  <div className="text ms-3">
                    <h4>our vision</h4>
                    <p>
                      To be the premier provider of integrated and innovative
                      metal solutions in the Gulf region, maintaining our
                      industry leadership through an unwavering commitment to
                      excellence, quality, and innovation.
                    </p>
                  </div>
                </div>
                <div className="mission mt-2 d-flex">
                  <div className="icon">
                    <img src={mission} alt="vision of GMCO" width="55px" />
                  </div>
                  <div className="text ms-3">
                    <h4>our mission</h4>
                    <p>
                      To provide high-quality metal products and solutions that
                      support the growth of infrastructure and industries in the
                      Gulf region. We strive to build strong client
                      relationships by delivering reliable, innovative, and
                      exceptional services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-3 order-lg-2 order-1">
            <div className="about-imgs">
              <div className="row">
                <div className="col-6 pe-1 r">
                  <img src={about1} alt="about GMCO." width="100%" />
                </div>
                <div className="col-6 ps-1 r">
                  <img src={about2} alt="about GMCO." width="100%" />
                </div>
                <div className="col-12 mt-2 c">
                  <img src={about3} alt="about GMCO." width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
