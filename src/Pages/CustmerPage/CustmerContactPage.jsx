import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CustmerContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-6">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl">
        <div className="md:flex">
          {/* Left Side - Contact Form */}
          <div className="md:w-1/2 bg-gradient-to-b from-gray-100 to-white p-8">
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 text-center">Contact Us</h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div className="md:w-1/2 bg-indigo-600 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Reach Us</h2>
            <p className="mb-4">We'd love to hear from you. Contact us using the information below.</p>

            {/* Address */}
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-white mr-4" />
              <div>
                <p className="font-semibold">Lightness Industries</p>
                <p>Madikai, Nileshwar, Kasaragod, Kerala, PIN - 671314</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-white mr-4" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>808616444, 8086617444, 8547854685</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-white mr-4" />
              <div>
                <p className="font-semibold">Email</p>
                <p>lightness685@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustmerContactPage;
