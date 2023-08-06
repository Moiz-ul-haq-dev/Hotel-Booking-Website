import React from 'react';

const staffData = [
  {
    name: 'Moiz-ul-haq',
    position: 'CEO',
    imageSrc: '/images/CEO.jpg',
    socialMedia: {
      twitter: '/images/twitter.png',
      linkedin: '/images/instagram.png',
      facebook: '/images/fb.png',
    },
  },
  {
    name: 'Jane Smith',
    position: 'Hotel Manager',
    imageSrc: '/images/Staff1.jpg',
    socialMedia: {
      twitter: '/images/twitter.png',
      linkedin: '/images/instagram.png',
      facebook: '/images/fb.png',
    },
  },
  {
    name: 'Emma Watson',
    position: 'Event Planner',
    imageSrc: '/images/Staff2.jpg',
    socialMedia: {
      twitter: '/images/twitter.png',
      linkedin: '/images/instagram.png',
      facebook: '/images/fb.png',
    },
  },
  // Add more staff members as needed...
];

export default function ExploreStaffPage() {
  return (
    <div className="mx-32 my-24">
       <h1 className="flex text-orange-400 font-bold text-lg justify-center">
          <p className="mr-4 font-normal">━━━━</p> OUR TEAM <p className="ml-4 font-normal">━━━━</p>
        </h1>
        <h1 className="flex font-bold text-4xl mt-6 justify-center">
          Explore Our <p className="ml-4 text-orange-400">STAFFS</p>
        </h1>
      <div className="grid gap-8 md:grid-cols-3 my-10">
        {staffData.map((staff, index) => (
          <div key={index} className="bg-white p-6 text-black flex flex-col items-center rounded-lg shadow-lg">
            <img
              src={staff.imageSrc}
              alt={staff.name}
              className="w-44 h-44 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{staff.name}</h2>
            <p className="text-sm mb-2">{staff.position}</p>
            <div className="flex space-x-4">
              {Object.entries(staff.socialMedia).map(([platform, logoSrc]) => (
                <div
                  key={platform}
                  className="w-10 h-10 bg-orange-400 rounded-md flex items-center justify-center"
                >
                  <img src={logoSrc} alt={`${platform} logo`} className="w-6 h-6 object-contain" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
