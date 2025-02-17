import React from "react";
import { Helmet } from "react-helmet";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/styling/error.scss";

function Error({ page }) {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Gulf Masa Metal Industries (GMCO)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <TopSection />
      <Navbar />
      <Breadcrumb page="404" />
      <div className="error py-5">
        <div className="container px-lg-5">
          <div className="error-msg text-center">
            <h1>OOPS!</h1>
            <h3>404 - Page Not Found</h3>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Link to="/">Back Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
