import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styling/contact-info.scss";

function ContactInfos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formPayload = new FormData();
    formPayload.append("access_key", "8fede58a-bddf-4ce7-8b57-8e6a73fe5dfe"); // Replace with your Web3Forms Access Key
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formPayload
      );
      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="contact-infos-section py-5 mt-5">
      <div className="container px-lg-5 py-5">
        <div className="row align-items-center py-4">
          <div className="col-lg-7">
            <div className="contact-form">
              <div className="title mb-4">
                <h4>Contact Us</h4>
              </div>
              {success && (
                <p className="text-success">Message sent successfully!</p>
              )}
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                  )}
                </div>
                <div className="col-12">
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-4 mt-lg-0 mt-4">
            <div className="infos">
              <div className="head">
                <h4>Get in Touch with Us</h4>
                <p>
                  Contact us today! Our team is ready to assist you with expert
                  advice and high-quality services. Reach out via phone, email,
                  or visit us at our office.
                </p>
              </div>
              <div className="company-infos mb-3 mt-3">
                <div className="info d-flex align-items-center">
                  <div className="icon">
                    <MdPhone />
                  </div>
                  <div className="text ms-2">
                    <Link to="tel:+966540355787">0540355787</Link>
                  </div>
                </div>
                <div className="info d-flex align-items-center my-3">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <div className="text ms-2">
                    <Link to="mailto:info@gmco.sa">Info@gmco.sa</Link>
                  </div>
                </div>
                <div className="info d-flex align-items-center">
                  <div className="icon">
                    <MdLocationOn />
                  </div>
                  <div className="text ms-2">
                    <span>Salman Bin Abdulaziz St, Khobar, KSA</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="social-media mt-3">
                <Link to="#">
                  <FaFacebook />
                </Link>
                <Link to="#">
                  <FaWhatsapp />
                </Link>
                <Link to="#">
                  <FaTelegram />
                </Link>
                <Link to="#">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfos;
