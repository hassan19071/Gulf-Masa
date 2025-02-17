import React from "react";
import { Link } from "react-router-dom";
import "./styling/getintouch.scss";
function GetInTouch() {
  return (
    <div className="get-in-touch py-5 mt-5">
      <div className="container px-lg-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8">
            <div className="text text-lg-start text-center">
              <h2>
                Have a question or need a custom metal solution? Contact us
                today! Our team is ready to assist you with expert advice and
                high-quality services. Let’s build something great together!
              </h2>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <div className="button text-lg-end text-center">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
