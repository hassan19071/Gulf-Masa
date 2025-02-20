import React, { useState } from "react";
import axios from "axios";
import "./styling/contact-info.scss";

function ContactSection() {
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
    <div className="contact-us">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1788.382933726919!2d50.212428234267506!3d26.301689109086084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1739453646658!5m2!1sar!2ssa"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-6 p-5">
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
              {errors.name && <div className="text-danger">{errors.name}</div>}
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
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
