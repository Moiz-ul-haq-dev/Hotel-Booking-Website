import React from 'react';
import { Link } from 'react-router-dom';

const roomsData = [
    {
        title: 'Junior Suite',
        rating: '⭐⭐⭐⭐⭐',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        price: '$100/Night',
        imageSrc: '/images/Room1.jpg',
    },
    {
        title: 'Executive Suite',
        rating: '⭐⭐⭐⭐⭐',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        price: '$150/Night',
        imageSrc: '/images/Room2.jpg',
    },
    {
        title: 'Super Deluxe',
        rating: '⭐⭐⭐⭐⭐',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        price: '$200/Night',
        imageSrc: '/images/Room3.jpg',
    },
];

export default function ExploreRoomsPage() {
  return (
    <>
      <div className="mx-32 my-24 h-auto">
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
              <img src={room.imageSrc} alt={room.title} className="w-full h-48 object-cover" />
              <div className="card-price absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-orange-400 text-white font-bold py-2 px-4">
                {room.price}
              </div>
              <div className="card-content p-4 mt-8">
                <h2 className="text-lg font-semibold mb-2">
                  {room.title} <p className="float-right">{room.rating}</p>
                </h2>
                <p className="text-gray-600">{room.description}</p>
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