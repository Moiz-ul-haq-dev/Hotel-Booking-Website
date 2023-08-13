import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import AdminDashboardPage from './AdminDashboardPage';

export default function LoginSignupPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [userRole] = useState('Customer');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassowrd(e.target.value)
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      console.log(email, password, confirmPassword, userRole);
      fetch('http://localhost:4000/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword, userRole }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error && data.error.includes('email')) {
            alert('Email already exists. Please use a different email.');
          } else {
            alert('Signup successful!');
          }
        });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    fetch('http://localhost:4000/logIn', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].email === email && data[i].password === password && data[i].userRole === "Admin") {
            console.log('Login Successful admin');
            localStorage.setItem('userRole', 'Admin');
            localStorage.setItem('email', email);
            localStorage.setItem('loggedIn', true);
            window.location.href = '/dashboard';
          }
          else if (data[i].email === email && data[i].password === password && data[i].userRole === "Customer") {
            console.log('Login Successful customer');
            localStorage.setItem('userRole', 'Customer');
            localStorage.setItem('email', email);
            localStorage.setItem('loggedIn', true);
            window.location.href = '/';
          }
        }
      }
      );
  };

  const toggleLoginSignup = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className={`flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 m-4 ${showLogin ? 'hidden' : ''}`}>
          <h1 className="text-3xl font-bold mb-4">Signup</h1>
          <form className="flex flex-col w-full" encType='multipart/form-data'>
            <input type="text" placeholder="Email" className="border border-gray-400 p-2 rounded-lg mb-2" onChange={handleEmailChange} />
            <input type="password" placeholder="Password" className="border border-gray-400 p-2 rounded-lg mb-2" onChange={handlePasswordChange} />
            <input type="password" placeholder="Confirm Password" className="border border-gray-400 p-2 rounded-lg mb-2" onChange={handleConfirmPasswordChange} />
            <button className="bg-orange-400 text-white p-2 rounded-lg" type='submit' onClick={handleSignUpSubmit}>Signup</button>
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
            <input type="text" placeholder="Email" className="border border-gray-400 p-2 rounded-lg mb-2" onChange={handleEmailChange} />
            <input type="password" placeholder="Password" className="border border-gray-400 p-2 rounded-lg mb-2" onChange={handlePasswordChange} />
            <button className="bg-orange-400 text-white p-2 rounded-lg" type='submit' onClick={handleLoginSubmit}>Login</button>
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
