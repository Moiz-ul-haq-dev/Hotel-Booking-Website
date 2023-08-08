import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginSignupPage() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginSignup = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className={`flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 m-4 ${showLogin ? 'hidden' : ''}`}>
          <h1 className="text-3xl font-bold mb-4">Signup</h1>
          <form className="flex flex-col w-full">
            <input type="text" placeholder="Email" className="border border-gray-400 p-2 rounded-lg mb-2" />
            <input type="password" placeholder="Password" className="border border-gray-400 p-2 rounded-lg mb-2" />
            <input type="password" placeholder="Confirm Password" className="border border-gray-400 p-2 rounded-lg mb-2" />
            <button className="bg-orange-400 text-white p-2 rounded-lg">Signup</button>
            <p className="mt-2">
              Already have an account?{' '}
              <span className="text-blue-500 cursor-pointer underline" onClick={toggleLoginSignup}>
                Login here
              </span>
            </p>
          </form>
        </div>
        <div className={`flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 m-4 ${showLogin ? '' : 'hidden'}`}>
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form className="flex flex-col w-full">
            <input type="text" placeholder="Email" className="border border-gray-400 p-2 rounded-lg mb-2" />
            <input type="password" placeholder="Password" className="border border-gray-400 p-2 rounded-lg mb-2" />
            <button className="bg-orange-400 text-white p-2 rounded-lg">Login</button>
            <p className="mt-2">
              Don't have an account?{' '}
              <span className="text-blue-500 cursor-pointer underline" onClick={toggleLoginSignup}>
                Signup here
              </span>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
