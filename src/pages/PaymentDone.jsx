import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

export default function paymentDone() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Payment Done</h1>
        <p className="text-orange-500">
          Your payment has been successfully processed. Thank you for your purchase!
        </p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline block">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
