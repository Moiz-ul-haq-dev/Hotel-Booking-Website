import React from 'react';

const servicesData = [
    {
        title: 'Rooms & Apartments',
        icon: 'icon-service-1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dolor non est porttitor placerat. In eu est vitae felis vehicula luctus.',
    },
    {
        title: 'Food & Restaurants',
        icon: 'icon-service-2',
        description:
            'Phasellus nec justo sagittis, tempor erat vel, feugiat lectus. Maecenas convallis euismod lacus eget laoreet. Curabitur vel posuere tellus.',
    },
    {
        title: 'Spa & Fitness',
        icon: 'icon-service-3',
        description:
            'Donec tincidunt odio vitae velit volutpat, non maximus odio euismod. Aenean id nulla at justo auctor finibus quis a metus.',
    },
    {
        title: 'Sports & Gaming',
        icon: 'icon-service-4',
        description:
            'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis lacinia ultricies.',
    },
    {
        title : 'Event & Party',
        icon: 'icon-service-5',
        description:
            'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis lacinia ultricies.',
    },
    {
        title: 'Gym & Yoga',
        icon: 'icon-service-6',
        description:
            'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis lacinia ultricies.',
    },
];

export default function OurServicesPage() {
    return (
        <>
            <div className="mx-32 my-24">
                <h1 className="flex text-orange-400 font-bold text-lg justify-center">
                    <p className="mr-4 font-normal">━━━━</p> OUR SERVICES <p className="ml-4 font-normal">━━━━</p>
                </h1>
                <h1 className="flex font-bold text-4xl mt-6 justify-center">
                    Explore Our <p className="ml-4 text-orange-400">SERVICES</p>
                </h1>
                <div className="grid gap-6 md:grid-cols-3 my-10">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white border shadow-lg p-6 flex flex-col items-center rounded-lg transform transition-transform hover:scale-105 hover:bg-orange-400 hover:text-white hover:text-white'`}
                        >
                            <div className="w-12 h-12 bg-orange-400 text-white rounded-full flex items-center justify-center mb-4">
                                <i className={`icon-${service.icon} text-2xl`} />
                            </div>
                            <h2 className="text-lg mb-4 font-bold hover:text-white">{service.title}</h2>
                            <p className="text-gray-600 text-center hover:text-white">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
