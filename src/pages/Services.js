import React from "react";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import GetInTouch from "../components/GetInTouch";
import AllServices from "../components/AllServices";
import { Helmet } from "react-helmet";
function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Gulf Masa Metal Industries (GMCO)</title>
        <meta
          name="description"
          content="Explore our range of professional metal services, including metal fabrication, structural steel manufacturing, CNC cutting, welding, and custom metal solutions. Gulf Masa Metal Industries is your trusted partner for precision and quality."
        />
        <meta
          name="keywords"
          content="Metal Fabrication, Structural Steel, CNC Cutting, Welding Services, Custom Metal Solutions, Surface Finishing, Aluminum Fabrication, Sheet Metal Work, GMCO"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
      </Helmet>
      <TopSection />
      <Navbar page="services" />
      <Breadcrumb page="Services" />
      <AllServices />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Services;
