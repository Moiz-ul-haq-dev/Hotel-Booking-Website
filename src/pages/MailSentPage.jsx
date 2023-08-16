import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function MailSentPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Thank You for Contacting Us!</h2>
      <p className="text-gray-600 mb-6">
        We appreciate your message and will get back to you as soon as possible.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
