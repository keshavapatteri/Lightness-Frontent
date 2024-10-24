import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../Config/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userLogin = async (data) => {
    try {
      const response = await axiosInstance.post("/user/login", data, {
        withCredentials: true,
      });
      // Show success toast
      toast.success('Login successful!'); 
      navigate('/custmer/custmer'); // Navigate to the home page or another page on success
    } catch (error) {
      console.log(error);
      // Show error toast
      toast.error(error.message.data.message); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
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
        <p className="text-sm text-center mt-4">
          Don't have an account? <Link to='/signup' className="text-blue-500">Sign Up</Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable /> {/* Toast Container */}
    </div>
  );
};

export default LoginPage;
