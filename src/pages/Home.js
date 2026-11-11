import React from "react";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Online Bookstore</h1>
      <p className="home-subtitle">
        Your ultimate destination to explore, manage, and discover your favorite books.
      </p>

      <div className="home-content-box">
        <p>
          We provide an easy and seamless way to browse books across different categories 
          such as programming, novels, and science. Use our management system to add, 
          update, and organize your bookstore inventory effortlessly.
        </p>
      </div>
    </div>
  );
}

export default Home;