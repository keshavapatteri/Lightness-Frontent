import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold text-white">Lightness Industries</h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
        <Link to="/">  <a href="#home" className="text-white hover:text-gray-200 transition duration-300">Home</a></Link> 
          <a href="#profile" className="text-white hover:text-gray-200 transition duration-300">Profile</a>
          <a href="#settings" className="text-white hover:text-gray-200 transition duration-300">Settings</a>
          <Link to="/loginPage"><a href="#" className="hover:text-blue-300 transition duration-200">Login</a></Link> 
          <Link to="/AdminloginPage"><a href="#" className="hover:text-blue-300 transition duration-200">Admin Login</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
