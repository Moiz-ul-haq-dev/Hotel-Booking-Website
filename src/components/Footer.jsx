import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mx-40">
          <div className="text-white text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} HOTELIER. All rights reserved.</p>
            <p>GT Road, Near UET Lahore, Punjab Pakistan.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/About" className="text-white hover:text-gray-400 transition-colors duration-300">
              About Us
            </Link>
            <Link to="/Services" className="text-white hover:text-gray-400 transition-colors duration-300">
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
