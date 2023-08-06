import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactUsPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server or perform validation
        console.log('Form data submitted:', formData);
    };



    return (
        <>
            <Navbar />
            <div id="rooms" className="mx-32 my-24 h-auto">
                <h1 className="flex text-orange-400 font-bold text-lg justify-center">
                    <p className="mr-4 font-normal">━━━━</p> CONTACT US <p className="ml-4 font-normal">━━━━</p>
                </h1>
                <h1 className="flex font-bold text-4xl mt-6 justify-center">
                    <p className="mr-4 text-orange-400">CONATCT</p> For Any Query
                </h1>
                <div className="container mx-auto my-12">
                    <form onSubmit={handleSubmit} className="block">
                        <div className="card border shadow-lg relative p-4">
                            <label htmlFor="name" className="text-lg font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label htmlFor="email" className="text-lg font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label htmlFor="phone" className="text-lg font-semibold mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label htmlFor="message" className="text-lg font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg resize-none"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-orange-400 text-white my-10 font-bold w-full py-4 px-8">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
