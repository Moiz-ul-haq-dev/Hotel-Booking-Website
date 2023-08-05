import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mx-40">
          <div className="text-white text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-400 transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-400 transition-colors duration-300">
              About Us
            </a>
            <a href="/services" className="text-white hover:text-gray-400 transition-colors duration-300">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
