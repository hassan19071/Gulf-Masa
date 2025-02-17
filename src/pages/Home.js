import React from "react";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/About";
import ServicesSection from "../components/Services";
import ProductsSection from "../components/Products";
import ProjectsSection from "../components/Projects";
import GetInTouch from "../components/GetInTouch";
import ContactInfos from "../components/ContactInfos";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <>
      <Helmet>
        <title>GMCO | ماسة الخليج للصناعات المعدنية</title>
        <meta
          name="description"
          content="Gulf Masa Metal Industries is a trusted manufacturer and supplier of high-quality metal products and custom fabrication solutions in Saudi Arabia, including Dammam and Khobar."
        />
        <meta
          name="keywords"
          content="Metal Fabrication Saudi Arabia, Structural Steel Manufacturing, Aluminum Systems, CNC Cutting, Gulf Masa Metal Industries, Dammam, Khobar, Custom Metal Solutions"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
        <meta
          property="og:title"
          content="Gulf Masa Metal Industries | Leading Metal Fabrication in Saudi Arabia"
        />
        <meta
          property="og:description"
          content="Explore Gulf Masa Metal Industries, a leading provider of metal products, structural steel, and custom metal fabrication solutions across Saudi Arabia and the Gulf region."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-homepage-image.jpg"
        />
      </Helmet>
      <TopSection />
      <Navbar page="home" />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GetInTouch />
      <ProductsSection />
      <ProjectsSection />
      <ContactInfos />
      <Footer />
    </>
  );
}

export default Home;
