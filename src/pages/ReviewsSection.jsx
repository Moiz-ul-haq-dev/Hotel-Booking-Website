import React from 'react';

export default function ReviewsSection() {
  // Assuming you have a list of reviews
  const reviews = [
    {
      id: 1,
      guestName: 'John Doe',
      rating: 4,
      reviewText: 'Great experience! The room was comfortable and the service was excellent.',
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      rating: 5,
      reviewText: 'Absolutely loved my stay. The staff was friendly and the room was clean.',
    },
    // Add more reviews here...
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2a8 8 0 100 16 8 8 0 000-16z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="bg-white rounded-lg shadow p-4">
        {reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <h3 className="text-lg font-semibold">{review.guestName}</h3>
            <div className="flex items-center mt-2">
              <div className="mr-2 flex">{renderStars(review.rating)}</div>
              <p className="text-gray-600">{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
