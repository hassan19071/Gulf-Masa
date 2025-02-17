import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import bg1 from "../assets/hero-bg01.jpg";
import bg2 from "../assets/hero-bg02.jpg";
import bg3 from "../assets/hero-bg03.jpg";
import "./styling/hero.scss";
const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
      effect="fade"
      loop={true}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div
          className="hero-slide py-5 px-lg-5"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="hero-text py-5 px-lg-5 px-4">
            <h1>Gulf Masa Metal Industries</h1>
            <p className="lead">
              At Gulf Masa Metal Industries, we combine strength, precision, and
              innovation to create high-quality metal structures and solutions.
              Our commitment to durability and performance ensures reliability
              in every project we undertake.
            </p>
            <Link to="/contact">get a quote</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero-slide py-5 px-lg-5"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="hero-text px-lg-5 py-5 px-4">
            <h1>Precision Metal Solutions for a Stronger Tomorrow</h1>
            <p className="lead">
              With cutting-edge technology and expert craftsmanship, we deliver
              durable, high-performance metal structures and industrial
              solutions.
            </p>
            <Link to="/services">know more</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero-slide py-5 px-lg-5"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          <div className="hero-text px-lg-5 py-5 px-4">
            <h1>Precision Aluminum Fabrication for Every Industry</h1>
            <p className="lead">
              Crafting high-quality aluminum solutions with precision
              engineering and cutting-edge technology. From structural
              components to custom designs, we ensure strength, durability, and
              excellence in every product.
            </p>
            <Link to="/services">know more</Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
