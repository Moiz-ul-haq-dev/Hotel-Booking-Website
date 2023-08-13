import React, { useState } from 'react'
import Sidebar from '../components/SideBar';
import DashBoardSection from './DashBoardSection';
import ManageEmployeesSection from './ManageEmployeesSection';
import ManageRoomsSection from './ManageRoomsSection';
import ManageBookingsSection from './ManageBookingsSection';
import ReviewsSection from './ReviewsSection';


export default function AdminDashboardPage() {

  const [selectedSection, setSelectedSection] = useState(''); // Default selected section

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    localStorage.getItem('userRole') === 'Admin' ?
      <>
        <div className={`flex ${selectedSection !== '' ? 'h-auto' : 'h-screen'}`}>
        <Sidebar onSectionChange={handleSectionChange}/>
          <div className="flex-grow">
            {selectedSection === 'dashboard' && <DashBoardSection/>}
            {selectedSection === 'manage-employees' && <ManageEmployeesSection />}
            {selectedSection === 'manage-rooms' && <ManageRoomsSection />}
            {selectedSection === 'manage-bookings' && <ManageBookingsSection />}
            {selectedSection === 'reviews' && <ReviewsSection />}
          </div>
        </div>
      </>
      :
      <>
        <h1>Access Denied</h1>
      </>
  )
}
