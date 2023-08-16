import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ExploreRoomsPage() {
  const [roomsData, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    // console.log('fetchEmployees called');
    fetch('https://sheer-fixed-mask.glitch.me/getRooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  };

  function BookingForm({ room }) {
    const [formOpen, setFormOpen] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [noOfChildren, setNoOfChildren] = useState('');
    const [noOfAdults, setNoOfAdults] = useState('');


    const openForm = () => {
      if (localStorage.getItem('loggedIn') === null) {
        alert('Please Login to Book Room');
        return;
      }
      else {
        if (localStorage.getItem('userRole') === 'Customer') {
          setFormOpen(true);
        }
      }
    };

    const closeForm = () => {
      setFormOpen(false);
    };

    const handleNameChange = (e) => {
      setCustomerName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setCustomerEmail(e.target.value);
    };

    const handleNumberChange = (e) => {
      setCustomerContact(e.target.value);
    };

    const handleNoOfChildrenChange = (e) => {
      setNoOfChildren(e.target.value);
    };

    const handleNoOfAdultsChange = (e) => {
      setNoOfAdults(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(customerName, customerEmail, customerContact, noOfChildren, noOfAdults, room);

      const response = await fetch('https://sheer-fixed-mask.glitch.me/paymentRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerName, customerEmail, customerContact, noOfChildren, noOfAdults, room }),
      });


      const data = await response.json();
      console.log(data);
      if (data.url) {
        window.location.href = data.url;
      }

      closeForm();
    };

    return (
      <>
        <button
          onClick={openForm}
          className="bg-black text-white text-center py-4 px-4 w-full"
        >
          Book Now
        </button>
        {formOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Booking Form for {room.roomType}</h2>
              <form encType='multipart/form-data'>
                <label htmlFor="personName">Person Name:</label>
                <input
                  type="text"
                  name="personName"
                  // value={formData.personName}
                  onChange={handleNameChange}
                  className="border rounded p-2 w-full mb-2"
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  // value={formData.email}
                  onChange={handleEmailChange}
                  className="border rounded p-2 w-full mb-2"
                />
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  name="contact"
                  // value={formData.contact}
                  onChange={handleNumberChange}
                  className="border rounded p-2 w-full mb-2"
                />
                <label htmlFor="numberOfChildren">Number of Children:</label>
                <input
                  type="number"
                  name="numberOfChildren"
                  // value={formData.numberOfChildren}
                  onChange={handleNoOfChildrenChange}
                  className="border rounded p-2 w-full mb-2"
                />
                <label htmlFor="numberOfAdults">Number of Adults:</label>
                <input
                  type="number"
                  name="numberOfAdults"
                  // value={formData.numberOfAdults}
                  onChange={handleNoOfAdultsChange}
                  className="border rounded p-2 w-full mb-2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  onClick={closeForm}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }


  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const container = carouselRef.current;
    container.scrollLeft -= container.offsetWidth; // Scroll by one item width
  };

  const scrollRight = () => {
    const container = carouselRef.current;
    container.scrollLeft += container.offsetWidth; // Scroll by one item width
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
          {roomsData.filter((room) => room.roomAvailability === 'Available').map((room, index) => (
            <div
              key={index}
              className="card flex-1 border shadow-lg relative transition-transform transform-gpu hover:scale-105"
            >
              <img
                src={`https://sheer-fixed-mask.glitch.me/roomImages/${room.roomImage}`}
                alt={room.title}
                className="w-full h-48 object-cover"
              />
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
                <div className="mt-4 flex justify-between space-x-4">
                  <Link
                    to="/"
                    className="bg-orange-400 text-white text-center py-4 px-4 w-full hover:bg-orange-500"
                  >
                    View Details
                  </Link>
                  <BookingForm room={room} />
                </div>
              </div>
            </div>
          )).slice(0, 3)}
        </div>

        {roomsData.length > 3 && (
          <Link to='/showAllRooms' className="bg-orange-400 text-white text-center py-2 px-4 mt-4 rounded hover:bg-orange-500">
            View All Rooms
          </Link>
        )}
      </div>
    </>
  );
}
