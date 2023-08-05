import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
    const imageHeight = {
        height: "600px"
    };

    return (
        <div className="relative">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3500}
            >
                <div>
                    <img src="/images/Hotel1.jpeg" alt="Image 1" style={imageHeight} />
                </div>
                <div>
                    <img src="/images/Hotel2.jpeg" alt="Image 2" style={imageHeight} />
                </div>
                <div>
                    <img src="/images/Hotel3.jpeg" alt="Image 3" style={imageHeight} />
                </div>
            </Carousel>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <p className="text-white text-7xl font-bold mb-4 text-center">Discover A Brand <br /> Luxurious Hotel</p>
                <div className='mt-5'>
                    <button className="px-12 py-4 bg-white text-black font-bold mr-4">Learn More</button>
                    <button className="px-12 py-4 bg-orange-400 text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
