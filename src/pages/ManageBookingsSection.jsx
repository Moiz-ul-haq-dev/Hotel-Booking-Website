import React, { useState } from 'react';

const initialBookings = [
  {
    id: 1,
    roomNo: '101',
    person: 'Alice Johnson',
    arrivalDate: '2023-08-15',
    departureDate: '2023-08-20',
    status: 'Pending',
  },
  // Add more bookings...
];

export default function ManageBookingsSection() {
  const [bookings, setBookings] = useState(initialBookings);

  const handleApproveBooking = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Approved' } : booking
    );
    setBookings(updatedBookings);
  };

  const handleRejectBooking = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Rejected' } : booking
    );
    setBookings(updatedBookings);
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Bookings</h2>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="bg-white rounded-lg shadow-md p-4">
            <p className="text-lg font-bold mb-2">Booking ID: {booking.id}</p>
            <p className="mb-2">Room No: {booking.roomNo}</p>
            <p className="mb-2">Person: {booking.person}</p>
            <p className="mb-2">Arrival Date: {booking.arrivalDate}</p>
            <p className="mb-2">Departure Date: {booking.departureDate}</p>
            <p className="mb-2">Status: {booking.status}</p>
            {booking.status === 'Pending' && (
              <div className="flex">
                <button
                  className="text-green-500 mr-2"
                  onClick={() => handleApproveBooking(booking.id)}
                >
                  Approve
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleRejectBooking(booking.id)}
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
