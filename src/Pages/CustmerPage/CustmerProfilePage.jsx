import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../../Config/axiosInstance';

const CustomerProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get(`/user/profile`, { withCredentials: true });
      setProfile(response?.data?.data[0] || null);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!profile) {
    return <div className="flex justify-center items-center h-screen">No profile data available</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/709/709722.png" // Replace with actual profile image URL
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customer Profile</h1>
            <p className="text-xl text-gray-800 font-semibold">{profile.name}</p>
          </div>
        </div>
        <div className="space-y-4">
          {/* Name */}
          <div className="flex justify-between">
            <p className="text-gray-600"><strong>Name:</strong></p>
            <p className="text-xl text-gray-800 font-semibold">{profile.name}</p>
          </div>

          {/* Email */}
          <div className="flex justify-between">
            <p className="text-gray-600"><strong>Email:</strong></p>
            <p className="text-xl text-gray-800 font-semibold">{profile.email}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="text-gray-600"><strong>Phone Number:</strong></p>
            <p className="text-xl text-gray-800 font-semibold">{profile.phonenumber}</p>
          </div>

          {/* Address (Add this field if available) */}
          <div className="flex justify-between">
            <p className="text-gray-600"><strong>Address:</strong></p>
            <p className="text-xl text-gray-800 font-semibold">{profile.address || 'N/A'}</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CustomerProfilePage;
