import React from 'react';

const staffData = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageSrc: '/images/CEO.jpg',
    socialMedia: {
      twitter: '/path/to/twitter-logo.png',
      linkedin: '/path/to/linkedin-logo.png',
      facebook: '/path/to/facebook-logo.png',
    },
  },
  {
    name: 'Jane Smith',
    position: 'Manager',
    imageSrc: '/path/to/staff2.jpg',
    socialMedia: {
      twitter: '/path/to/twitter-logo.png',
      linkedin: '/path/to/linkedin-logo.png',
      facebook: '/path/to/facebook-logo.png',
    },
  },
  // Add more staff members as needed...
];

export default function ExploreStaffPage() {
  return (
    <div className="mx-32 my-24">
      <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">Our Staff</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {staffData.map((staff, index) => (
          <div key={index} className="bg-white p-6 text-black flex flex-col items-center rounded-lg shadow-lg">
            <img
              src={staff.imageSrc}
              alt={staff.name}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{staff.name}</h2>
            <p className="text-sm mb-2">{staff.position}</p>
            <div className="flex space-x-4">
              {Object.entries(staff.socialMedia).map(([platform, logoSrc]) => (
                <img
                  key={platform}
                  src={logoSrc}
                  alt={`${platform} logo`}
                  className="w-6 h-6 object-contain"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
