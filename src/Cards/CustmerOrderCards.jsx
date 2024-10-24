import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/axiosInstance';

const CustomerOrderCards = () => {
    const [getAddresses, setGetAddresses] = useState([]);

    const fetchUserAddresses = async () => {
        try {
            const response = await axiosInstance.get(`/address/get`, {
                withCredentials: true,
            });
            console.log("Fetched addresses: ", response.data);
            setGetAddresses(response.data.addresses); // Assuming the response data has 'addresses' array
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    };

    useEffect(() => {
        fetchUserAddresses();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Addresses</h1>
            <div className="space-y-4">
                {getAddresses.map(address => {
                    // Parse the cart string to get an array of cart IDs
                    const cartIds = JSON.parse(address.cart || "[]");
                    
                    return (
                        <div key={address._id} className="flex items-center p-4 border rounded-md shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{address.name}</h2>
                                <p className="text-gray-600"><strong>Phone:</strong> {address.phone}</p>
                                <p className="text-gray-600"><strong>Street:</strong> {address.street}</p>
                                <p className="text-gray-600"><strong>City:</strong> {address.city}</p>
                                <p className="text-gray-600"><strong>Country:</strong> {address.country}</p>
                                <p className="text-gray-600"><strong>Postal Code:</strong> {address.postalCode}</p>
                                
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold">Total Cart Price: ₹{address.totalCartPrice}</p>
                                <p className="text-lg font-bold"><strong>Cart IDs:</strong> {cartIds.join(', ')}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CustomerOrderCards;
