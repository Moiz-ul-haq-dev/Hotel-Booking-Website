import React, { useState } from 'react';

export default function Sidebar(handleSectionChange) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSectionClick = (section) => {
    handleSectionChange.onSectionChange(section);
  };

  return (
    <nav className={`bg-gray-800 text-white p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <button
        className="text-white text-lg mb-4 flex items-center"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={collapsed ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
        </svg>
      </button>
      {!collapsed && (
        <ul>
          <li>
          <div className="block font-bold py-2 cursor-pointer hover:text-orange-400" onClick={() => handleSectionClick('dashboard')}>
              Dashboard
            </div>
          </li>
          <li>
            <div className="block font-bold py-2 cursor-pointer hover:text-orange-400" onClick={() => handleSectionClick('manage-employees')}>
                Manage Employees
            </div>
          </li>
          <li>
            <div className="block font-bold py-2 cursor-pointer hover:text-orange-400" onClick={() => handleSectionClick('manage-rooms')}>
                Manage Rooms
            </div>
          </li>
          <li>
            <div className="block font-bold py-2 cursor-pointer hover:text-orange-400" onClick={() => handleSectionClick('manage-bookings')}>
                Manage Bookings
            </div>
          </li>
          <li>
            <div className="block font-bold py-2 cursor-pointer hover:text-orange-400" onClick={() => handleSectionClick('reviews')}>
                Reviews
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}
