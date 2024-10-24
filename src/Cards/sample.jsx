import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/axiosInstance';

const CustomerOrderCards = () => {
    const [getorder, setGetOrder] = useState([]);

    const fetchUserOrder = async () => {
        try {
            const response = await axiosInstance.get(`/product/getuserproduct`, {
                withCredentials: true,
            });
            console.log("Fetched orders: ", response.data);
            setGetOrder(response?.data || []);
        } catch (error) {
            console.error('Error fetching products details:', error);
        }
    };

    useEffect(() => {
        fetchUserOrder();
    }, []);

    // Payment handling function
    const handlePayment = async (order) => {
        try {
            const { data: paymentOrder } = await axiosInstance.post('/payment/create', {
                amount: order.price * 100 // Use the correct amount in paise
            }, {
                withCredentials: true // Include credentials (like cookies) in the request
            });

            // Check if Razorpay is loaded
            if (!window.Razorpay) {
                console.error('Razorpay SDK not loaded');
                return;
            }

            // Razorpay checkout options
            const options = {
                key: 'rzp_test_pEZkADDtQIAgoQ', // Replace with your Razorpay test/live key
                amount: paymentOrder.amount, // Use the amount returned from your server
                currency: paymentOrder.currency,
                name: order.name,
                description: order.description,
                order_id: paymentOrder.id, // Razorpay Order ID returned from backend
                handler: function (response) {
                    console.log('Payment successful', response);
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                },
                prefill: {
                    name: 'Your Name',
                    email: 'youremail@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#3399cc'
                }
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        } catch (error) {
            console.error('Error during payment:', error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-8 bg-gray-50">
            <h1 className="text-3xl font-semibold mb-6">Your Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getorder.length > 0 ? (
                    getorder.map((order) => (
                        <div key={order._id} className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-4">{order.name}</h3>
                            <p className="text-gray-700 mb-2">Price: {order.price}₹</p>
                            <p className="text-gray-700 mb-2">Description: {order.description}</p>
                            <button
                                onClick={() => handlePayment(order)}
                                className="w-full bg-green-600 text-white py-3 mt-6 rounded-md font-bold hover:bg-green-700 transition-colors"
                            >
                                Pay Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No orders available.</p>
                )}
            </div>
        </div>
    );
};

export default CustomerOrderCards;
