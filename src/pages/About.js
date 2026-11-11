import React from "react";
import '../styles/About.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Online Bookstore</h1>
      
      <div className="about-content">
        <p className="about-text">
          Welcome to our Online Bookstore! We are passionate about connecting readers 
          with their favorite books across various genres, including programming, novels, 
          science, and much more.
        </p>

        <p className="about-text">
          Our mission is to make book browsing, managing, and purchasing as simple 
          and enjoyable as possible through a clean, user-friendly interface.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>📚 Wide Selection</h3>
            <p>Explore a diverse collection of books tailored to all interests.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Easy Management</h3>
            <p>Seamlessly add, update, and organize your favorite reads.</p>
          </div>

          <div className="feature-card">
            <h3>💡 User Friendly</h3>
            <p>Designed with simplicity in mind for an effortless experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;