import React from "react";
import { Helmet } from "react-helmet";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import AllProjects from "../components/AllProjects";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

function Projects({ page }) {
  return (
    <>
      <Helmet>
        <title>Our Projects | Gulf Masa Metal Industries (GMCO)</title>
        <meta
          name="description"
          content="Discover the successful projects executed by Gulf Masa Metal Industries, showcasing our expertise in metal fabrication, structural steel, and custom metal solutions for various industries."
        />
        <meta
          name="keywords"
          content="Metal Projects, Steel Structures, Custom Metal Fabrication, Industrial Metal Solutions, GMCO Projects, Construction Projects"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
      </Helmet>

      <TopSection />
      <Navbar page="projects" />
      <Breadcrumb page="Projects" />
      <AllProjects />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Projects;
