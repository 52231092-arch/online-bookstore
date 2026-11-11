import React from "react";
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Get in touch with us for any inquiries or support regarding our bookstore.
      </p>

      <div className="contact-info-box">
        <p><strong>Email:</strong> support@onlinebookstore.com</p>
        <p><strong>Phone:</strong> +961 3 123 456</p>
        <p><strong>Address:</strong> Tripoli, Lebanon</p>
      </div>
    </div>
  );
}

export default Contact;