import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './pages/About';
import BookManager from './pages/Bookmanager';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Home from './pages/Home';






function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="main-content" style={{ minHeight: '70vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookmanager" element={<BookManager />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;