import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactUsPage() {

    const [userName , setUserName] = useState('');
    const [userEmail , setUserEmail] = useState('');
    const [userPhone , setUserPhone] = useState('');
    const [userMessage , setUserMessage] = useState('');

    const handleNameChange = (e) => {
        setUserName(e.target.value);    
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setUserPhone(e.target.value);
    };

    const handleMessageChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userName, userEmail, userPhone, userMessage);

        fetch('http://localhost:4000/sendContactMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, userEmail, userPhone, userMessage }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert('Something went wrong. Please try again later.');
                } else {
                    alert('Thank you for contacting us!');
                }
            });
    };

    return (
        <>
            <Navbar />
            <div id="rooms" className="mx-32 my-24 h-auto">
                <h1 className="flex text-orange-400 font-bold text-lg justify-center">
                    <p className="mr-4 font-normal">━━━━</p> CONTACT US <p className="ml-4 font-normal">━━━━</p>
                </h1>
                <h1 className="flex font-bold text-4xl mt-6 justify-center">
                    <p className="mr-4 text-orange-400">CONTACT</p> For Any Query
                </h1>
                <div className="container mx-auto my-12">
                    <form encType="multipart/form-data" className='block'>
                        <div className="card border shadow-lg relative p-4">
                            <label className="text-lg font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                // value={formData.name}
                                onChange={handleNameChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label className="text-lg font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="useremail"
                                // value={formData.email}
                                onChange={handleEmailChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label className="text-lg font-semibold mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="userphone"
                                // value={formData.phone}
                                onChange={handlePhoneChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="card border shadow-lg relative p-4">
                            <label className="text-lg font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                typeof='text'
                                name="usermessage"
                                // value={formData.message}
                                onChange={handleMessageChange}
                                className="w-full p-2 border rounded-lg resize-none"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type='submit' className="bg-orange-400 text-white my-10 font-bold w-full py-4 px-8" onClick={handleSubmit}>Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
