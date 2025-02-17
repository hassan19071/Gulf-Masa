import React from "react";
import { Link } from "react-router-dom";
import product01 from "../assets/aluminum doors.jpg";
import product02 from "../assets/aluminum windows.jpg";
import product03 from "../assets/metal blinds.jpg";
import product04 from "../assets/automatic doors.jpg";
import "./styling/products.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";
function ProductsSection() {
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
                  <Link to="/products" className="mt-auto">
                    Read More <FaArrowAltCircleRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
