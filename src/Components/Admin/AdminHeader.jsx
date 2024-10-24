import React from 'react';

const AdminHeader = () => {

  
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Admin Panel
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
          <a href="/users" className="hover:text-gray-300">Users</a>
          <a href="/settings" className="hover:text-gray-300">Settings</a>
          <a href="/logout" className="hover:text-gray-300">Logout</a>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
