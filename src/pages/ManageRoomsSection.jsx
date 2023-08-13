import React, { useState, useEffect } from 'react';


export default function ManageRoomsSection() {
  const [rooms, setRooms] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchRooms();
    fetchEmployees();
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

  const fetchEmployees = async () => {
    console.log('fetchEmployees called');
    fetch('http://localhost:4000/getEmployees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      }
      );
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 ">
        <form action='http://localhost:4000/addRooms' method='post' encType="multipart/form-data" key = {"roomsId"}>
          <h3 className="text-lg font-bold mb-2 text-center">Add New Room</h3>
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Room Number:</label>
          <input
            type="text"
            placeholder="Room Number"
            // value={newRoom.roomNo}
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
            name="roomNo"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Room Type:</label>
          <select
            // value={newRoom.servantName}
            name='roomType'
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
          >
            <option value="">Select a Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
          </select>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Servant Name:</label>
          <select
            // value={newRoom.servantName}
            name="servantName"
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
          >
            <option value="">Select a servant</option>
            {employees.map((employee) => (
              <option key={employee._id} value={employee.name}>{employee.name}</option>
            ))}
          </select>
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Price Per Day:</label>
          <input
            type="text"
            placeholder="Price Per Day"
            // value={newRoom.pricePerDay}
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
            name="pricePerDay"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Room Image:</label>
          <input
            type="file"
            placeholder="Room Image"
            // value={newRoom.roomImage}
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
            name="roomImage"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Description:</label>
          <input
            type="text"
            placeholder="Description"
            // value={newRoom.description}
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
            name="roomDescription"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Availability:</label>
          <select
            // value={newRoom.servantName}
            name="roomAvailability"
            className='block w-full border border-gray-300 rounded-md py-2 px-3 mb-3'
          >
            <option value="">Select Room Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <button className="bg-white w-full text-orange-500 font-bold py-2 px-4 rounded-md" type='submit'>
            Add Room
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-bold mb-4">Manage Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room,index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={`http://localhost:4000/roomImages/${room.roomImage}`} alt={`Room ${room.roomNo}`} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold mb-1">{room.roomNo}</h3>
            <p className="mb-2">{room.description}</p>
            <p className="text-sm text-gray-500 mb-2">Type: {room.roomType}</p>
            <p className="text-sm text-gray-500 mb-2">Price per day: {room.pricePerDay}</p>
            <p className="text-sm text-gray-500 mb-2">Availability: {room.roomAvailability}</p>
            <p className="text-sm text-gray-500 mb-2">Servant: {room.servantName}</p>
            <p className="text-sm text-gray-500 mb-2">Room Description : {room.roomDescription}</p>

            {/* Booking History */}
            {/* <div className="mb-2">
              <h4 className="text-sm font-bold mb-1">Booking History:</h4>
              {room.bookingHistory.map((booking) => (
                <div key={booking.id} className="text-sm">
                  <p>Person: {booking.person}</p>
                  <p>Arrival Date: {booking.arrivalDate}</p>
                  <p>Departure Date: {booking.departureDate}</p>
                </div>
              ))}
            </div> */}

            <button className="text-blue-500 mr-2">Update</button>
            <button
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
