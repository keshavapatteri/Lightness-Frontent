import React, { useState } from 'react';
import { axiosInstance } from '../../../Config/axiosInstance';

import { toast, ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phonenumber: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/user/create', formData);
      toast.success(`Signup success`)
      console.log('Signup successful:', response);
    navigate('/loginPage')
      setError(null); // Reset error if successful
    } catch (error) {
      toast.error(`Aldready Signup`)
      console.error('Error signing up:', error);
     
      setSuccess(null); // Reset success message if there's an error
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Signup Page</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg"
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg"
            required 
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg"
            required 
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address"
            value={formData.address} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg"
            required 
          />
        </div>
        <div>
          <label htmlFor="phonenumber" className="block text-sm font-medium">Phone Number</label>
          <input 
            type="text" 
            id="phonenumber" 
            name="phonenumber"
            value={formData.phonenumber} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Signup
        </button>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignupPage;
