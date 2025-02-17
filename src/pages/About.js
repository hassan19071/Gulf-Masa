import React from "react";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import GetInTouch from "../components/GetInTouch";
import AboutParagraph from "../components/AboutParagraph";
import { Helmet } from "react-helmet";
function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Gulf Masa Metal Industries (GMCO)</title>
        <meta
          name="description"
          content="Gulf Masa Metal Industries is a leading manufacturer and supplier of high-quality metal products and custom fabrication solutions in Saudi Arabia, including Dammam and Khobar."
        />
        <meta
          name="keywords"
          content="Gulf Masa Metal Industries, Metal Fabrication Saudi Arabia, Structural Steel Manufacturing, Aluminum Systems, CNC Cutting, Dammam, Khobar, Custom Metal Solutions"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
        <meta
          property="og:title"
          content="About Us | Gulf Masa Metal Industries"
        />
        <meta
          property="og:description"
          content="Learn about Gulf Masa Metal Industries, a trusted provider of high-quality metal products and fabrication solutions across Saudi Arabia and the Gulf region."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-image.jpg"
        />
      </Helmet>
      <TopSection />
      <Navbar page="about" />
      <Breadcrumb page="About Us" />
      <AboutParagraph />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default About;
