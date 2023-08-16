import React, { useState, useEffect } from 'react';

export default function ExploreStaffPage() {
  const [employees, setEmployees] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    fetch('http://localhost:4000/getEmployees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  };

  const visibleEmployees = showAll ? employees : employees.slice(0, 3);

  return (
    <div className="mx-32 my-24">
      <h1 className="flex text-orange-400 font-bold text-lg justify-center">
        <p className="mr-4 font-normal">━━━━</p> OUR TEAM <p className="ml-4 font-normal">━━━━</p>
      </h1>
      <h1 className="flex font-bold text-4xl mt-6 justify-center">
        Explore Our <p className="ml-4 text-orange-400">STAFFS</p>
      </h1>
      <div className="grid gap-8 md:grid-cols-3 my-10">
        {visibleEmployees.map((staff, index) => (
          <div
            key={index}
            className="bg-white p-6 text-black flex flex-col items-center rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-orange-400"
          >
            <img
              src={`http://localhost:4000/images/${staff.image}`}
              alt={staff.name}
              className="w-44 h-44 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{staff.name}</h2>
            <p className="text-sm mb-2">{staff.contact}</p>
          </div>
        ))}
      </div>
      {!showAll && employees.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-orange-400 font-semibold hover:underline"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
