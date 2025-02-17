import React from 'react';
import { Helmet } from 'react-helmet';
import TopSection from '../components/TopSection';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';

function Contact({ page }) {
  return (
    <>
      <Helmet>
        <title>Contact Us | Gulf Masa Metal Industries (GMCO)</title>
        <meta
          name="description"
          content="Get in touch with Gulf Masa Metal Industries (GMCO) for inquiries, custom metal solutions, or consultation. We are here to assist you with top-quality services."
        />
        <meta
          name="keywords"
          content="Contact GMCO, Metal Fabrication Inquiry, Custom Metal Solutions, Steel Manufacturing, Aluminum Fabrication, Metal Services"
        />
        <meta name="author" content="Gulf Masa Metal Industries" />
      </Helmet>

      <TopSection />
      <Navbar page="contact" />
      <Breadcrumb page="Contact" />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;
