import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import product01 from "../assets/aluminum doors.jpg";
import product02 from "../assets/aluminum windows.jpg";
import product03 from "../assets/metal blinds.jpg";
import product04 from "../assets/automatic doors.jpg";
import subProduct01 from "../assets/product01.jpg";
import subProduct02 from "../assets/aluminum doors.jpg";
import subProduct03 from "../assets/product03.jpg";
import subProduct04 from "../assets/product04.jpg";
import subProduct05 from "../assets/product05.jpg";
import subProduct06 from "../assets/product06.jpg";
import subProduct07 from "../assets/hero-bg03.jpg";
import subProduct08 from "../assets/product08.jpg";
import subProduct09 from "../assets/product09.jpg";
import subProduct10 from "../assets/product10.jpg";
import subProduct11 from "../assets/product11.jpg";
import subProduct12 from "../assets/product12.jpg";
import "./styling/products.scss";
import "./styling/services.scss";
function AllProducts() {
  return (
    <div className="products py-5">
      <div className="container px-lg-5">
        <div className="head text-center">
          <h2>GMCO Products</h2>
          <p>We provide a wide range of products</p>
        </div>
        <div className="row mt-1">
          {[
            {
              img: product01,
              title: "Aluminum Doors",
              desc: "Engineered for durability and modern aesthetics, our aluminum doors offer lightweight strength, corrosion resistance, and energy efficiency, making them ideal for commercial and residential use.",
            },
            {
              img: product02,
              title: "Aluminum Windows",
              desc: "Designed for superior insulation and sleek design, our aluminum windows provide high durability, weather resistance, and excellent thermal performance, ensuring comfort and efficiency.",
            },
            {
              img: product03,
              title: "Metal Blinds",
              desc: "Crafted for security and functionality, our metal blinds offer durability, privacy, and weather protection, making them perfect for industrial, commercial, and residential applications.",
            },
            {
              img: product04,
              title: "Automatic Doors",
              desc: "Our automatic doors provide seamless entry solutions with motion sensors, smooth operation, and modern design, enhancing convenience and accessibility in any environment.",
            },
          ].map((product, index) => (
            <div key={index} className="col-lg-3 mt-4 col-md-6 col-12 d-flex">
              <div className="product d-flex flex-column">
                <div className="img">
                  <img src={product.img} alt={product.title} width="100%" />
                </div>
                <div className="text flex-grow-1 d-flex flex-column">
                  <h3>{product.title}</h3>
                  <p className="flex-grow-1">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
        className="mt-5 services-carousel-container"
      >
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct01} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Aluminum Panel Doors</h3>
              <p>Feature aluminum panel for security and modern design.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct02} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Weather Resistant Aluminum Doors</h3>
              <p>
                Designed to whithstand harsh weather conditions, resistant to
                corrosion and moisture.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct03} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Double Frame Aluminum Door</h3>
              <p>
                Equipped with a double frame for enhanced strength and
                isulation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct04} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Tilt and Turn Aluminum Doors</h3>
              <p>
                Can be tilted inward for ventilation or turned open for full
                access, combining flexbility with security.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct05} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Tilt and Turn Glass Doors</h3>
              <p>
                Feature a combination of aluminum and glass, offering versatile
                ventilation otions and sleek appearance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct06} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Tilt and Turn Wooden Doors</h3>
              <p>
                Provide traditional aesthetics with functional benefits of tilt
                an turn mechanism, ideal for classic designs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct07} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Aluminum Fixed Windows</h3>
              <p>
                Strong and corrosion resistant, used for transporting liquids
                and gases in heavey-duty industrial applications.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct08} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Glass Fixed Windows</h3>
              <p>
                Primarily glass with minimal framing, providing unobstructed
                views and natural light.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct09} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Vinyl Fixed Windows</h3>
              <p>
                Made from vinyl for east maintenance and good isulation, ideal
                for residential use.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct10} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Aluminum Tilt and Turn Windows</h3>
              <p>
                Features a versatile design that tilts inward for ventilation or
                turns fully open for easy access, combining modern aesthetics
                with durability.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct11} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>UPVC Tilt and Turn Windows</h3>
              <p>
                Made from durable UPVC, offering excellent isulation and low
                maintenance, with flexble opining options.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service">
            <div className="img">
              <img src={subProduct12} alt="metal fabrication" />
            </div>
            <div className="text">
              <h3>Wooden Tilt and Turn Windows</h3>
              <p>
                Provides a classic look with functionality of tilt amd turn
                operation, offering natural beauty and effective ventilation.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AllProducts;
