import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);

    const [userEmail, setUserEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check local storage for user login status
        const userLoginStatus = localStorage.getItem('loggedIn');
        const userEmail = localStorage.getItem('email');

        if (userLoginStatus === 'true' && userEmail) {
            setLoggedIn(true);
            setUserEmail(userEmail);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('email');
        localStorage.removeItem('userRole');
        setLoggedIn(false);
        setUserEmail('');
        // Perform additional logout actions if needed
    };

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToService = () => {
        const serviceSelection = document.getElementById('services');
        if (serviceSelection) {
            serviceSelection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToStart = () => {
        const startSelection = document.getElementById('navbar');
        if (startSelection) {
            startSelection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToRooms = () => {
        const roomSelection = document.getElementById('rooms');
        if (roomSelection) {
            roomSelection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <nav id="navbar" className="flex justify-between items-center h-auto bg-black text-orange-400 relative shadow-sm font-mono" role="navigation">
                <Link href="/" className="pl-8 text-4xl font-bold">HOTELIER</Link>
                <div className="px-4 cursor-pointer md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <div className="pr-8 text-white items-center flex justify-center">
                    <Link to="/" className="py-2 px-4 font-bold" onClick={handleScrollToStart}>Home</Link>
                    {/* <Link to="/About" className="py-2 px-4 font-bold">About</Link> */}
                    <Link to="/" className="py-2 px-4 font-bold" onClick={handleScrollToAbout}>
                        About
                    </Link>
                    <Link to="/" className="py-2 px-4 font-bold" onClick={handleScrollToService}>Services</Link>
                    <Link to="/" className="py-2 px-4 font-bold" onClick={handleScrollToRooms}>Rooms</Link>
                    {/* <Link href="/" className="py-2 px-4 font-bold">Pages</Link> */}
                    <div className="relative">
                        <div
                            onClick={handleDropdownToggle}
                            className="p-2 cursor-pointer flex items-center font-bold"
                        >
                            Pages
                            <svg
                                className={`w-4 h-4 ml-1 transform ${showDropdown ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        {showDropdown && (
                            <div className="absolute top-full left-0 w-40 bg-white border border-gray-300 shadow-lg z-20">
                                <Link to="/" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-200 hover:text-black">Booking</Link>
                                <Link to="/" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-200 hover:text-black">Our Team</Link>
                                <Link to="/" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-200 hover:text-black">Testimonial</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/Contact" className="py-2 px-4 font-bold text-orange-400">Contact</Link>
                </div>
                <div className="hidden md:block">
                    {/* <Link to='/LoginSignup'><button className="bg-orange-400 font-bold text-white text-lg h-16 w-56 px-4 py-2">
                        Login / SignUp →
                    </button>
                    </Link> */}
                    {loggedIn ? (
                        <div className="flex items-center">
                            <p className="flex mr-2 py-2">{userEmail}</p>
                            <button className="bg-orange-400 font-bold text-lg h-16 w-32 text-white px-4 py-2" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to='/LoginSignup'>
                            <button className="bg-orange-400 font-bold text-white text-lg h-16 w-56 px-4 py-2">
                                Login / SignUp →
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}
