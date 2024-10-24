import React from 'react'

const CustmerCanselPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-yellow-600">
    <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md mx-auto">
      <div className="flex items-center justify-center mb-6">
        <svg
          className="w-16 h-16 text-red-500 animate-pulse"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
      <p className="text-gray-600 mb-6">
        Your payment was not processed. If this was a mistake, please try again or contact support.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Back to Home
        </a>
        <a
          href="/contact-support"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  </div>
);
};

export default CustmerCanselPage
