import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import service2 from "../assets/Structural Steel Manufacturing.jpeg";
import service3 from "../assets/Aluminum Fabrication.jpg";
import service4 from "../assets/Sheet Metal Work.jpg";
import service5 from "../assets/CNC Cutting & Precision Machining.jpg";
import service6 from "../assets/Welding & Assembly Services.jpeg";
import service7 from "../assets/Metal Coating & Surface Finishing.jpg";
import service8 from "../assets/Industrial Engineering Solutions.jpg";
import service9 from "../assets/Customized Metal Solutions.jpg";
import "./styling/services.scss";
function ServicesSection() {
  return (
    <div className="services-carousel-container">
      <div className="head">
        <h2 className="section-title">GMCO Services</h2>
        <p className="text-center">what we offer.</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        className="mt-5"
      >
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service6} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Metal Fabrication</h3>
              <p>
                Precision-engineered metal fabrication for industrial,
                commercial, and infrastructure projects, ensuring durability and
                high performance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service2} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Structural Steel Manufacturing</h3>
              <p>
                Production of high-quality steel beams, columns, and frameworks
                for construction, bridges, and industrial structures.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service3} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Aluminum Fabrication</h3>
              <p>
                Custom aluminum cutting, welding, and machining for lightweight
                yet strong structural applications.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service4} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Sheet Metal Work</h3>
              <p>
                Advanced sheet metal bending, punching, and cutting for HVAC
                systems, enclosures, panels, and industrial components.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service5} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>CNC Cutting & Precision Machining</h3>
              <p>
                High-precision CNC laser, plasma, and waterjet cutting for
                intricate metal designs and industrial applications.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service6} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Welding & Assembly Services</h3>
              <p>
                Professional MIG, TIG, and arc welding for steel, aluminum, and
                custom metal structures, ensuring strength and durability.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service7} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Metal Coating & Surface Finishing</h3>
              <p>
                Powder coating, galvanization, and painting to enhance corrosion
                resistance and improve the lifespan of metal products.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service8} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Industrial Engineering Solutions</h3>
              <p>
                Custom metal solutions designed for the oil & gas, construction,
                and manufacturing industries, focusing on efficiency and
                innovation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={service9} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Customized Metal Solutions</h3>
              <p>
                Tailor-made metal products and components to meet specific
                client requirements, from prototyping to mass production.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ServicesSection;
