import React from "react";
import { Helmet } from "react-helmet";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";

function Products({ page }) {
  return (
    <>
      <Helmet>
        <title>Our Products | Gulf Masa Metal Industries (GMCO)</title>
        <meta
          name="description"
          content="Explore our high-quality metal products, including aluminum doors, windows, metal blinds, and automatic doors, manufactured by Gulf Masa Metal Industries (GMCO)."
        />
        <meta
          name="keywords"
          content="Metal Products, Aluminum Doors, Aluminum Windows, Metal Blinds, Automatic Doors, GMCO Products, Custom Metal Solutions"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
      </Helmet>

      <TopSection />
      <Navbar page="products" />
      <Breadcrumb page="Products" />
      <AllProducts />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Products;
