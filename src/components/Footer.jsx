import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToService = () => {
    const serviceSelection = document.getElementById('services');
    if (serviceSelection) {
      serviceSelection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToStart = () => {
    const startSelection = document.getElementById('navbar');
    if (startSelection) {
      startSelection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mx-40">
          <div className="text-white text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} HOTELIER. All rights reserved.</p>
            <p>GT Road, Near UET Lahore, Punjab Pakistan.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={handleScrollToStart}>
              Home
            </Link>
            <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={handleScrollToAbout}>
              About
            </Link>
            <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={handleScrollToService}>
              Services
            </Link>
            <Link to="/Contact" className="text-white hover:text-gray-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
