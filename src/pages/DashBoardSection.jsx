import React, { useState, useEffect } from 'react'

export default function DashBoardSection() {
  const [rooms, setRooms] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState(0);
  const [freeRooms, setFreeRooms] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [approvedBookings, setApprovedBookings] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);
  const [generatedRevenue, setGeneratedRevenue] = useState(0);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    console.log('fetchEmployees called');
    fetch('http://localhost:4000/getRooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].roomAvailability === 'Unavailable') {
            setOccupiedRooms(occupiedRooms + 1);
          }
          else {
            setFreeRooms(freeRooms + 1);
          }
        }
        setRooms(data);
      }
      );
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Rooms Information</h3>
          <p>Total Rooms: {rooms.length}</p>
          <p>Occupied Rooms: {occupiedRooms}</p>
          <p>Free Rooms: {freeRooms}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Bookings Information</h3>
          <p>Total Bookings: {totalBookings}</p>
          <p>Approved Bookings: {approvedBookings}</p>
          <p>Pending Bookings: {pendingBookings}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <h3 className="text-lg font-semibold mb-2">Generated Revenue</h3>
          <p>Total Revenue: {generatedRevenue}</p>
        </div>
      </div>
    </div>
  );
}
