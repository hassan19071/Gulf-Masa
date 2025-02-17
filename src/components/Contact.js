import React from "react";
import "./styling/contact-info.scss";
function ContactSection() {
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
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className="col-md-6">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn">
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
