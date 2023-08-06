import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUsPage() {
    return (
        <>
            <div id="about-us" className='mx-32 my-24 flex h-auto'>
                <div className='w-96'>
                    <h1 className='flex text-orange-400 font-bold text-3xl'>ABOUT US <p className='ml-4 font-normal'>━━━━</p></h1>
                    <h1 className='font-bold text-5xl mt-6'>Welcome To</h1>
                    <h1 className='font-bold text-orange-400 text-5xl'>HOTELIER</h1>
                    <p className='mt-6 text-gray-500 text-justify'>Discover a world of indulgence and relaxation at Hotelier. With an array of amenities such as a spa, fitness center, and gourmet dining options, we are committed to providing an unforgettable experience for all our guests.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <div className="card flex-1 border shadow-lg">
                            <img src="/images/customer.png" alt="Customers Logo" className="w-16 h-16 mx-auto mb-4 mt-2" />
                            <div className="card-content flex flex-col justify-center items-center">
                                <p className="text-5xl font-bold text-orange-400">500</p>
                                <h2 className="text-md font-normal mt-2 text-center">Number of Customers</h2>
                            </div>
                        </div>
                        <div className="card flex-1 border shadow-lg">
                            <img src="/images/employees.png" alt="Employees Logo" className="w-16 h-16 mx-auto mb-4 mt-2" />
                            <div className="card-content flex flex-col justify-center items-center">
                                <p className="text-5xl font-bold text-orange-400">50</p>
                                <h2 className="text-md font-normal mt-2 text-center">Number of Employees</h2>
                            </div>
                        </div>
                        <div className="card flex-1 border shadow-lg">
                            <img src="/images/rooms.png" alt="Rooms Logo" className="w-16 h-16 mx-auto mb-4 mt-2" />
                            <div className="card-content flex flex-col justify-center items-center">
                                <p className="text-5xl font-bold text-orange-400">100</p>
                                <h2 className="text-md font-normal mt-2 text-center">Number of Rooms</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Link to="/" className="bg-orange-400 text-white font-bold py-4 px-10">Explore More</Link>
                    </div>
                </div>
                <div className='flex-1 flex items-center justify-end'>
                    <img
                        src="/images/Hotel4.jpeg"
                        alt="Loading"
                        className="max-w-lg w-full max-h-lg object-cover"
                    />
                </div>
            </div>
        </>
    )
}
