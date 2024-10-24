import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../../Config/axiosInstance';

const AdminCustmerPage = () => {
  const [getAdmin, setGetAdmin] = useState([]);

  const fetchAdmin = async () => {
    try {
      const response = await axiosInstance.get(`/admin/user`, {
        withCredentials: true,
      });
      console.log("Response:", response);
      setGetAdmin(response?.data || []);
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Customer Page</h1>
        {getAdmin.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAdmin.map((admin) => (
              <div key={admin.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mb-2">{admin.name}</h2>
                <p className="text-gray-600 mb-4">Email: {admin.email}</p>
                {/* Add more details as needed */}
                
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No admin data available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminCustmerPage;
