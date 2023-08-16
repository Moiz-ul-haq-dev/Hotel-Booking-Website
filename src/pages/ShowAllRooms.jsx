import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllRooms() {
    const [roomsData, setRoomsData] = useState([]);

    useEffect(() => {
        // Fetch rooms data from API
        fetch('https://sheer-fixed-mask.glitch.me/getRooms')
            .then((response) => response.json())
            .then((data) => {
                setRoomsData(data);
            });
    }, []);

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

    return (
        <div className="px-6 py-10">
            <h1 className="text-2xl font-semibold mb-6">All Available Rooms</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                ))}
            </div>
        </div>
    );
}
