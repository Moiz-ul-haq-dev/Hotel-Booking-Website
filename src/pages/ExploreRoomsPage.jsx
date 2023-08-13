import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ExploreRoomsPage() {

  const [roomsData, setRooms] = useState([]);

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
        setRooms(data);
      }
      );
  };
  return (
    <>
      <div id="rooms" className="mx-32 my-24 h-auto">
        <h1 className="flex text-orange-400 font-bold text-lg justify-center">
          <p className="mr-4 font-normal">━━━━</p> OUR ROOMS <p className="ml-4 font-normal">━━━━</p>
        </h1>
        <h1 className="flex font-bold text-4xl mt-6 justify-center">
          Explore Our <p className="ml-4 text-orange-400">ROOMS</p>
        </h1>
        <div className="flex space-x-4 my-10">
          {roomsData.map((room, index) => (
            <div
              key={index}
              className="card flex-1 border shadow-lg relative transition-transform transform-gpu hover:scale-105"
            >
              <img src={`http://localhost:4000/roomImages/${room.roomImage}`} alt={room.title} className="w-full h-48 object-cover" />
              <div className="card-price absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-orange-400 text-white font-bold py-2 px-4">
                ${room.pricePerDay}
              </div>
              <div className="card-content p-4 mt-8">
                <h2 className="text-lg font-semibold mb-2">
                  {room.roomAvailability === 'Available' ? (
                    <span className="text-green-500">{room.roomAvailability}</span>
                  ) : (
                    <span className="text-red-500">{room.roomAvailability}</span>
                  )}
                </h2>
                <h2 className="text-lg font-semibold mb-2">{room.roomType}</h2>
                <h2 className="text-lg font-semibold mb-2">{room.servantName}</h2>
                <p className="text-gray-600">{room.roomDescription}</p>
                <div className="mt-4 flex justify-between">
                  <Link to="/" className="bg-orange-400 text-white text-center py-4 px-4 w-full">
                    View Details
                  </Link>
                  <Link to="/" className="bg-black text-white text-center py-4 px-4 w-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}