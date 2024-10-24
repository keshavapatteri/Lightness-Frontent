import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../Config/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState(''); // Use setEmail instead of setUsername
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userLogin = async (data) => {
    try {
      const response = await axiosInstance.post("/admin/login", data, {
        withCredentials: true,
      });
      // Show success toast
      toast.success('Login successful!');
      navigate('/admin/admin'); // Navigate to the customer dashboard on success
    } catch (error) {
      console.log(error);
      // Show error toast
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin({ email, password }); // Call userLogin with email and password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email correctly
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
       
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default AdminLoginPage;
