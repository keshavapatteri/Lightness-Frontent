import { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/axiosInstance';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const CustomerShippingCards = () => {
  const location = useLocation();
  const { cartId , totalCartPrice = 0 } = location.state || {}; 
 
console.log(cartId);

  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    district: '',
    postalCode: '',
    country: 'United States',
    phone: '',
    cartId,
    totalCartPrice,
  });

  const userId = localStorage.getItem('userId'); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(`/address/add`, formData, {
        withCredentials: true,
      });
      toast.success("Address saved successfully!"); 
      console.log("Address response ===>", response.data);
    } catch (error) {
      console.error('Error saving address:', error);
      toast.error("Failed to save address.");
      throw error; // Rethrow the error to prevent payment from proceeding.
    }
  };

  const handlePayment = async () => {
    try {
      const { data: paymentOrder } = await axiosInstance.post('/payment/create', {
        amount: totalDue * 100, 
      }, {
        withCredentials: true
      });

      if (!window.Razorpay) {
        console.error('Razorpay SDK not loaded');
        return;
      }

      const options = {
        key: 'rzp_test_pEZkADDtQIAgoQ',
        amount: paymentOrder.amount,
        currency: paymentOrder.currency,
        name: formData.name,
        description: "Order Payment",
        order_id: paymentOrder.id,
        handler: function (response) {
          console.log('Payment successful', response);
          toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: formData.name,
          email: 'youremail@example.com', 
          contact: formData.phone,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error during payment:', error);
      toast.error("Payment failed. Please try again.");
    }
  };

  const handleProceedCheckout = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await handleSubmit(); // First save the address
      await handlePayment(); // Then proceed with payment
    } catch (error) {
      console.error("Error in checkout process", error);
    }
  };

  const shippingCharge = 50;
  const totalDue = totalCartPrice + shippingCharge;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2">
          <form className="bg-[#f9f9f1] p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-6">1. SHIPPING ADDRESS</h2>

            {/* Form Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="street" className="block font-medium text-gray-700">Street *</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block font-medium text-gray-700">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                required
              />
            </div>
            {/* District Field */}
            <div className="mb-4">
              <label htmlFor="district" className="block font-medium text-gray-700">District *</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                required
              >
                <option value="">Select District</option>
                {/* Add district options */}
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Idukki">Idukki</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kannur">Kannur</option>
                <option value="Kasaragod">Kasaragod</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="postalCode" className="block font-medium text-gray-700">Zip code *</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                required
              />
            </div>
  {/* Country Field */}
  <div className="mb-4">
              <label htmlFor="country" className="block font-medium text-gray-700">Country *</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-md bg-white"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-[#f9f9f1] p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-2 text-lg text-gray-800">
            <li className="flex justify-between">
              <span>Subtotal</span>
              <span>{totalCartPrice}₹</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping</span>
              <span>{shippingCharge}₹</span>
            </li>
            <li className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{totalDue}₹</span>
            </li>
          </ul>
          <button
            type="submit"
            onClick={handleProceedCheckout}
            className="bg-indigo-600 text-white mt-6 w-full py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            Place Order & Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerShippingCards;
