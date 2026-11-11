import React from "react";
import '../styles/Feature.css'

function Features() {
  return (
    <div className="features-container">
      <h1 className="features-title">Our Store Features & Services</h1>
      <p className="features-subtitle">
        Discover what makes our Online Bookstore the best place for your reading needs.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>📚 Vast Book Collection</h3>
          <p>Browse through hundreds of titles across programming, novels, and science categories.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Easy Book Management</h3>
          <p>Add, update, and manage your book inventory smoothly with our interactive tools.</p>
        </div>

        <div className="feature-card">
          <h3>🔍 Quick Search & Filter</h3>
          <p>Find the exact book or category you are looking for in seconds without any hassle.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;