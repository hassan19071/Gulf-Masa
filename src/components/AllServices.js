import React from "react";
import service2 from "../assets/Structural Steel Manufacturing.jpeg";
import service3 from "../assets/Aluminum Fabrication.jpg";
import service4 from "../assets/Sheet Metal Work.jpg";
import service5 from "../assets/CNC Cutting & Precision Machining.jpg";
import service6 from "../assets/Welding & Assembly Services.jpeg";
import service7 from "../assets/Metal Coating & Surface Finishing.jpg";
import service8 from "../assets/Industrial Engineering Solutions.jpg";
import service9 from "../assets/Customized Metal Solutions.jpg";
import "./styling/services.scss";
function AllServices() {
  return (
    <div className="services-carousel-container py-5">
      <div className="container px-lg-5">
        <div className="head">
          <h2 className="section-title">GMCO Services</h2>
          <p className="text-center">what we offer.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service6} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Metal Fabrication</h3>
                <p>
                  Precision-engineered metal fabrication for industrial,
                  commercial, and infrastructure projects, ensuring durability
                  and high performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service2} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Structural Steel Manufacturing</h3>
                <p>
                  Production of high-quality steel beams, columns, and
                  frameworks for construction, bridges, and industrial
                  structures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service3} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Aluminum Fabrication</h3>
                <p>
                  Custom aluminum cutting, welding, and machining for
                  lightweight yet strong structural applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service4} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Sheet Metal Work</h3>
                <p>
                  Advanced sheet metal bending, punching, and cutting for HVAC
                  systems, enclosures, panels, and industrial components.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service5} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>CNC Cutting & Precision Machining</h3>
                <p>
                  High-precision CNC laser, plasma, and waterjet cutting for
                  intricate metal designs and industrial applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service6} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Welding & Assembly Services</h3>
                <p>
                  Professional MIG, TIG, and arc welding for steel, aluminum,
                  and custom metal structures, ensuring strength and durability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service7} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Metal Coating & Surface Finishing</h3>
                <p>
                  Powder coating, galvanization, and painting to enhance
                  corrosion resistance and improve the lifespan of metal
                  products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service8} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Industrial Engineering Solutions</h3>
                <p>
                  Custom metal solutions designed for the oil & gas,
                  construction, and manufacturing industries, focusing on
                  efficiency and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
            <div className="service d-flex flex-column">
              <div className="img">
                <img src={service9} alt="Metal Fabriction" width="100%" />
              </div>
              <div className="text flex-grow-1 d-flex flex-column">
                <h3>Customized Metal Solutions</h3>
                <p>
                  Tailor-made metal products and components to meet specific
                  client requirements, from prototyping to mass production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;
