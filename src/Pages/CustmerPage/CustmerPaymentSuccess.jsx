import React from 'react';

const CustmerPaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <svg
            className="w-16 h-16 text-green-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4 -4m7 -4a9 9 0 11-18 0a9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your payment was successfully processed.</p>
        <a
          href="/"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default CustmerPaymentSuccess;
