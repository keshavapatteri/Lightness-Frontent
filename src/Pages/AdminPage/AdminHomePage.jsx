import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
  <Link to='/admin/admincustmer'>
    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200">
      Manage Users
    </button>
  </Link>
  <p className="text-gray-500 mt-4">Add, edit, or remove users from the system.</p>
</div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">Manage Cars</h2>
          <p className="text-gray-500 mt-4">Add new cars, update details, or remove listings.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">View Reports</h2>
          <p className="text-gray-500 mt-4">Check daily, weekly, or monthly reports on the system usage.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
